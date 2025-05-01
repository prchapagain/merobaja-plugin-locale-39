
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Make sure we're getting the root element
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Failed to find the root element");
} else {
  // Log a message to help with debugging
  console.log("Root element found, mounting React application");
  createRoot(rootElement).render(<App />);
}

// Add this to debug any issues
window.addEventListener('error', (event) => {
  console.error('Global error caught:', event.error);
});
