export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { name, phone, service, date, time, barber, message } = req.body;

    if (!name || !phone || !service || !date || !time) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
    const recipient = process.env.WHATSAPP_RECIPIENT || '212663838127';

    if (!phoneNumberId || !accessToken) {
      return res.status(500).json({ success: false, error: 'Server configuration error' });
    }

    const formattedMessage = `New Booking Request\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nBarber: ${barber || 'Not provided'}\nDate: ${date}\nTime: ${time}\nMessage: ${message || 'Not provided'}`;

    const response = await fetch(
      `https://graph.facebook.com/v23.0/${phoneNumberId}/messages`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: recipient,
          type: 'text',
          text: { body: formattedMessage },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({
        success: false,
        error: 'WhatsApp API error',
        details: data,
      });
    }

    return res.status(200).json({ success: true, data });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      details: err.message,
    });
  }
}
