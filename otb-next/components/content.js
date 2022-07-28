import BlockContent from "@sanity/block-content-to-react";
import markdownStyles from "../styles/markdown-styles.module.css";

export default function Content({ blocks }) {
  return <BlockContent blocks={blocks} className={markdownStyles.markdown} />;
}
