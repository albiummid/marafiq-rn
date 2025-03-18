import { MMKVLoader, } from 'react-native-mmkv-storage';

// Initialize MMKV Storage
const MMKV = new MMKVLoader().initialize()

const ldb = {
  /**
   * Store data in MMKV.
   * @param key Storage key
   * @param value Data to store (string, number, object, etc.)
   */
  set: (key: string, value: any): boolean => {
    try {
      MMKV.setString(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error setting item in MMKV: ${error}`);
      return false;
    }
  },

  /**
   * Retrieve data from MMKV.
   * @param key Storage key
   * @returns Parsed JSON data or null if not found
   */
  get: <T = any>(key: string): T | null => {
    try {
      const data = MMKV.getString(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error(`Error getting item from MMKV: ${error}`);
      return null;
    }
  },

  /**
   * Retrieve an object from an array stored in MMKV by ID.
   * @param key Storage key where the array is stored
   * @param id Unique ID of the object to retrieve
   * @returns Object if found, otherwise null
   */
  getById: <T extends { id: string | number }>(key: string, id: string | number): T | null => {
    try {
      const items: T[] = ldb.get<T[]>(key) || [];
      return items.find((item) => item.id === id) || null;
    } catch (error) {
      console.error(`Error getting item by ID from MMKV: ${error}`);
      return null;
    }
  },

  /**
   * Update an object inside an array stored in MMKV by ID.
   * @param key Storage key where the array is stored
   * @param id Unique ID of the object to update
   * @param updates Partial object containing properties to update
   */
  updateById: <T extends { id: string | number }>(
    key: string,
    id: string | number,
    updates: Partial<T>
  ): boolean => {
    try {
      const items: T[] = ldb.get<T[]>(key) || [];
      const updatedItems = items.map((item) => (item.id === id ? { ...item, ...updates } : item));

      return ldb.set(key, updatedItems);
    } catch (error) {
      console.error(`Error updating item in MMKV: ${error}`);
      return false;
    }
  },

  /**
   * Clear all stored data in MMKV.
   */
  clearAll: (): boolean => {
    try {
      MMKV.clearStore();
      return true;
    } catch (error) {
      console.error(`Error clearing MMKV storage: ${error}`);
      return false;
    }
  }
};

export default ldb;
