import { create } from "zustand";
import { supabase } from "@/lib/supabase";




type User = {
	id: string,
	email: string
} | null ;

interface AuthStore {
	user: User;
	setUser: (user: User) => void;
	logout: () => Promise<void>;
}

export const useAuth = create<AuthStore>((set) => ({
	user: null,
	setUser: ( user ) => set({ user }),
	logOut: async() => {
		await supabase.auth.signOut();
		set({ user: null})
	}
}))