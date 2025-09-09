'use client'
import React, { useState, useEffect } from "react";
import { Table, Button, message, Card, Space, notification, Spin } from "antd";
import { SendOutlined, CheckCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

export default function Admin() {
    const [isApiConfigured, setIsApiConfigured] = useState(false);
    const [loading, setLoading] = useState(false);
    const [testingConnection, setTestingConnection] = useState(false);

    // Sample data - you can replace this with your actual data
    const data = [
        {
            key: '1',
            consumerNo: '*065518873916',
            billMonth: 'Mar-2025',
            readingStatus: 'Drop down',
            loadStatus: 'Drop down',
            pfStatus: 'Drop down',
            amountInRs: 0,
            paymentBefore: 'XX/XX/2025',
            whatsappNumber: '+91 90288 16712',
            remarks: 'All parameters are okay'
        }
    ];

    // Test API Configuration on component mount
    useEffect(() => {
        testApiConnection();
    }, []);

    // Twilio WhatsApp API - Send Message Function
    const sendWhatsAppMessage = async (phoneNumber, messageText) => {
        const response = await fetch('/api/whatsapp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phoneNumber,
                message: messageText
            })
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.details || responseData.error || 'Failed to send message');
        }

        return responseData;
    };

    // Handle Direct Send with Twilio WhatsApp API
    const handleDirectSend = async (record) => {
        const reportMessage = `🔋 *Growmax Engineers*
*Electricity Bill Report*

Hello! This is an automated message from our billing system.

📋 *Consumer Details:*
• Consumer No: ${record.consumerNo}
• Bill Month: ${record.billMonth}

📊 *Status Information:*
• Reading Status: ${record.readingStatus}
• Load Status: ${record.loadStatus}
• PF Status: ${record.pfStatus}

💰 *Payment Details:*
• Amount: Rs. ${record.amountInRs}
• Payment Due: ${record.paymentBefore}

📝 *Remarks:* ${record.remarks}

Thank you for using our services! 🙏

For any queries, please contact us:
📞 Phone: ${process.env.BUSINESS_PHONE || '+91-XXXXX-XXXXX'}
✉️ Email: ${process.env.BUSINESS_EMAIL || 'support@abcelectricity.com'}

- Growmax Engineers Team`;

        try {
            setLoading(true);
            
            notification.info({
                message: '📤 Sending via Twilio...',
                description: `Delivering report to ${record.whatsappNumber}`,
                duration: 2,
            });

            // Send message via Twilio WhatsApp API
            const result = await sendWhatsAppMessage(record.whatsappNumber, reportMessage);

            notification.success({
                message: '✅ Message Sent Successfully!',
                description: `Report delivered to ${result.debugInfo?.sentTo || record.whatsappNumber}. Twilio SID: ${result.messageId || 'N/A'}`,
                duration: 8,
            });

            console.log('✅ Twilio WhatsApp API Success:', result);

        } catch (error) {
            console.error('Twilio WhatsApp API Error:', error);

            notification.error({
                message: '❌ Failed to Send Message',
                description: error.message || 'Please check your Twilio API configuration',
                duration: 6,
            });
        } finally {
            setLoading(false);
        }
    };

    // Test Twilio API Configuration
    const testApiConnection = async () => {
        try {
            setTestingConnection(true);
            
            notification.info({
                message: 'Testing Twilio Connection...',
                description: 'Verifying Twilio WhatsApp API credentials',
                duration: 2,
            });

            // Test with a simple API call to check credentials
            const response = await fetch('/api/whatsapp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phoneNumber: '+911234567890', // Test number
                    message: 'Twilio connection test - credentials verification'
                })
            });

            const responseData = await response.json();

            // For Twilio, we check if credentials are properly configured
            if (response.ok) {
                setIsApiConfigured(true);
                notification.success({
                    message: '✅ Twilio API Connected!',
                    description: 'Twilio WhatsApp API is ready to use',
                    duration: 3,
                });
            } else if (response.status === 400 && responseData.details?.includes('not a valid phone number')) {
                // If phone number validation fails but credentials are valid
                setIsApiConfigured(true);
                notification.success({
                    message: '✅ Twilio API Connected!',
                    description: 'Credentials valid (test phone number format invalid)',
                    duration: 3,
                });
            } else {
                throw new Error(responseData.details || responseData.error || 'Twilio API connection failed');
            }
        } catch (error) {
            setIsApiConfigured(false);
            notification.error({
                message: '❌ Twilio API Connection Failed',
                description: 'Please check your Twilio environment variables',
                duration: 5,
            });
            console.error('Twilio API Connection Test Failed:', error);
        } finally {
            setTestingConnection(false);
        }
    };

    const columns = [
        {
            title: 'Consumer No.',
            dataIndex: 'consumerNo',
            key: 'consumerNo',
        },
        {
            title: 'Bill of Month',
            dataIndex: 'billMonth',
            key: 'billMonth',
        },
        {
            title: 'Reading Status',
            dataIndex: 'readingStatus',
            key: 'readingStatus',
        },
        {
            title: 'Load Status',
            dataIndex: 'loadStatus',
            key: 'loadStatus',
        },
        {
            title: 'PF Status',
            dataIndex: 'pfStatus',
            key: 'pfStatus',
        },
        {
            title: 'Amount in Rs.',
            dataIndex: 'amountInRs',
            key: 'amountInRs',
        },
        {
            title: 'Payment Before',
            dataIndex: 'paymentBefore',
            key: 'paymentBefore',
        },
        {
            title: 'WhatsApp Number',
            dataIndex: 'whatsappNumber',
            key: 'whatsappNumber',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space>
                    <Button
                        type="primary"
                        icon={<SendOutlined />}
                        onClick={() => handleDirectSend(record)}
                        loading={loading}
                        disabled={!isApiConfigured}
                        style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
                    >
                        Send Report
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div className="container" style={{ padding: '20px' }}>
            <div className="row">
                <div className="col-md-12">
                    <h1>Admin Dashboard</h1>
                    <p>Consumer billing information and automated report sharing</p>

                    {/* Twilio API Status Card */}
                    <Card
                        title={
                            <Space>
                                {isApiConfigured ? <CheckCircleOutlined style={{ color: '#52c41a' }} /> : <ExclamationCircleOutlined style={{ color: '#fa8c16' }} />}
                                Twilio WhatsApp API Status
                                {testingConnection && <Spin size="small" />}
                            </Space>
                        }
                        style={{ marginBottom: '20px' }}
                        size="small"
                    >
                        <Space direction="vertical" style={{ width: '100%' }}>
                            <div>
                                <strong>Status: </strong>
                                {isApiConfigured ? (
                                    <span style={{ color: '#52c41a' }}>✅ Connected & Ready</span>
                                ) : (
                                    <span style={{ color: '#fa8c16' }}>⚠️ Not Connected</span>
                                )}
                            </div>
                            
                            <Button
                                type="default"
                                onClick={testApiConnection}
                                loading={testingConnection}
                                style={{ marginTop: '10px' }}
                            >
                                Test Twilio Connection
                            </Button>

                            {!isApiConfigured && (
                                <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#fff7e6', borderRadius: '4px', border: '1px solid #ffd591' }}>
                                    <strong>⚠️ Twilio Not Configured:</strong> Please check your .env.local file and ensure you have:
                                    <ul style={{ marginTop: '5px', marginBottom: '0' }}>
                                        <li>TWILIO_ACCOUNT_SID</li>
                                        <li>TWILIO_AUTH_TOKEN</li>
                                        <li>TWILIO_WHATSAPP_NUMBER</li>
                                    </ul>
                                </div>
                            )}
                        </Space>
                    </Card>

                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                        scroll={{ x: 1200 }}
                        style={{ marginTop: '20px' }}
                    />

                    <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
                        <strong>Remarks:</strong> All parameters are okay
                    </div>

                    {/* Twilio Setup Instructions */}
                    <Card
                        title="📱 Twilio WhatsApp API Setup Guide"
                        style={{ marginTop: '20px' }}
                        size="small"
                    >
                        <div>
                            <h4>🔧 Environment Configuration:</h4>
                            <p>Create a <strong>.env.local</strong> file in your project root with:</p>
                            <pre style={{ backgroundColor: '#f6f6f6', padding: '10px', borderRadius: '4px' }}>
{`TWILIO_ACCOUNT_SID=your_account_sid_here
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
BUSINESS_NAME=Growmax Engineers
BUSINESS_PHONE=+91-XXXXX-XXXXX
BUSINESS_EMAIL=contact@growmax.com`}
                            </pre>

                            <h4>🚀 Quick Setup Steps:</h4>
                            <ol>
                                <li><strong>Create Twilio Account:</strong> Go to <a href="https://www.twilio.com/try-twilio" target="_blank" rel="noopener noreferrer">twilio.com/try-twilio</a></li>
                                <li><strong>Get Account SID & Auth Token:</strong> From Twilio Console Dashboard</li>
                                <li><strong>Enable WhatsApp:</strong> Go to Messaging → Try it out → Send a WhatsApp message</li>
                                <li><strong>Get Sandbox Number:</strong> Use +1 415 523 8886 for testing (whatsapp:+14155238886)</li>
                                <li><strong>Join Sandbox:</strong> Send "join [your-sandbox-keyword]" to the Twilio WhatsApp number</li>
                                <li><strong>Add Recipients:</strong> Add phone numbers to your sandbox for testing</li>
                                <li><strong>Update .env.local:</strong> Add your credentials to the environment file</li>
                                <li><strong>Restart Server:</strong> Restart your Next.js development server</li>
                            </ol>

                            <h4>💰 Pricing:</h4>
                            <ul>
                                <li>✅ <strong>Free Trial:</strong> $15 credit to get started</li>
                                <li>💵 <strong>WhatsApp Messages:</strong> $0.005 per message sent</li>
                                <li>🔄 <strong>No Monthly Fees:</strong> Pay-as-you-go pricing</li>
                                <li>📱 <strong>Sandbox:</strong> Free for development and testing</li>
                            </ul>

                            <h4>🔧 Troubleshooting:</h4>
                            <ol>
                                <li><strong>Join Sandbox:</strong> Send "join [keyword]" to +1 415 523 8886 on WhatsApp first</li>
                                <li><strong>Add Test Numbers:</strong> In Twilio Console → Messaging → Try it out → WhatsApp Sandbox</li>
                                <li><strong>Check Console Logs:</strong> Open browser DevTools → Console tab for detailed error logs</li>
                                <li><strong>Verify Credentials:</strong> Double-check Account SID and Auth Token from Twilio Console</li>
                                <li><strong>Phone Format:</strong> Ensure phone numbers include country code (+91 for India)</li>
                                <li><strong>Rate Limits:</strong> Twilio has rate limits - wait between messages if needed</li>
                            </ol>

                            <h4>🎯 Production Setup:</h4>
                            <p><strong>For production use:</strong> You'll need to apply for a dedicated WhatsApp Business number through Twilio, which requires business verification and approval from WhatsApp.</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};