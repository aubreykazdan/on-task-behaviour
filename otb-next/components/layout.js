import Meta from "./meta";
import Footer from "./sections/footer";
import Header from "./sections/header";

export default function Layout({ children, data }) {
  const { categories, settings, socials } = data;
  console.log(categories);
  return (
    <div className="z-50">
      <Meta settings={settings} />
      <Header categories={categories} socials={socials} />
      <main className="flex flex-col min-h-screen container mx-auto px-4">
        {children}
      </main>
      <Footer settings={settings} />
    </div>
  );
}
