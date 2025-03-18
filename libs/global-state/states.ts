import { createWithStorage } from './zustand';
interface UserState {
    users:number;
    addUser:()=>void
}

export const useUserState = createWithStorage<UserState>('ahlb',(set,get)=>({
    users:0,
   addUser() {
       set({users:get().users+1})
   },
}))