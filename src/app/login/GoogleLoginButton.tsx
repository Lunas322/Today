"use client";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { auth } from "../lib/firebase";

export default function GoogleLoginButton() {
  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log("구글 로그인 에러: ", error);
    }
  };

  return (
    <button
      className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-2xl py-3 font-medium hover:bg-gray-50 transition"
      onClick={() => handleLogin()}
    >
      <Image
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="google"
        width={20}
        height={20}
      />
      Google로 시작하기
    </button>
  );
}
