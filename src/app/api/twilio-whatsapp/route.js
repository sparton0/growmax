import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { phoneNumber, message } = await request.json();

        // Twilio credentials (much simpler than Meta!)
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const fromNumber = process.env.TWILIO_WHATSAPP_NUMBER; // e.g., 'whatsapp:+14155238886'

        // Validate required fields
        if (!phoneNumber || !message) {
            return NextResponse.json(
                { error: 'Missing required fields: phoneNumber and message are required' },
                { status: 400 }
            );
        }

        // Clean phone number
        const cleanPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');
        let finalPhoneNumber = cleanPhoneNumber;
        if (cleanPhoneNumber.startsWith('91') && cleanPhoneNumber.length === 12) {
            finalPhoneNumber = 'whatsapp:+' + cleanPhoneNumber;
        } else if (cleanPhoneNumber.length === 10) {
            finalPhoneNumber = 'whatsapp:+91' + cleanPhoneNumber;
        } else {
            finalPhoneNumber = 'whatsapp:+' + cleanPhoneNumber;
        }

        console.log('📱 Twilio WhatsApp Debug:', {
            from: fromNumber,
            to: finalPhoneNumber,
            message: message.substring(0, 50) + '...'
        });

        // Send message via Twilio WhatsApp API (much simpler!)
        const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString('base64')}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                From: fromNumber,
                To: finalPhoneNumber,
                Body: message
            })
        });

        const responseData = await response.json();
        
        console.log('📥 Twilio Response:', {
            status: response.status,
            ok: response.ok,
            data: responseData
        });

        if (!response.ok) {
            console.error('❌ Twilio Error:', responseData);
            return NextResponse.json(
                { 
                    error: 'Failed to send message',
                    details: responseData.message || 'Unknown error',
                    errorCode: responseData.code,
                    fullError: responseData
                },
                { status: response.status }
            );
        }

        return NextResponse.json({
            success: true,
            messageId: responseData.sid,
            data: responseData,
            debugInfo: {
                sentTo: finalPhoneNumber,
                originalNumber: phoneNumber,
                timestamp: new Date().toISOString(),
                provider: 'Twilio'
            }
        });

    } catch (error) {
        console.error('Twilio API Error:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: error.message },
            { status: 500 }
        );
    }
}

