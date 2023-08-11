// Here We Can Handle All Api End Points ...
import axios, { AxiosResponse, AxiosError } from 'axios';

const BASE_URL = 'http://localhost:8000';

// GET request function
async function get<T>(endpoint: string): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;
  try {
    const response: AxiosResponse<T> = await axios.get(url);
    return response.data;
  } catch (error) {
    handleRequestError(error);
    throw new Error('Request failed.');
  }
}

// POST request function
async function post<T>(endpoint: string, data: any): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;
  try {
    const response: AxiosResponse<T> = await axios.post(url, data);
    return response.data;
  } catch (error) {
    handleRequestError(error);
    throw new Error('Request failed.');
  }
}

// PUT request function
async function put<T>(endpoint: string, data: any): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;
  try {
    const response: AxiosResponse<T> = await axios.put(url, data);
    return response.data;
  } catch (error) {
    handleRequestError(error);
    throw new Error('Request failed.');
  }
}

// DELETE request function
async function del<T>(endpoint: string): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;
  try {
    const response: AxiosResponse<T> = await axios.delete(url);
    return response.data;
  } catch (error) {
    handleRequestError(error);
    throw new Error('Request failed.');
  }
}

// Handle request error
function handleRequestError(error: unknown): void {
  if (axios.isCancel(error as AxiosError)) {
    // Handle request cancellation
    const axiosError = error as AxiosError;
    console.error('Request canceled:', axiosError.message);
  } else {
    // Handle other errors
    console.error('Request failed:', (error as Error).message);
  }
}

// API methods
const apiClient = {
    signIn: (userData: any) => post<any>('/auth/signup', userData),
};

export default apiClient;
