"use client";

import { useState } from "react";
import useDiary from "../hooks/useDiary";
import PublicBox from "./PublicBox";

export default function DiaryInput() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  const cleanInput = () => {
    setContent("");
    setTitle("");
    setIsPublic(true);
  };

  const { handleAddStore, loading } = useDiary({
    title,
    content,
    isPublic,
    cleanInput,
  });

  return (
    <>
      <div className="mb-5">
        <label className="text-sm text-gray-600">제목</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="예: 오늘은 정말 좋은 하루였다"
          className="w-full mt-1 px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-300"
        />
      </div>

      <PublicBox setIsPublic={setIsPublic} isPublic={isPublic}/>

      <div className="mb-6 flex-1">
        <label className="text-sm text-gray-600">내용</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="오늘 무슨 일이 있었나요?"
          className="w-full mt-1 h-64 px-4 py-3 border border-gray-200 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-rose-300"
        />
      </div>

      <div className="mt-auto flex gap-3 pt-4">
        <button
          disabled={loading}
          onClick={cleanInput}
          className="flex-1 py-3 rounded-2xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
        >
          취소
        </button>

        <button
          disabled={loading}
          onClick={() => handleAddStore()}
          className={`flex-1 py-3 rounded-2xl font-semibold transition active:scale-[0.98]
          ${
            loading
              ? "bg-rose-300 text-white cursor-not-allowed"
              : "bg-rose-400 text-white hover:bg-rose-500"
          }`}
        >
          {loading ? "저장 중..." : "저장하기"}
        </button>
      </div>
    </>
  );
}