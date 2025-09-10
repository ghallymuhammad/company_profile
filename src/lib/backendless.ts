import Backendless from 'backendless';

// Backendless configuration
// Get these from your Backendless console: https://develop.backendless.com
const APP_ID = process.env.NEXT_PUBLIC_BACKENDLESS_APP_ID || 'YOUR_APP_ID';
const API_KEY = process.env.NEXT_PUBLIC_BACKENDLESS_API_KEY || 'YOUR_API_KEY';

// Initialize Backendless
if (!Backendless.applicationId) {
  Backendless.initApp(APP_ID, API_KEY);
}

// Extend the Backendless User type
interface BackendlessUser extends Backendless.User {
  name?: string;
  role?: string;
}

interface BlogPostData {
  title: string;
  content: string;
  author: string;
  status: string;
  tags: string[];
  createdAt: string;
}

export default Backendless;

// Helper functions for authentication
export const BackendlessAuth = {
  async login(email: string, password: string) {
    try {
      const user = await Backendless.UserService.login(email, password, true) as BackendlessUser;
      return {
        success: true,
        user: {
          id: user.objectId || '',
          email: user.email || '',
          name: user.name || user.email || '',
          role: user.role || 'user'
        }
      };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Login failed';
      return {
        success: false,
        error: errorMessage
      };
    }
  },

  async register(email: string, password: string, name: string) {
    try {
      const user = new Backendless.User() as BackendlessUser;
      user.email = email;
      user.password = password;
      user.name = name;
      
      const registeredUser = await Backendless.UserService.register(user);
      return {
        success: true,
        user: registeredUser
      };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Registration failed';
      return {
        success: false,
        error: errorMessage
      };
    }
  },

  async logout() {
    try {
      await Backendless.UserService.logout();
      return { success: true };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Logout failed';
      return {
        success: false,
        error: errorMessage
      };
    }
  },

  async getCurrentUser() {
    try {
      const user = await Backendless.UserService.getCurrentUser() as BackendlessUser;
      if (user) {
        return {
          success: true,
          user: {
            id: user.objectId || '',
            email: user.email || '',
            name: user.name || user.email || '',
            role: user.role || 'user'
          }
        };
      }
      return { success: false, user: null };
    } catch (error) {
      return { success: false, user: null };
    }
  }
};

// Blog post management
export const BackendlessBlog = {
  async createPost(postData: BlogPostData) {
    try {
      const result = await Backendless.Data.of('BlogPosts').save(postData);
      return { success: true, post: result };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to create post';
      return { success: false, error: errorMessage };
    }
  },

  async getPosts() {
    try {
      const posts = await Backendless.Data.of('BlogPosts').find();
      return { success: true, posts };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch posts';
      return { success: false, error: errorMessage };
    }
  },

  async updatePost(objectId: string, postData: Partial<BlogPostData>) {
    try {
      const updateData = { ...postData, objectId };
      const result = await Backendless.Data.of('BlogPosts').save(updateData);
      return { success: true, post: result };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to update post';
      return { success: false, error: errorMessage };
    }
  },

  async deletePost(objectId: string) {
    try {
      await Backendless.Data.of('BlogPosts').remove({ objectId });
      return { success: true };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to delete post';
      return { success: false, error: errorMessage };
    }
  }
};
