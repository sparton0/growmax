import { NextResponse } from 'next/server';

// Handle WhatsApp webhook events (incoming messages, delivery status, etc.)
export async function POST(request) {
    try {
        const body = await request.json();
        
        console.log('📨 Webhook Event Received:', JSON.stringify(body, null, 2));

        // Verify the webhook signature (recommended for production)
        // const signature = request.headers.get('x-hub-signature-256');
        // if (!verifyWebhookSignature(body, signature)) {
        //     return new Response('Unauthorized', { status: 401 });
        // }

        // Process webhook events
        if (body.object === 'whatsapp_business_account') {
            body.entry?.forEach(entry => {
                entry.changes?.forEach(change => {
                    if (change.field === 'messages') {
                        const value = change.value;
                        
                        // Handle incoming messages
                        if (value.messages) {
                            value.messages.forEach(message => {
                                console.log('📥 Incoming Message:', {
                                    from: message.from,
                                    id: message.id,
                                    timestamp: message.timestamp,
                                    type: message.type,
                                    text: message.text?.body
                                });
                                
                                // TODO: Process incoming message
                                // You can store in database, trigger auto-replies, etc.
                            });
                        }

                        // Handle message status updates (delivery, read, etc.)
                        if (value.statuses) {
                            value.statuses.forEach(status => {
                                console.log('📊 Message Status Update:', {
                                    id: status.id,
                                    status: status.status,
                                    timestamp: status.timestamp,
                                    recipient_id: status.recipient_id
                                });
                                
                                // TODO: Update message status in your database
                                // This is crucial for delivery confirmation
                            });
                        }

                        // Handle errors
                        if (value.errors) {
                            value.errors.forEach(error => {
                                console.error('❌ WhatsApp Error:', {
                                    code: error.code,
                                    title: error.title,
                                    message: error.message,
                                    error_data: error.error_data
                                });
                            });
                        }
                    }
                });
            });
        }

        // Always return 200 to acknowledge receipt
        return new Response('EVENT_RECEIVED', { status: 200 });

    } catch (error) {
        console.error('❌ Webhook Error:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}

// Handle webhook verification for this specific endpoint
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const mode = searchParams.get('hub.mode');
    const token = searchParams.get('hub.verify_token');
    const challenge = searchParams.get('hub.challenge');

    const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'your_verify_token';

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        console.log('✅ Webhook endpoint verified successfully!');
        return new Response(challenge, { status: 200 });
    } else {
        console.log('❌ Webhook verification failed:', { mode, token, expected: VERIFY_TOKEN });
        return new Response('Forbidden', { status: 403 });
    }
}

// Optional: Verify webhook signature for security (recommended for production)
function verifyWebhookSignature(payload, signature) {
    // Implementation depends on your security requirements
    // See: https://developers.facebook.com/docs/graph-api/webhooks/getting-started#verification-requests
    return true; // Simplified for now
}


