import DiaryInput from "./DiaryInput";

export default function DiaryNewPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">

      <section className="w-full max-w-2xl bg-white rounded-3xl shadow-lg p-6 flex flex-col">

        <div className="mb-8">
          <h1 className="text-xl font-bold text-gray-800">
            ✍️ 오늘의 일기 작성
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            오늘 있었던 일을 자유롭게 기록해보세요
          </p>
        </div>

        <DiaryInput/>

      </section>
    </div>
  );
}