import styles from "./designer.module.scss";

type DesignerProps = {
  grid: string[][];
  title?: string;
  children: any;
};

export default function Designer({ grid, title, children }: DesignerProps) {
  return (
    <table className={styles.designTable} data-cy="designTable">
      {title && <caption>{title}</caption>}
      <thead className="visually-hidden">
        <tr>
          <th>clickable cells</th>
        </tr>
      </thead>
      <tbody>
        {grid.map((row, rowIdx) => {
          return (
            <tr className={styles.row} key={rowIdx}>
              {row.map((cell, cellIdx) => {
                return (
                  <td
                    className={styles.cell}
                    style={{ background: cell }}
                    key={cellIdx}
                  >
                    {children(rowIdx, cellIdx, cell)}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
