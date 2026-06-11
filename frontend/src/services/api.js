import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED') {
      return Promise.reject(new Error('Request timed out. Please try again.'));
    }
    if (!error.response) {
      return Promise.reject(
        new Error('Cannot connect to server. Please ensure the Flask API is running on port 5000.')
      );
    }
    const message = error.response?.data?.error || 'An unexpected error occurred.';
    return Promise.reject(new Error(message));
  }
);

export const analyzeEmail = async (emailText) => {
  const response = await apiClient.post('/predict', { email: emailText });
  return response.data;
};

export default apiClient;
