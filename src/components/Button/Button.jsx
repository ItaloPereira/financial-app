import classNames from "classnames";

import "./Button.scss";

export default function Card(props) {
  const { children, size, icon } = props;

  return (
    <button
      className={classNames({
        button: true,
        [`button--${size}`]: size,
      })}
    >
      {icon && <span className="button__icon">{icon}</span>}
      {children}
    </button>
  );
}
