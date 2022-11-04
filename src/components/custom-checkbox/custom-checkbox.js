import { useId } from "react";
import { Util } from "../../shared/util";
import "./custom-checkbox.css";

export function CustomCheckbox(props) {
  const id = useId();
  const { children, ...inputProps } = props;
  const classNames = Util.classNames("custom-checkbox", {
    "custom-checkbox--disabled": props.disabled,
  });

  return (
    <label htmlFor={id} className={classNames} tabIndex={0}>
      <input type="checkbox" id={id} {...inputProps} hidden />
      <span className="custom-checkbox__check"></span>

      <span className="custom-checkbox__text">{children}</span>
    </label>
  );
}
