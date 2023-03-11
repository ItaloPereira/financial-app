import Page from "components/_ui/Page";

import ContentTable from "components/pages/data/ContentTable";

import "./Data.scss";

export default function Data() {
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

  return (
    <Page className="data">
      <div className="data__header">
        <h1 className="data__title h3">Edite seus dados financeiros:</h1>
      </div>

      <ContentTable headings={headings} />
    </Page>
  );
}
