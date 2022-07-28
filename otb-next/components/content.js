import PortableText from "@sanity/block-content-to-react";
import markdownStyles from "../styles/markdown-styles.module.css";

export default function Content({ blocks }) {
  return <PortableText blocks={blocks} className={markdownStyles} />;
}
