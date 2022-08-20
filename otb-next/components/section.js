import classNames from "classnames";

export default function Section({
  container = false,
  noMargin = false,
  className = "mb-14 px-4",
  children,
}) {
  const sectionClass = classNames({
    "m-0": noMargin,
    "container mx-auto": container,
    [className]: true,
  });
  return <section className={sectionClass}>{children}</section>;
}
