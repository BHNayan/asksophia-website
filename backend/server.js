const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to handle incoming data and append it to Google Sheets
app.post('/submitFormData', async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required fields.' });
    }

    // Send the data to Google Sheets
    const response = await axios.post('WEB_APP_URL_HERE', { name, email }); // Replace with your Google Apps Script web app URL
    console.log(response.data);

    res.status(200).json({ message: 'Data added successfully.' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
