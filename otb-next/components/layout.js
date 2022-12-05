import Meta from "./meta";
import Footer from "./sections/footer";
import Header from "./sections/header";

export default function Layout({ children }) {
  return (
    <div className="">
      <Meta />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
