import Meta from "./meta";
import Footer from "./sections/footer";
import NewHeader from "./sections/newHeader";

export default function Layout({ children, data }) {
  const { categories, settings, socials } = data;
  return (
    <div className="">
      <Meta settings={settings} />
      {/* <Header categories={categories} socials={socials} /> */}
      <NewHeader />
      <main className="flex flex-col min-h-screen container mx-auto px-4">
        {children}
      </main>
      <Footer settings={settings} />
    </div>
  );
}
