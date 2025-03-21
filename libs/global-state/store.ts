import {router} from 'expo-router';
import {createWithStorage} from './zustand';

interface AuthState {
  token: string | null;
  error: Error | null;
  user: {
    name: string;
    email: string;
  } | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  checkAuth: () => void;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  setUser: (user: AuthState['user']) => void;
  resetState: () => void;
}

const initialAuthState = {
  error: null,
  isLoading: false,
  token: null,
  user: null,
  isAuthenticated: false,
};

export const useAuthState = createWithStorage<AuthState>(
  'auth',
  (set, get) => ({
    ...initialAuthState,
    checkAuth: () => {
      const {token, user} = get();
      if (token && user) {
        set({isAuthenticated: true, isLoading: false});
      } else {
        set({isAuthenticated: false, isLoading: false});
      }
    },
    login: async (email, password) => {
      // simulate login
      let success = false;
      try {
        set({isLoading: true});
        // const res = await api.post('/login', {email, password});
        // console.log(res.data);
        success = true;
        set({
          isAuthenticated: true,
          isLoading: false,
          token: 'fake',
          user: {
            name: 'John Doe',
            email,
          },
        });
        router.replace('/(tabs)/home');
      } catch (error) {
        success = false;
        set({error: error as Error, isLoading: false});
      }
      // await new Promise(resolve => setTimeout(resolve, 3000));
      // const token = 'fake-token';
      // set({
      //   token,
      //   user: {
      //     name: 'John Doe',
      //     email,
      //   },
      //   isAuthenticated: true,
      //   isLoading: false,
      // });
      return success;
    },
    logout: async () => {
      // simulate logout
      set({isLoading: true});
      await new Promise(resolve => setTimeout(resolve, 3000));
      set({
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
    },
    setUser(user) {
      set({user});
    },
    resetState() {
      set(initialAuthState);
    },
  }),
);
