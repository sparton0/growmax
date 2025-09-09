# 🔧 Twilio WhatsApp API - Troubleshooting Guide

## Quick Diagnosis Checklist ✅

### 1. Environment Variables Check
```bash
# Check if your .env.local file exists and has correct variables
cat .env.local
```
Should contain:
```
TWILIO_ACCOUNT_SID=AC...
TWILIO_AUTH_TOKEN=...
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
```

### 2. Twilio Account Status
- ✅ Account created and verified
- ✅ Phone number verified
- ✅ Free trial credit available ($15)
- ✅ WhatsApp sandbox joined

### 3. WhatsApp Sandbox Status
- ✅ Sent "join your-code" to +1 415 523 8886
- ✅ Received confirmation message
- ✅ Recipient numbers added to sandbox

## Common Error Messages & Solutions

### ❌ "Twilio API Connection Failed"
**Cause:** Invalid credentials or configuration
**Solutions:**
1. Double-check Account SID and Auth Token
2. Ensure no extra spaces in credentials
3. Restart development server after changing .env.local
4. Check .env.local is in project root (not in src/)

### ❌ "The 'To' number +91xxxxxxxxxx is not a valid phone number"
**Cause:** Recipient not in WhatsApp sandbox
**Solutions:**
1. Join sandbox: Send "join your-code" to +1 415 523 8886
2. Add recipient to sandbox in Twilio Console
3. Ensure phone number format: +91xxxxxxxxxx

### ❌ "Permission to send an SMS/WhatsApp has not been enabled"
**Cause:** Account or number not properly configured
**Solutions:**
1. Complete Twilio account verification
2. Verify your phone number in Twilio Console
3. Check account status (not suspended)

### ❌ "Authentication failed"
**Cause:** Wrong Auth Token
**Solutions:**
1. Go to Twilio Console → Account → General Settings
2. Generate new Auth Token
3. Update .env.local with new token
4. Restart server

### ❌ "Message not delivered"
**Cause:** Various delivery issues
**Solutions:**
1. Check recipient joined WhatsApp sandbox
2. Verify recipient's WhatsApp is active
3. Check Twilio Console → Monitor → Logs
4. Wait 1-2 minutes for delivery

## Step-by-Step Debugging

### Step 1: Verify Twilio Account
1. Login to [Twilio Console](https://console.twilio.com/)
2. Check account status (should be "Active")
3. Verify you have trial credit remaining

### Step 2: Test API Credentials
Open browser console and run:
```javascript
fetch('/api/whatsapp', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    phoneNumber: '+911234567890',
    message: 'Test message'
  })
}).then(r => r.json()).then(console.log)
```

### Step 3: Check Environment Variables
Create a test API route to verify:
```javascript
// pages/api/test-env.js
export default function handler(req, res) {
  res.json({
    hasSID: !!process.env.TWILIO_ACCOUNT_SID,
    hasToken: !!process.env.TWILIO_AUTH_TOKEN,
    hasNumber: !!process.env.TWILIO_WHATSAPP_NUMBER,
    sidStart: process.env.TWILIO_ACCOUNT_SID?.substring(0, 5)
  });
}
```

### Step 4: Test WhatsApp Sandbox
1. Go to Twilio Console → Messaging → Try it out → WhatsApp
2. Send test message manually
3. If this fails, fix sandbox setup first

## Phone Number Format Guide

### ✅ Correct Formats:
- `+911234567890` (India)
- `+14155551234` (USA)
- `+447123456789` (UK)

### ❌ Wrong Formats:
- `911234567890` (missing +)
- `1234567890` (missing country code)
- `+91 1234 567890` (spaces)

## Environment File Troubleshooting

### Correct Location:
```
your-project/
├── .env.local          ✅ HERE
├── src/
└── package.json
```

### Wrong Location:
```
your-project/
├── src/
│   └── .env.local      ❌ NOT HERE
└── package.json
```

### File Format Check:
```bash
# Check file encoding (should be UTF-8)
file .env.local

# Check for hidden characters
cat -A .env.local

# Check file permissions
ls -la .env.local
```

## Testing Different Scenarios

### Test 1: Valid Phone Number
```javascript
const testData = {
  phoneNumber: '+911234567890', // Replace with your number
  message: 'Test message from Twilio'
};
```

### Test 2: Invalid Phone Number
```javascript
const testData = {
  phoneNumber: '1234567890', // Should fail
  message: 'Test message'
};
```

### Test 3: Long Message
```javascript
const testData = {
  phoneNumber: '+911234567890',
  message: 'A'.repeat(1600) // Test message length limits
};
```

## Twilio Console Debugging

### 1. Check Logs:
- Go to Monitor → Logs → Errors
- Look for recent WhatsApp API calls
- Check error codes and messages

### 2. Check Usage:
- Go to Monitor → Usage
- Verify API calls are being made
- Check message delivery status

### 3. Check Account Status:
- Go to Account → General Settings
- Verify account is "Active"
- Check remaining trial credit

## Advanced Debugging

### Enable Detailed Logging:
Add to your API route:
```javascript
console.log('Environment Check:', {
  hasSID: !!process.env.TWILIO_ACCOUNT_SID,
  hasToken: !!process.env.TWILIO_AUTH_TOKEN,
  hasNumber: !!process.env.TWILIO_WHATSAPP_NUMBER,
  nodeEnv: process.env.NODE_ENV
});
```

### Test with cURL:
```bash
curl -X POST http://localhost:3000/api/whatsapp \
  -H "Content-Type: application/json" \
  -d '{"phoneNumber":"+911234567890","message":"Test from cURL"}'
```

### Network Issues:
```javascript
// Add timeout and retry logic
const response = await fetch(url, {
  ...options,
  timeout: 30000,
  retry: 3
});
```

## Getting Additional Help

### 1. Twilio Support:
- [Twilio Support Portal](https://support.twilio.com/)
- [WhatsApp API Documentation](https://www.twilio.com/docs/whatsapp)
- [Error Code Reference](https://www.twilio.com/docs/api/errors)

### 2. Community Resources:
- [Twilio Community](https://www.twilio.com/community)
- [Stack Overflow - Twilio Tag](https://stackoverflow.com/questions/tagged/twilio)

### 3. Contact Information:
- Twilio Support: support@twilio.com
- WhatsApp Business API: business-api@whatsapp.com

## Quick Fix Commands

```bash
# Restart development server
npm run dev

# Clear Node.js cache
rm -rf .next
npm run dev

# Check environment variables
node -e "console.log(process.env.TWILIO_ACCOUNT_SID)"

# Test API endpoint
curl http://localhost:3000/api/whatsapp

# Check file permissions
chmod 600 .env.local
```

---

**Still having issues?** 
1. Check the complete setup guide: `TWILIO_WHATSAPP_SETUP.md`
2. Verify you followed all steps in order
3. Test with Twilio Console first before using your app
4. Contact Twilio support with specific error messages

