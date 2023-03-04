import classNames from "classnames";

import "./Page.scss";

export default function Page(props) {
  const { children, className } = props;
  return (
    <div className={classNames(["page", className])}>
      <div className="page__wrapper">{children}</div>
    </div>
  );
}
