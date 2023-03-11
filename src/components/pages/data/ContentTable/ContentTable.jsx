import classNames from "classnames";

import "./ContentTable.scss";

export default function Page(props) {
  const { headings } = props;

  return (
    <table className="content-table">
      <thead className="content-table__head">
        <tr>
          {headings.map((heading) => (
            <th
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
        <tr>
          <td>
            <div className="data__input-container">
              <input type="text" placeholder="Nome:" />
              <input type="number" placeholder="Valor:" />
            </div>
          </td>
          <td>
            <div className="data__input-container">
              <input type="text" placeholder="Nome:" />
              <input type="number" placeholder="Valor:" />
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div className="data__input-container">
              <input type="text" placeholder="Nome:" />
              <input type="number" placeholder="Valor:" />
            </div>
          </td>
          <td>
            <div className="data__input-container">
              <input type="text" placeholder="Nome:" />
              <input type="number" placeholder="Valor:" />
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div className="data__input-container">
              <input type="text" placeholder="Nome:" />
              <input type="number" placeholder="Valor:" />
            </div>
          </td>
          <td>
            <div className="data__input-container">
              <input type="text" placeholder="Nome:" />
              <input type="number" placeholder="Valor:" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
