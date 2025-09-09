# WhatsApp Business API Setup Instructions

## 1. Create Environment File

Create a file named `.env.local` in your project root (same level as package.json) with the following content:

```env
# WhatsApp Business Cloud API Configuration
WHATSAPP_ACCESS_TOKEN=your_permanent_access_token_here
WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id_here
WHATSAPP_VERIFY_TOKEN=your_verify_token_here

# Business Configuration
BUSINESS_NAME=ABC Electricity Board
```

## 2. Replace Placeholder Values

Replace the placeholder values with your actual credentials:

- **WHATSAPP_ACCESS_TOKEN**: Your permanent access token from Meta Developer Console
- **WHATSAPP_PHONE_NUMBER_ID**: Your phone number ID from WhatsApp Business API setup
- **WHATSAPP_VERIFY_TOKEN**: Your webhook verification token

## 3. Restart Your Development Server

After creating the `.env.local` file, restart your Next.js development server:

```bash
npm run dev
```

## 4. Test the Integration

1. Go to `/admin` page
2. The API status should show "✅ Connected & Ready"
3. Click "Send Report" to send a WhatsApp message directly

## Important Notes

- The `.env.local` file should never be committed to git (it's already in .gitignore)
- Make sure your WhatsApp Business API is properly configured in Meta Developer Console
- Add recipient phone numbers to your test recipients list in Meta Console
- The system will now send messages directly without opening WhatsApp Web

## Troubleshooting

If you see "⚠️ Not Connected":
1. Check that `.env.local` exists in the project root
2. Verify all environment variables are set correctly
3. Restart your development server
4. Check browser console for detailed error messages

