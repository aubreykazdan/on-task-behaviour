import Meta from "./meta";
import Footer from "./sections/footer";
import Header from "./sections/header";

export default function Layout({ children, data }) {
  const { settings, socials } = data;
  return (
    <div className="">
      <Meta settings={settings} />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer settings={settings} />
    </div>
  );
}
