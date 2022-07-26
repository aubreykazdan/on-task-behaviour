export default function Layout({ children, data, router }) {
  // const { navMenu, settings, categories, socials } = data;
  return (
    <div className="min-h-screen w-screen flex flex-col">
      {/* <Header navMenu={navMenu} categories={categories} router={router} /> */}
      <main className="container mx-auto border">{children}</main>
      {/* <Footer
        navMenu={navMenu}
        categories={categories}
        router={router}
        socials={socials}
        settings={settings}
      /> */}
    </div>
  );
}
