import classNames from "classnames";

export default function Container({
  children,
  event = false,
  className = "flex flex-col container mx-auto",
}) {
  const sectionClass = classNames({
    "p-10": event,
    [className]: true,
  });
  return <div className={sectionClass}>{children}</div>;
}
