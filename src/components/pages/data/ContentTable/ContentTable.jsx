import classNames from "classnames";
import { CloseCircleOutlined } from "@ant-design/icons";

import TableInput from "components/pages/data/TableInput";
import Button from "components/_ui/Button";

import "./ContentTable.scss";

export default function ContentTable(props) {
  const {
    headings,
    firstColumnContent,
    secondColumnContent,
    onDataChange,
  } = props;

  const rowsLength =
    secondColumnContent.length > firstColumnContent.length
      ? secondColumnContent.length
      : firstColumnContent.length;

  const rowsLengthArray = Array.from({ length: rowsLength }, (_, i) => i);
  const content = [firstColumnContent, secondColumnContent];

  return (
    <table className="content-table">
      <thead className="content-table__head">
        <tr>
          {headings.map((heading) => (
            <th
              key={heading.name}
              className={classNames({
                "content-table__head__item": true,
                [`content-table__head__item--${heading.color}`]: heading.color,
              })}
            >
              {heading.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowsLengthArray.map((rowIndex) => {
          return (
            <tr key={rowIndex}>
              {content.map((data, contentIndex) => (
                <td key={contentIndex}>
                  {data[rowIndex] && (
                    <div className="content-table__row-wrap">
                      <div className="content-table__input-wrap">
                        <TableInput
                          className={`content-table__input--name-${contentIndex}`}
                          type="text"
                          placeholder="Nome:"
                          name="name"
                          value={data[rowIndex]?.name}
                          onChange={(event) => {
                            const column = contentIndex;
                            onDataChange(event, column, rowIndex);
                          }}
                        />
                        <TableInput
                          type="text"
                          kind="money"
                          placeholder="Valor:"
                          name="value"
                          maxLength="12"
                          value={data[rowIndex]?.value}
                          onChange={(event) => {
                            const column = contentIndex;
                            onDataChange(event, column, rowIndex);
                          }}
                        />
                      </div>

                      <Button
                        onClick={(event) => {
                          const column = contentIndex;
                          const isDeleting = true;
                          onDataChange(event, column, rowIndex, isDeleting);
                        }}
                        size="small"
                        color="dangerous"
                        kind="text"
                        icon={<CloseCircleOutlined />}
                      ></Button>
                    </div>
                  )}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
