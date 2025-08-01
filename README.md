# Kauai Property Solutions - Landing Page

A modern, responsive landing page for Kauai Property Solutions built with Next.js 15, React 19, Tailwind CSS v4, and Firebase.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 App Router, React 19, TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS v4
- **Contact Form**: Integrated with Firebase Firestore
- **Auto-Reply System**: AI-powered email responses via OpenAI
- **Gmail Integration**: Automatic draft creation for manual review
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Backend**: Firebase Functions v2
- **Database**: Firestore
- **AI**: OpenAI GPT-4
- **Email**: Gmail API with OAuth2

## 📋 Prerequisites

- Node.js 18+ 
- Firebase CLI
- OpenAI API key
- Gmail API credentials

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd webapp
```

### 2. Install Dependencies
```bash
npm install
cd functions && npm install && cd ..
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:
```bash
# Firebase Configuration (Public)
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 4. Firebase Setup

Set up Firebase Functions secrets:
```bash
firebase functions:secrets:set OPENAI_API_KEY
firebase functions:secrets:set GMAIL_CLIENT_ID
firebase functions:secrets:set GMAIL_CLIENT_SECRET
```

### 5. Deploy Functions
```bash
firebase deploy --only functions
```

### 6. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
webapp/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main landing page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   └── lib/
│       └── firebase.ts       # Firebase client config
├── functions/
│   └── src/
│       └── index.ts          # Firebase Functions
├── public/                   # Static assets
└── package.json
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Firebase Functions

- `gmailAuthURL` - Gmail OAuth authorization URL
- `oauthCallback` - OAuth callback handler
- `contactAutoDraft` - Auto-reply email drafter

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy the .next folder to your hosting platform
```

### Backend (Firebase)
```bash
firebase deploy --only functions
```

## 🔐 Security

- Firebase API keys are public (safe for client-side)
- Sensitive secrets are stored in Firebase Secret Manager
- Gmail OAuth tokens are stored securely in Firestore
- All API calls are properly authenticated

## 📝 License

© 2025 Kauai Property Solutions. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ using Next.js 15 and Firebase
