import { Util } from "../../shared/util";
import "./textarea.css";

export function TextArea(props) {
  const { label, id, hint, error, ...textareaProps } = props;
  const hasError = !!error;
  const classNames = Util.classNames("textarea", {
    "textarea--error": hasError,
  });

  return (
    <div className={classNames}>
      <label htmlFor={id}>{label}</label>

      <textarea id={id} {...textareaProps} />

      {(!!hint || hasError) && <span>{hasError ? error : hint}</span>}
    </div>
  );
}
