
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
  
  try {
    createRoot(rootElement).render(<App />);
    console.log("React application mounted successfully");
  } catch (error) {
    console.error("Failed to render React application:", error);
  }
}

// Add this to debug any issues
window.addEventListener('error', (event) => {
  console.error('Global error caught:', event.error);
});

// Log when resources fail to load
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});
