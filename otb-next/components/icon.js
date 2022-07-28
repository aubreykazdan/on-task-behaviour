import { AiOutlineInstagram } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";

function IconBox({ children, external, aria }) {
  return (
    <li>
      <a aria-label={aria} href={external} rel="noreferrer" target="_blank">
        {children}
      </a>
    </li>
  );
}

export function Instagram(props) {
  return (
    <IconBox {...props}>
      <AiOutlineInstagram />
    </IconBox>
  );
}

export function TikTok(props) {
  return (
    <IconBox {...props}>
      <SiTiktok />
    </IconBox>
  );
}
