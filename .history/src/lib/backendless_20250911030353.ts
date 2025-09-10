import Backendless from 'backendless';

// Backendless configuration
// You need to get these from your Backendless console: https://develop.backendless.com
const APP_ID = 'YOUR_APP_ID'; // Replace with your actual App ID
const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API Key

// Initialize Backendless
if (!Backendless.applicationId) {
  Backendless.initApp(APP_ID, API_KEY);
}

export default Backendless;

// Helper functions for authentication
export const BackendlessAuth = {
  async login(email: string, password: string) {
    try {
      const user = await Backendless.UserService.login(email, password, true);
      return {
        success: true,
        user: {
          id: user.objectId,
          email: user.email,
          name: user.name || user.email,
          role: user.role || 'user'
        }
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Login failed'
      };
    }
  },

  async register(email: string, password: string, name: string) {
    try {
      const user = new Backendless.User();
      user.email = email;
      user.password = password;
      user.name = name;
      
      const registeredUser = await Backendless.UserService.register(user);
      return {
        success: true,
        user: registeredUser
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Registration failed'
      };
    }
  },

  async logout() {
    try {
      await Backendless.UserService.logout();
      return { success: true };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Logout failed'
      };
    }
  },

  async getCurrentUser() {
    try {
      const user = await Backendless.UserService.getCurrentUser();
      if (user) {
        return {
          success: true,
          user: {
            id: user.objectId,
            email: user.email,
            name: user.name || user.email,
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
  async createPost(postData: any) {
    try {
      const result = await Backendless.Data.of('BlogPosts').save(postData);
      return { success: true, post: result };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  async getPosts() {
    try {
      const posts = await Backendless.Data.of('BlogPosts').find();
      return { success: true, posts };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  async updatePost(objectId: string, postData: any) {
    try {
      postData.objectId = objectId;
      const result = await Backendless.Data.of('BlogPosts').save(postData);
      return { success: true, post: result };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  async deletePost(objectId: string) {
    try {
      await Backendless.Data.of('BlogPosts').remove({ objectId });
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
};
