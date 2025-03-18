import appConfigs from '@/app.configs';
import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

// Start
export const api = axios.create({
    baseURL: appConfigs.baseURL,
    timeout: 5000,
  });

  // request interceptor
  api.interceptors.request.use(request=>{
    return request
  })
  
  // response interceptor
  api.interceptors.response.use((response)=>{
    return response
  })
  

  // Query Client
export const queryClient = new QueryClient();
