"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  status: "published" | "draft" | "pending";
  createdAt: string;
  tags: string[];
}

export default function AdminDashboard() {
  const { isAuthenticated, isAdmin, user, isLoading } = useAuth();
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login?redirect=/admin");
      return;
    }
    if (!isLoading && isAuthenticated && !isAdmin) {
      router.push("/");
      return;
    }
    
    // Mock blog posts data for demo (in real app, this would be an API call)
    const mockPosts: BlogPost[] = [
      {
        id: "1",
        title: "Tips Merawat Casing Laptop Retak Agar Tetap Kuat",
        content: "Retak kecil bisa melebar jika salah penanganan...",
        author: "John Doe",
        status: "published",
        createdAt: "2025-09-01",
        tags: ["Perawatan"]
      },
      {
        id: "2",
        title: "User Submitted Post",
        content: "This is a user submitted post waiting for moderation...",
        author: "Regular User",
        status: "pending",
        createdAt: "2025-09-10",
        tags: ["Hardware"]
      }
    ];
    
    setPosts(mockPosts);
  }, [isAuthenticated, isAdmin, isLoading, router]);

  if (isLoading) {
    return (
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin dashboard...</p>
        </div>
      </section>
    );
  }

  if (!isAuthenticated || !isAdmin) {
    return (
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-red-800 mb-2">Access Denied</h2>
            <p className="text-red-600">Admin access required.</p>
          </div>
        </div>
      </section>
    );
  }

  const handleStatusChange = (postId: string, newStatus: BlogPost["status"]) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, status: newStatus } : post
    ));
    alert(`Post status changed to ${newStatus}`);
  };

  const handleDelete = (postId: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      setPosts(posts.filter(post => post.id !== postId));
      alert("Post deleted successfully");
    }
  };

  const handleEdit = (post: BlogPost) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-blue-gray-900 mb-2">Admin Dashboard</h2>
          <p className="text-lg text-gray-600">Manage and moderate blog posts</p>
          <div className="mt-2 inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Admin: {user?.name}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Link href="/blog/create" className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg text-center transition-colors">
            <div className="text-2xl mb-2">📝</div>
            <div className="font-medium">Create New Post</div>
          </Link>
          <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">✅</div>
            <div className="font-medium">{posts.filter(p => p.status === "published").length} Published</div>
          </div>
          <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">⏳</div>
            <div className="font-medium">{posts.filter(p => p.status === "pending").length} Pending Review</div>
          </div>
          <div className="bg-gray-100 text-gray-800 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">📄</div>
            <div className="font-medium">{posts.filter(p => p.status === "draft").length} Drafts</div>
          </div>
        </div>

        {/* Posts Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{post.title}</div>
                      <div className="text-sm text-gray-500">{post.tags.join(", ")}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{post.author}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        post.status === "published" ? "bg-green-100 text-green-800" :
                        post.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                        "bg-gray-100 text-gray-800"
                      }`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(post)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Edit
                        </button>
                        <select
                          value={post.status}
                          onChange={(e) => handleStatusChange(post.id, e.target.value as BlogPost["status"])}
                          className="text-xs border rounded px-2 py-1"
                        >
                          <option value="draft">Draft</option>
                          <option value="pending">Pending</option>
                          <option value="published">Published</option>
                        </select>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Edit Modal (Simple) */}
        {showModal && selectedPost && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-bold mb-4">Edit Post</h3>
              <p className="text-sm text-gray-600 mb-4">
                Title: {selectedPost.title}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                This is a demo modal. In a real app, you would have a full edit form here.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    alert("Changes saved (demo)");
                    setShowModal(false);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
