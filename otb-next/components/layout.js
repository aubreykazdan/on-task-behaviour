import Footer from "./sections/footer";
import Header from "./sections/header";

export default function Layout({ children, categories, settings }) {
  return (
    <div className="">
      <Header categories={categories} />
      <main className="flex flex-col min-h-screen container mx-auto">
        {children}
      </main>
      <Footer settings={settings} />
    </div>
  );
}
