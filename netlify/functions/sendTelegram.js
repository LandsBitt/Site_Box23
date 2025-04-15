export async function handler(event, context) {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: 'Method Not Allowed',
      };
    }
  
    const { name, email, phone = "Não informado", subject = "Não informado", message } = JSON.parse(event.body);
  
    const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
  
    const text = `
  📨 *Novo contato do portfólio!*
  👤 *Nome:* ${name}
  📧 *Email:* ${email}
  📱 *Telefone:* ${phone}
  📝 *Assunto:* ${subject}
  💬 *Mensagem:* ${message}
    `;
  
    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
  
    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: "Markdown"
        })
      });
  
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Mensagem enviada para o Telegram!' })
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Erro ao enviar para o Telegram.', error: err.message })
      };
    }
  }
  