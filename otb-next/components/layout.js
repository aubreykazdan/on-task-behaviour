import Meta from "./meta";
import Footer from "./base/footer";
import Header from "./base/header";

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
