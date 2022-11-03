import { Link } from "react-router-dom";
import "./button.css";

export function Button(props) {
  const { link, text, id, component = "a" } = props;

  if (component === "a") {
    return (
      <a href={link} id={id} className="button">
        {text}
      </a>
    );
  }

  return (
    <Link to={link} id={id} className="button">
      {text}
    </Link>
  );
}
