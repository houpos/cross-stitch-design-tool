"use client";
import styles from "./page.module.scss";
import useCrossStitchDetails from "@/app/hooks/use-cross-stitch-details";
import Designer from "@/app/components/designer";
import { MdPrint } from "react-icons/md";

export default function Instructions() {
  const {
    getSkeinCount,
    getStitchCount,
    allColors,
    currentProject,
    grid,
    gridColors,
  } = useCrossStitchDetails();

  if (!currentProject || !grid || !gridColors) return null;
  return (
    <div className={styles.instructionContainer}>
      <div className={styles.titleContainer}>
        <h1>{currentProject.title}</h1>
        <span className={styles.subTitle}>
          cross stitch diagram and instructions
        </span>
        <button
          className={`round-button ${styles.print} no-print`}
          role="button"
          aria-label="print cross stitch instructions"
          onClick={() => window.print()}
        >
          <MdPrint />
        </button>
        <hr className={styles.printOnly} />
      </div>
      <div className={styles.designGridContainer}>
        <Designer grid={grid}>
          {(rowIdx: number, cellIdx: number, cell: string) => (
            <span>{gridColors[cell]?.symbol || ""}</span>
          )}
        </Designer>
      </div>
      <div className={styles.designInfo}>
        <h2>Design Information</h2>
        <ul>
          <li data-cy="finalProjectDimensions">
            Dimensions (W x H): {currentProject.width}in x{" "}
            {currentProject.height}in
          </li>
          <li data-cy="finalProjectStitchCount">
            Stitch count: {getStitchCount(currentProject.gridData.colorsUsed)}
          </li>
        </ul>
      </div>
      <div className={styles.tools}>
        <h2>Tools</h2>
        <ul>
          <li>Cross stitch fabric (14 count)</li>
          <li>Cross stitch needle</li>
          <li>Scissors</li>
          <li>Embroidery hoop</li>
          <li>
            DMC embroidery floss (see <strong>Floss &amp; Colors</strong>{" "}
            section)
          </li>
        </ul>
      </div>
      <div className={styles.floss}>
        <h2>Floss &amp; Colors</h2>
        <table data-cy="flossCalculations">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Color</th>
              <th>Color name</th>
              <th>DMC color</th>
              <th># Skeins*</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(gridColors).map((hex, index) => (
              <tr key={index}>
                <td>{gridColors[hex].symbol}</td>
                <td>
                  <div
                    className={styles.box}
                    style={{ backgroundColor: hex }}
                  />
                </td>
                <td>{allColors[hex]?.name}</td>
                <td>{allColors[hex]?.id}</td>
                <td>{getSkeinCount(gridColors[hex].count)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <span>
          * Assuming 8m 6-strand embroidery floss, using 2 strands per stitch on
          14 count fabric
        </span>
      </div>
    </div>
  );
}
