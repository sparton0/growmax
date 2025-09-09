import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { phoneNumber, message } = await request.json();

        // Get Twilio credentials from environment variables
        const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
        const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
        const twilioWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER; // e.g., 'whatsapp:+14155238886'

        // Validate required fields
        if (!phoneNumber || !message) {
            return NextResponse.json(
                { error: 'Missing required fields: phoneNumber and message are required' },
                { status: 400 }
            );
        }

        // Validate environment variables
        if (!twilioAccountSid || !twilioAuthToken || !twilioWhatsAppNumber) {
            console.error('❌ Missing Twilio API credentials in environment variables');
            return NextResponse.json(
                { 
                    error: 'Server configuration error: Twilio API credentials not configured',
                    details: 'Please check TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_WHATSAPP_NUMBER in your .env.local file'
                },
                { status: 500 }
            );
        }

        // Clean phone number (remove non-digits and format)
        const cleanPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');
        
        // Format phone number for WhatsApp (ensure country code)
        let finalPhoneNumber = cleanPhoneNumber;
        if (cleanPhoneNumber.startsWith('91') && cleanPhoneNumber.length === 12) {
            finalPhoneNumber = '+' + cleanPhoneNumber; // Already has country code
        } else if (cleanPhoneNumber.length === 10) {
            finalPhoneNumber = '+91' + cleanPhoneNumber; // Add India country code
        } else if (!cleanPhoneNumber.startsWith('+')) {
            finalPhoneNumber = '+' + cleanPhoneNumber;
        }

        // Format for Twilio WhatsApp
        const twilioToNumber = `whatsapp:${finalPhoneNumber}`;
        
        console.log('📱 Twilio WhatsApp API Debug:', {
            originalNumber: phoneNumber,
            cleanedNumber: cleanPhoneNumber,
            finalNumber: finalPhoneNumber,
            twilioToNumber: twilioToNumber,
            twilioFromNumber: twilioWhatsAppNumber,
            messageLength: message.length,
            accountSid: twilioAccountSid?.substring(0, 10) + '...'
        });

        // Create Basic Auth header for Twilio
        const credentials = Buffer.from(`${twilioAccountSid}:${twilioAuthToken}`).toString('base64');

        // Prepare Twilio API request data
        const formData = new URLSearchParams();
        formData.append('From', twilioWhatsAppNumber);
        formData.append('To', twilioToNumber);
        formData.append('Body', message);

        console.log('📤 Sending to Twilio API:', {
            from: twilioWhatsAppNumber,
            to: twilioToNumber,
            bodyLength: message.length
        });

        // Send message via Twilio API
        const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${twilioAccountSid}/Messages.json`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData.toString()
        });

        const responseData = await response.json();
        
        console.log('📥 Twilio API Response:', {
            status: response.status,
            ok: response.ok,
            data: responseData
        });

        if (!response.ok) {
            console.error('❌ Twilio API Error:', responseData);
            return NextResponse.json(
                { 
                    error: 'Failed to send WhatsApp message via Twilio',
                    details: responseData.message || responseData.error_message || 'Unknown error',
                    errorCode: responseData.code,
                    fullError: responseData
                },
                { status: response.status }
            );
        }

        return NextResponse.json({
            success: true,
            messageId: responseData.sid,
            status: responseData.status,
            data: responseData,
            debugInfo: {
                sentTo: finalPhoneNumber,
                originalNumber: phoneNumber,
                twilioSid: responseData.sid,
                timestamp: new Date().toISOString()
            }
        });

    } catch (error) {
        console.error('Twilio API Route Error:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: error.message },
            { status: 500 }
        );
    }
}

// Handle Twilio webhook (for message status updates)
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    
    // Simple health check endpoint
    return NextResponse.json({ 
        status: 'Twilio WhatsApp API endpoint is running',
        timestamp: new Date().toISOString()
    });
}