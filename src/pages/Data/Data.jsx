import { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

import Page from "components/_ui/Page";

import ContentTable from "components/pages/data/ContentTable";

import Button from "components/_ui/Button";

import "./Data.scss";

export default function Data() {
  const [salaries, setSalaries] = useState([
    {
      name: "Ganho 1",
      value: 2001,
    },
    {
      name: "Ganho 2",
      value: 2002,
    },
  ]);

  const [debits, setDebits] = useState([
    {
      name: "Conta 1",
      value: 1000,
    },
  ]);

  const headings = [
    {
      name: "Vencimentos:",
      color: "success",
    },
    {
      name: "Dívidas:",
      color: "danger",
    },
  ];

  const [newItemAdded, setNewItemAdded] = useState(false);

  const newSalary = {
    name: `Vencimento ${salaries.length + 1}`,
    value: "",
  };

  const newDebit = {
    name: `Dívida ${debits.length + 1}`,
    value: "",
  };

  const handleDataChange = (event, column, rowIndex, isDeleting) => {
    let newData;

    if (column === 0) newData = [...salaries];
    if (column === 1) newData = [...debits];

    if (isDeleting) {
      newData.splice(rowIndex, 1);
    } else {
      newData[rowIndex] = {
        ...newData[rowIndex],
        [event.target.name]: event.target.value,
      };
    }

    if (column === 0) setSalaries(newData);
    if (column === 1) setDebits(newData);
  };

  const handleAddItem = (column) => {
    setNewItemAdded(true);

    if (column === 0) setSalaries([...salaries, newSalary]);
    if (column === 1) setDebits([...debits, newDebit]);
  };

  const handleLastInputFocus = (column) => {
    if (!newItemAdded) return;

    const inputs = document.querySelectorAll(
      `.content-table__input--name-${column}`
    );
    const lastInput = inputs[inputs.length - 1];

    if (lastInput) lastInput.focus();

    setNewItemAdded(false);
  };

  useEffect(() => {
    handleLastInputFocus(0);
  }, [salaries]);

  useEffect(() => {
    handleLastInputFocus(1);
  }, [debits]);

  return (
    <Page className="data">
      <div className="data__header">
        <h1 className="data__title h3">Edite seus dados financeiros:</h1>
      </div>

      <ContentTable
        headings={headings}
        firstColumnContent={salaries}
        secondColumnContent={debits}
        onDataChange={handleDataChange}
      />

      <div className="data__footer">
        <div className="data__footer__column">
          <Button
            onClick={() => handleAddItem(0)}
            size="small"
            icon={<PlusOutlined />}
          >
            Adicionar vencimento
          </Button>
        </div>
        <div className="data__footer__column">
          <Button
            onClick={() => handleAddItem(1)}
            size="small"
            icon={<PlusOutlined />}
          >
            Adicionar dívida
          </Button>
        </div>
      </div>
    </Page>
  );
}
