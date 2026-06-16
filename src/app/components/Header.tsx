"use client"
import { useAuthStore } from "../store/useAuthStore";

 

export default function Header() {
  const logout = useAuthStore((state)=>state.logout)
  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b">

      <div className="w-full px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">

        <div className="flex items-center gap-2">
          <div className="text-2xl">📖</div>
          <h1 className="font-bold text-gray-800 text-sm sm:text-base whitespace-nowrap">
            오늘의 일기
          </h1>
        </div>

        <nav className="flex items-center">
          <button className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 px-3 py-2 rounded-xl hover:bg-gray-100 transition whitespace-nowrap">
            모두의 일기
          </button>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">

          <button className="px-3 py-2 rounded-xl text-gray-600 hover:bg-gray-100 transition whitespace-nowrap">
            마이페이지
          </button>

          <button className="px-3 py-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition whitespace-nowrap"
          onClick={()=>logout()}
          >
            로그아웃
          </button>

        </div>

      </div>
    </header>
  );
}