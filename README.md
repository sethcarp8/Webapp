# Kauai Property Solutions - Landing Page

A modern, responsive landing page for Kauai Property Solutions built with Next.js 15, React 19, Tailwind CSS v4, and Firebase.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 App Router, React 19, TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS v4
- **Contact Form**: Integrated with Firebase Firestore
- **Auto-Reply System**: AI-powered email responses via OpenAI
- **Gmail Integration**: Automatic draft creation with label organization
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Security**: Comprehensive security headers and CSP protection

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Backend**: Firebase Functions v2
- **Database**: Firestore
- **AI**: OpenAI GPT-4
- **Email**: Gmail API with OAuth2
- **Security**: Content Security Policy, Security Headers, Automated Scanning

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
│   │   ├── layout.tsx        # Root layout with security headers
│   │   └── globals.css       # Global styles
│   └── lib/
│       └── firebase.ts       # Firebase client config
├── functions/
│   └── src/
│       └── index.ts          # Firebase Functions
├── public/
│   ├── robots.txt            # Search engine directives
│   └── .well-known/
│       └── security.txt      # Security contact information
├── scripts/
│   └── security-check.sh     # Local security verification
├── .github/
│   └── workflows/
│       └── security-scan.yml # Automated security scanning
├── firestore.rules           # Database security rules
├── firebase.json             # Firebase configuration
├── next.config.ts            # Next.js config with security headers
└── package.json
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `./scripts/security-check.sh` - Run local security checks

### Firebase Functions

- `gmailAuthURL` - Gmail OAuth authorization URL
- `oauthCallback` - OAuth callback handler
- `contactAutoDraft` - Auto-reply email drafter with Gmail label organization

## 🚀 Deployment

### Frontend (Vercel)
```bash
npm run build
npx vercel --prod
```

### Backend (Firebase)
```bash
firebase deploy --only functions
firebase deploy --only firestore:rules
```

## 🔐 Security Features

### Security Headers
- **X-Frame-Options**: DENY (prevents clickjacking)
- **Content-Security-Policy**: Comprehensive with Firebase support
- **Strict-Transport-Security**: HTTPS enforcement
- **X-Content-Type-Options**: nosniff
- **X-XSS-Protection**: 1; mode=block
- **Referrer-Policy**: strict-origin-when-cross-origin
- **Permissions-Policy**: Camera, microphone, geolocation restrictions

### Content Security Policy
Allows necessary Firebase endpoints while maintaining security:
- `https://firestore.googleapis.com` - Firestore database
- `https://identitytoolkit.googleapis.com` - Firebase Auth
- `https://securetoken.googleapis.com` - Secure token management
- `https://firebaseinstallations.googleapis.com` - Firebase installations
- `https://oauth2.googleapis.com` - OAuth authentication
- `https://accounts.google.com` - Google account services

### Automated Security Scanning
- **GitHub Actions**: Weekly security scans (Mondays at 2 AM)
- **NPM Audit**: Package vulnerability detection
- **Lighthouse CI**: Performance and security audit
- **PR Comments**: Automated security findings reporting
- **Local Security Script**: Manual security verification

### Database Security
- **Firestore Rules**: Secure database access rules
- **Secret Management**: Sensitive data in Firebase Secret Manager
- **OAuth Security**: Secure Gmail token storage

### Security Files
- **robots.txt**: Search engine directives
- **security.txt**: Security researcher contact information
- **.gitignore**: Proper exclusion of sensitive files

## 🛡️ Security Scanning

### Automated Workflow
The project includes comprehensive security scanning via GitHub Actions:

```yaml
# Runs on: push, pull_request, weekly schedule
- NPM Audit: Package vulnerability detection
- Lighthouse CI: Performance and security audit
- Artifact Upload: Security reports retention
- PR Comments: Automated security findings
```

### Local Security Checks
Run security verification locally:
```bash
./scripts/security-check.sh
```

This script checks:
- NPM vulnerabilities
- Security headers
- Git .env file exposure
- Large file detection

## 📝 License

© 2025 Kauai Property Solutions. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### Security Guidelines
- All code changes trigger automated security scans
- Security headers are automatically applied
- Firebase rules are deployed with functions
- Environment variables are properly configured

---

Built with ❤️ using Next.js 15, Firebase, and comprehensive security practices
