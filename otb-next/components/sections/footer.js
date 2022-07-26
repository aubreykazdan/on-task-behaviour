export default function Footer({ settings }) {
  const { copyright } = settings;
  return (
    <footer className="mt-auto">
      <p>
        {new Date().getFullYear()} {""}
        {copyright}
      </p>
    </footer>
  );
}
