import Meta from "./meta";
import Footer from "./sections/footer";
import Header from "./sections/header";

export default function Layout({ children, data }) {
  const { settings, socials } = data;
  return (
    <div className="">
      <Meta settings={settings} />
      <Header />
      <main className="flex flex-col min-h-screen container mx-auto px-4">
        {children}
      </main>
      <Footer settings={settings} />
    </div>
  );
}
