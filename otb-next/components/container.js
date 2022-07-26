import classNames from "classnames";

export default function Container({
  children,
  section = false,
  padding = false,
  regular = false,
  small = false,
  className = "flex flex-col container mx-auto",
}) {
  const sectionClass = classNames({
    "py-10": padding,
    " min-h-450 m-6 ": regular,
    "": small,
    "mb-20 md:mb-10": section,
    [className]: true,
  });
  return <div className={sectionClass}>{children}</div>;
}
