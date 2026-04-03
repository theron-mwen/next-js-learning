"use client"; // Error boundary must be a client component

import "./globals.css";

// Global error boundary to catch any uncaught errors in the application
// THIS ONLY WORKS ON PRODUCTION
// REQUIRES HTML AND BODY TAG TO BE RENDERED IN THE ERROR BOUNDARY COMPONENT
export default function GlobalError() {
  return (
    <html>
      <body>
        <div>
          <h2>Something went wrong!</h2>
          <button onClick={() => location.reload()}>Refresh</button>
        </div>
      </body>
    </html>
  );
}
