import classNames from "classnames";

import "./Card.scss";

export default function Card(props) {
  const { color, title, content, sufix } = props;

  return (
    <div
      className={classNames({
        card: true,
        [`card--${color}`]: color,
      })}
    >
      <h4 className="card__title h4">{title}</h4>

      <div className="card__content">
        <span className="h1">{content}</span>
        {sufix && (
          <small className="card__content__sufix body-regular">{sufix}</small>
        )}
      </div>
    </div>
  );
}
