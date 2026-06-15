
import GoogleLoginButton from "./GoogleLoginButton";

export default function LoginPage() {

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-orange-50 flex items-center justify-center px-4">
      <section className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">📖</div>

          <h1 className="text-3xl font-bold text-gray-800">오늘의 일기</h1>

          <p className="text-gray-500 mt-2">
            오늘 있었던 이야기를 기록해보세요
          </p>
        </div>

        <div className="space-y-3">
          <GoogleLoginButton />
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            로그인 후 나만의 일기를 작성하고
            <br />
            친구들과 하루를 공유할 수 있어요 ✨
          </p>
        </div>
      </section>
    </main>
  );
}
