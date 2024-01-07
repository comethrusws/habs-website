const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Endpoint to download the calendar PDF
app.get('/download-calendar', (req, res) => {
  const file = 'calendar/Q3_calendar.pdf'; // Adjust the file path accordingly
  const filePath = path.join(__dirname, file); // Update this line

  try {
    const stat = fs.statSync(filePath);

    res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-Length': stat.size,
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  } catch (err) {
    console.error('Error downloading PDF:', err);
    res.status(500).send('Error downloading PDF');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
