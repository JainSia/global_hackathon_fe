import { useState, FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axiosInstance from "services/axiosConfig";
import { generateUUID, setAuthUUID } from "utils/auth";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<{username: string, password: string}>({username: "", password: ""});
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUserLogin = async (credentials: {username: string, password: string}) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axiosInstance.post("/auth/login", credentials);
      
      if (response.data.message === "Login successful") {
        // Generate UUID and store in localStorage
        const uuid = generateUUID();
        setAuthUUID(uuid);
        
        // Store user info if needed
        if (remember) {
          localStorage.setItem("user", JSON.stringify({ username: credentials.username }));
        }
        
        navigate("/dashboard", { replace: true });
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Invalid username or password");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    try{
      await handleUserLogin(formState);
    }catch(error: any){
      setError("Invalid email or name");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="w-full max-w-md mx-auto p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <div className="mb-6 text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">
            KPI
          </div>
          <h1 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">Welcome back</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Sign in to continue to KPI Tracker</p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          {error && <div className="text-sm text-red-600 bg-red-50 dark:bg-red-900/30 p-2 rounded">{error}</div>}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Username</label>
            <input
              type="text"
              value={formState.username}
              onChange={(e) => setFormState({...formState, username: e.target.value})}
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="Enter your username"
              autoComplete="username"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <input
              type="password"
              value={formState.password}
              onChange={(e) => setFormState({...formState, password: e.target.value})}
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-indigo-600 focus:ring-indigo-400"
              />
              <span className="ml-2">Remember me</span>
            </label>

            
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-medium hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <div className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
          By signing in you agree to our <span className="text-indigo-600">Terms</span>.
        </div>
      </div>
    </div>
  );
};

export default LoginPage;