import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

const distPath = path.join(__dirname, 'dist');

// Serve static assets from dist
app.use(express.static(distPath));

// Health check endpoint for Cloud Run
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

// SPA fallback to index.html
app.get('*', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(200).send('Oglity application is starting up...');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Production server running on http://0.0.0.0:${PORT}`);
});
