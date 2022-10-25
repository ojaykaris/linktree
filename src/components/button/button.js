import "./button.css";

export function Button(props) {
  const { link, text, id } = props;

  return (
    <a href={link} id={id} className="button">
      {text}
    </a>
  );
}
