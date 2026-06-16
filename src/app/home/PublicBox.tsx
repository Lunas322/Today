"use client"

import React, { SetStateAction } from "react"

type Props = {
    setIsPublic: React.Dispatch<SetStateAction<boolean>>
    isPublic: boolean
}

export default function PublicBox ({setIsPublic,isPublic}:Props) {
    return(
              <div className="mb-4">
        <label className="text-sm text-gray-600 block mb-2">
          공개 설정
        </label>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setIsPublic(true)}
            className={`flex-1 py-3 rounded-2xl border transition ${
              isPublic
                ? "bg-rose-400 text-white border-rose-400"
                : "bg-white text-gray-600 border-gray-200"
            }`}
          >
            🌍 공개
          </button>

          <button
            type="button"
            onClick={() => setIsPublic(false)}
            className={`flex-1 py-3 rounded-2xl border transition ${
              !isPublic
                ? "bg-gray-700 text-white border-gray-700"
                : "bg-white text-gray-600 border-gray-200"
            }`}
          >
            🔒 비공개
          </button>
        </div>

        <p className="mt-2 text-xs text-gray-400">
          {isPublic
            ? "다른 사용자가 이 일기를 볼 수 있습니다."
            : "본인만 볼 수 있습니다."}
        </p>
      </div>
    )
}