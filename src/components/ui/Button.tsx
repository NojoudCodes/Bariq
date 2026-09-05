import { Link } from "react-router";

type ButtonProps = {
  path: string,
  text: string,
  styles: string
}

export default function Button({ path, text, styles }: ButtonProps) {
  return (
    <Link to={path} className={styles}>
      {text}
    </Link>
  )
}
