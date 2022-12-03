export default function Container({ children }) {
  return (
    <div className="relative mx-auto max-w-7xl sm:px-6 lg:px-8 py-16 md:py-24">
      {children}
    </div>
  );
}
