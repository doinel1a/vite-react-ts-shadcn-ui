import path from 'path';
import { fileURLToPath } from 'url';

import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

// Load environment variables based on NODE_ENV
const env = process.env.NODE_ENV ?? 'development';

switch (env) {
  case 'development':
    dotenv.config({ path: '.env.development' });
    break;
  case 'test':
    dotenv.config({ path: '.env.test' });
    break;
  case 'staging':
    dotenv.config({ path: '.env.staging' });
    break;
  case 'production':
    dotenv.config({ path: '.env.production' });
    break;
  default:
    throw new Error(`Unknown environment: ${env}`);
}

// Get base path from env (fallback to '/')
const basePath = process.env.VITE_BASE_PATH ?? '/';
const port = process.env.PORT ?? 3000;

const app = express();

// Serve static files under the base path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(basePath, express.static(path.join(__dirname, '..', 'dist')));

// SPA fallback route
app.get(`${basePath}/{*splat}`, (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}${basePath}`);
});
