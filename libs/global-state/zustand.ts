// src/middleware.ts
import { MMKVLoader } from 'react-native-mmkv-storage';
import { create, StateCreator } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// Initialize MMKV storage
const MMKV = new MMKVLoader().initialize();

// Create a custom storage object for Zustand
const createMMKVStorage = () => ({
  getItem: async (key: string) => {
    const value = await MMKV.getStringAsync(key);
    return value ? value : null;
  },
  setItem: async (key: string, value: string) => {
   return await MMKV.setStringAsync(key, value);
  },
  removeItem: async (key: string) => {
   return  MMKV.removeItem(key);
  },
});

export const createWithStorage = <T=any>(name:string,fn:StateCreator<T>)=>create<T>()(persist(fn,{
  name,
  storage:createJSONStorage(()=>createMMKVStorage())
}))
