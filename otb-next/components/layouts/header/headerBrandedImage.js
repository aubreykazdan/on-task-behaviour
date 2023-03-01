export default function HeaderBrandedImage({ title }) {
  return (
    <div className="relative isolate overflow-hidden">
      <img
        className="h-full w-full object-cover absolute inset-0 -z-10"
        src="/assets/concrete-heart.png"
        alt="concrete heart"
      />
      <div
        className="absolute inset-0 bg-accent-dark mix-blend-multiply -z-10"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <h1 className="text-white">{title}</h1>
      </div>
    </div>
  );
}
