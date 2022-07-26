import Footer from "./sections/footer";

export default function Layout({ children }) {
  return (
    <main className="container mx-auto flex flex-col min-h-screen">
      {children}
    </main>
  );
}
