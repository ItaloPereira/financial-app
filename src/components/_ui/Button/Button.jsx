import classNames from "classnames";

import "./Button.scss";

export default function Card(props) {
  const { children, size, kind, color, icon, onClick } = props;

  return (
    <button
      className={classNames({
        button: true,
        [`button--size-${size}`]: size,
        [`button--kind-${kind}`]: kind,
        [`button--color-${color}`]: color,
        [`button--no-text`]: children === undefined,
      })}
      onClick={onClick}
    >
      {icon && <span className="button__icon">{icon}</span>}
      {children && children}
    </button>
  );
}
