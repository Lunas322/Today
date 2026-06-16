import Header from "../components/Header";


export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <section className="flex-1">
        {children}
      </section>
    </main>
  );
}