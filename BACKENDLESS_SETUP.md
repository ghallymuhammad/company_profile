# Backendless Integration Setup Guide

## 🌐 How to Access and Set Up Backendless

### Step 1: Create a Backendless Account

1. **Visit Backendless Console**: Go to [https://develop.backendless.com](https://develop.backendless.com)
2. **Sign Up**: Create a free account or log in if you already have one
3. **Create New App**: Click "CREATE NEW APP" and give it a name (e.g., "CasingLaptopBlog")

### Step 2: Get Your Credentials

1. **Dashboard**: After creating your app, you'll be in the dashboard
2. **App Settings**: Click on "Manage" → "App Settings"
3. **Copy Credentials**:
   - **App ID**: Found in the app settings
   - **API Key**: Found in the app settings (use the JavaScript API Key)

### Step 3: Configure Your Project

1. **Update Environment Variables**: Edit `.env.local` file:
```env
NEXT_PUBLIC_BACKENDLESS_APP_ID=your_actual_app_id_here
NEXT_PUBLIC_BACKENDLESS_API_KEY=your_actual_api_key_here
```

2. **Restart Development Server**:
```bash
npm run dev
```

### Step 4: Set Up Data Tables (Optional)

1. **Go to Data Service**: In Backendless console, go to "Data"
2. **Create BlogPosts Table**:
   - Table name: `BlogPosts`
   - Columns:
     - `title` (String)
     - `content` (Text)
     - `author` (String)
     - `status` (String)
     - `tags` (String - JSON array)
     - `createdAt` (DateTime)

3. **Set Permissions**: Configure who can read/write data

### Step 5: Set Up User Registration (Optional)

1. **Go to Users**: In Backendless console, go to "Users"
2. **Configure User Properties**:
   - Add custom property `name` (String)
   - Add custom property `role` (String) with default value "user"

## 🔄 Current Status

Your project is currently set up to work with **both**:

1. **Demo Mode** (Current): Uses localStorage with demo credentials
2. **Backendless Mode** (Ready): Just add your credentials to switch

## 🚀 To Switch to Real Backendless

1. **Get credentials** from Backendless console
2. **Update `.env.local`** with real values
3. **Update AuthContext** to use BackendlessAuth instead of localStorage
4. **Test authentication** with real users

## 📝 Code Examples

### Using Backendless Authentication
```typescript
import { BackendlessAuth } from '@/lib/backendless';

// Login
const result = await BackendlessAuth.login(email, password);
if (result.success) {
  console.log('User logged in:', result.user);
}

// Register
const result = await BackendlessAuth.register(email, password, name);

// Get current user
const result = await BackendlessAuth.getCurrentUser();
```

### Using Backendless Blog Functions
```typescript
import { BackendlessBlog } from '@/lib/backendless';

// Create post
const result = await BackendlessBlog.createPost({
  title: 'My Post',
  content: 'Post content...',
  author: 'Author Name',
  status: 'published',
  tags: ['tech', 'laptop'],
  createdAt: new Date().toISOString()
});

// Get all posts
const result = await BackendlessBlog.getPosts();
```

## 🎯 Benefits of Using Backendless

- ✅ **Real user authentication** with password reset, email verification
- ✅ **Real-time database** with automatic syncing
- ✅ **File storage** for blog images
- ✅ **Push notifications** for new blog posts
- ✅ **Analytics** and user tracking
- ✅ **Scalable infrastructure** without managing servers

## 🔧 Current Demo Credentials

While testing, you can use these demo credentials:
- **Admin**: admin@casinglaptop.com / admin123
- **User**: user@casinglaptop.com / user123

Once you switch to Backendless, you'll create real user accounts through the registration system.
