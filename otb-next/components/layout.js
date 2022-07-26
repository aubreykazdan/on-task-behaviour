import Footer from "./sections/footer";

export default function Layout({ children, settings }) {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      {/* <Header navMenu={navMenu} categories={categories} router={router} /> */}
      <main className="container mx-auto border">{children}</main>
      <Footer settings={settings} />
    </div>
  );
}
