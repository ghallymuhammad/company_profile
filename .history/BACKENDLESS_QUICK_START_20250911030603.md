# 🌐 Backendless Access Guide

## Quick Setup

### 1. **Get Backendless Account**
Visit: [https://develop.backendless.com](https://develop.backendless.com)
- Sign up for free
- Create new app
- Copy App ID and API Key

### 2. **Configure Project**
Update `.env.local`:
```env
NEXT_PUBLIC_BACKENDLESS_APP_ID=your_app_id_here
NEXT_PUBLIC_BACKENDLESS_API_KEY=your_api_key_here
```

### 3. **Switch to Backendless (Optional)**
Replace in `layout.tsx`:
```tsx
// Current (Demo):
import { AuthProvider } from "./context/AuthContext";

// Switch to Backendless:
import { BackendlessAuthProvider } from "./context/BackendlessAuthContext";
```

## 🎯 What You Get

### Current Setup (Demo Mode):
- ✅ Frontend-only authentication
- ✅ localStorage persistence  
- ✅ Demo users (admin/user)
- ✅ No backend required

### With Real Backendless:
- 🌐 Real user registration/login
- 🗄️ Cloud database storage
- 📧 Email verification
- 🔐 Password reset functionality
- 📊 User analytics
- 🚀 Scalable infrastructure

## 🔧 Current Demo Credentials
- **Admin**: admin@casinglaptop.com / admin123
- **User**: user@casinglaptop.com / user123

## 📚 Full Documentation
See `BACKENDLESS_SETUP.md` for complete setup guide.

---
Your authentication system is ready to work with either demo mode or real Backendless! 🚀
