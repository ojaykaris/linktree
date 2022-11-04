import { Link } from "react-router-dom";
import { Util } from "../../shared/util";
import "./button.css";

export function Button(props) {
  const { component, ...buttonProps } = props;

  if (component === "a") {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a className="link-button" {...buttonProps} />;
  }

  if (component === "link") {
    return <Link className="link-button" {...buttonProps} />;
  }

  const classNames = Util.classNames("button", {
    "button--disabled": buttonProps.disabled,
  });

  return <button className={classNames} {...buttonProps} />;
}
