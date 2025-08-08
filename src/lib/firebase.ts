// src/lib/firebase.ts  ← replace everything with this

import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';

// Firebase configuration with fallbacks for development
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'demo-api-key',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'demo-project.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'demo-project-id',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'demo-project.appspot.com',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '123456789',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || 'demo-app-id',
};

// Check if we're in development and using demo values
const isUsingDemoConfig = process.env.NODE_ENV === 'development' && 
  (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 
   process.env.NEXT_PUBLIC_FIREBASE_API_KEY === 'your-api-key-here');

if (isUsingDemoConfig) {
  console.warn('⚠️  Using demo Firebase configuration. For production, set up proper Firebase environment variables.');
  console.warn('📝 Create a .env.local file with your Firebase project credentials.');
}

let app;
let db: Firestore;

try {
  app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  db = getFirestore(app);
  
  if (isUsingDemoConfig) {
    console.warn('🔧 Firebase initialized with demo config. Contact form will not work until proper credentials are set.');
  }
} catch (error) {
  console.error('❌ Firebase initialization error:', error);
  
  // In development, provide helpful error message
  if (process.env.NODE_ENV === 'development') {
    console.error('💡 To fix this:');
    console.error('1. Create a Firebase project at https://console.firebase.google.com/');
    console.error('2. Create a .env.local file with your Firebase credentials');
    console.error('3. Or comment out Firebase usage in your components for now');
  }
  
  throw new Error('Failed to initialize Firebase. Please check your configuration.');
}

export { db };
