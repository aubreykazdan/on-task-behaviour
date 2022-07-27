import Footer from "./sections/footer";
import Header from "./sections/header";

export default function Layout({ children, categories, settings }) {
  return (
    <div className="z-50">
      <Header categories={categories} />
      <main className="flex flex-col min-h-screen container mx-auto px-4">
        {children}
      </main>
      <Footer settings={settings} />
    </div>
  );
}
