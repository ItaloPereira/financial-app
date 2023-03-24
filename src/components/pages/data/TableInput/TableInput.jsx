import { useEffect, useState } from "react";
import classNames from "classnames";

import "./TableInput.scss";

export default function TableInput(props) {
  const { className, onChange, kind, value, defaultValue, ...rest } = props;
  const [moneyValue, setMoneyValue] = useState(value);

  const formatNumberToMoney = (valueToFormat) => {
    let formatedValue = valueToFormat.toString().replace(/\D/g, "");
    formatedValue = formatedValue.replace(/(\d{1,2})$/, ",$1");
    formatedValue = formatedValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
    formatedValue = `R$ ${formatedValue}`;

    return formatedValue;
  };

  const formatMoneyToNumber = (valueToFormat) => {
    let formatedValue = valueToFormat.replace(/\./g, "");
    formatedValue = formatedValue.replace(/,/g, ".");
    formatedValue = +formatedValue.replace(/R\$ /g, "");
    console.log(formatedValue);
    return formatedValue;
  };

  const formatMoneyValue = () => {
    console.log("formatMoneyValue");
    setMoneyValue(formatNumberToMoney(value));
  };

  const onBeforeChange = (event) => {
    console.log("onBeforeChange");

    if (kind === "money") {
      event.target.value = formatMoneyToNumber(event.target.value);
      setMoneyValue(formatNumberToMoney(event.target.value));
    }

    onChange(event);
  };

  useEffect(() => {
    if (kind === "money") {
      formatMoneyValue();
    }
  }, []);

  return (
    <input
      className={classNames("table-input", className)}
      value={kind === "money" ? moneyValue : value}
      onChange={onBeforeChange}
      {...rest}
    />
  );
}
