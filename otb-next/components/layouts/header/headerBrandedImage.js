export default function HeaderBrandedImage({ title }) {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover object-center"
          src="/assets/concrete-heart.png"
          alt="concrete heart"
        />
        <div
          className="absolute inset-0 bg-gray-500 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <h1 className="text-white">{title}</h1>
      </div>
    </div>
  );
}
