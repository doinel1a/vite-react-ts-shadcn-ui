import '@/styles/global.scss';
import '@/styles/global.css';

import { createRoot } from 'react-dom/client';

import App from '@/app';
import { enableMockingIfNeeded } from '@/mocks/enable-mocking-if-needed';

const container = document.querySelector('#root');
const root = createRoot(container as HTMLElement);

await enableMockingIfNeeded();
root.render(<App />);
