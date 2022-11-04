import { Util } from "../../shared/util";
import "./text-input.css";

export function TextInput(props) {
  const { label, id, error, hint, className, ...inputProps } = props;
  const hasError = !!error;
  const classNames = Util.classNames("text-input", className, {
    "text-input--error": hasError,
  });

  return (
    <div className={classNames}>
      <label htmlFor={id}>{label}</label>

      <input id={id} {...inputProps} />

      {(!!hint || hasError) && <span>{hasError ? error : hint}</span>}
    </div>
  );
}
