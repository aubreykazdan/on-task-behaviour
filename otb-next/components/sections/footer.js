export default function Footer({ settings }) {
  const { copyright } = settings;
  return (
    <footer className="mt-auto flex justify-center mb-4">
      <p>
        {new Date().getFullYear()} {""}
        {copyright}
      </p>
    </footer>
  );
}
