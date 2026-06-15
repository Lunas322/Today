"use client";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthStore } from "../store/useAuthStore";
import { auth } from "../lib/firebase";

export function useAuthListener() {
  const setUser = useAuthStore((state) => state.setUser);
  const setLoading = useAuthStore((state) => state.setLoading);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      console.log("유저 로딩 성공", user);
    });

    return () => unsubscribe();
  }, []);
}
