{
  "name": "launchprep-king-thrive-mvp",
  "version": "1.0.0",
  "description": "Subscription-based AI-integrated competency platform for the King Thrive Model.",
  "main": "server/server.js",
  "scripts": {
    "start": "node server/server.js",
    "dev": "node server/server.js"
  },
  "dependencies": {
    "@stripe/stripe-js": "^4.0.0",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "openai": "^4.56.0",
    "stripe": "^16.8.0"
  }
}