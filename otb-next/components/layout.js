import Footer from "./sections/footer";
import Header from "./sections/header";

export default function Layout({ children, categories, settings }) {
  console.log(settings);
  return (
    <div className="container mx-auto ">
      <Header categories={categories} />
      <main className="flex flex-col min-h-screen">{children}</main>
      <Footer settings={settings} />
    </div>
  );
}
