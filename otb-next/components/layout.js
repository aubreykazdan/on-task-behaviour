import Footer from "./sections/footer";
import Header from "./sections/header";

export default function Layout({ children, categories }) {
  return (
    <div className="container mx-auto ">
      <Header categories={categories} />
      <main className="flex flex-col min-h-screen">{children}</main>
    </div>
  );
}
