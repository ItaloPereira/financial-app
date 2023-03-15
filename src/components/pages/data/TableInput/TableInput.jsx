import "./TableInput.scss";
import classNames from "classnames";

export default function TableInput(props) {
  const { className, onChange, kind, ...rest } = props;

  const beforeOnChange = (event) => {
    const { value } = event.target;

    if (kind === "money") {
      let newValue = value.replace(/\D/g, "");
      if (value.length > 5) newValue = newValue.replace(/(\d{1,2})$/, ",$1");
      newValue = newValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
      newValue = `R$ ${newValue}`;
      event.target.value = newValue;

      onChange(event);
      return;
    }

    onChange(event);
  };

  return (
    <input
      className={classNames("table-input", className)}
      onChange={beforeOnChange}
      {...rest}
    />
  );
}
