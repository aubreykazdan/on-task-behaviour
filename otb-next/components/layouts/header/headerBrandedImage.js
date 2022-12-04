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
      <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-0">
          {title}
        </h1>
      </div>
    </div>
  );
}
