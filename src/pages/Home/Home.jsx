import { EditOutlined } from "@ant-design/icons";

import { formatMoney } from "helpers/money";

import Page from "components/Page";
import Card from "components/Card";
import Button from "components/Button";

import "./Home.scss";

export default function Home() {
  return (
    <Page className="home">
      <div className="home__header">
        <h1 className="home__title h3">
          Aqui está um resumo das suas finanças:
        </h1>
        <Button icon={<EditOutlined />}>Editar dados</Button>
      </div>

      <div className="home__cards">
        <Card color="success" title="Seu saldo:" content={formatMoney(1029)} />
        <Card
          color="warning"
          title="Média diária:"
          content={formatMoney(45)}
          sufix="/dia"
        />
        <Card color="danger" title="Seu saldo:" content={formatMoney(1029.0)} />
        <Card title="Seu saldo:" content={formatMoney(1029.0)} />
      </div>
    </Page>
  );
}
