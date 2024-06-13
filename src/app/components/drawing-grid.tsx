"use client";
import { useEffect } from "react";
import { ActionType, useAppContext } from "../contexts/context";
import styles from "./drawing-grid.module.scss";
import { Project } from "@/api/types";
import Designer from "./designer";

export default function DrawingGrid() {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    if (
      state?.currentProject &&
      state.currentProject.gridData?.grid.length === 0
    ) {
      let emptyGrid = [];
      const stitchesPerInch = state.currentProject.width * 10;
      for (let i = 0; i < stitchesPerInch; i++) {
        const row = new Array(stitchesPerInch).fill(null);
        emptyGrid.push(row);
      }
      dispatch({
        type: ActionType.EDIT_PROJECT,
        payload: { grid: emptyGrid, stitchCount: 0 },
      });
    }
  }, [state?.currentProject, dispatch]);

  const handleCellSelection = (rowIdx: number, cellIdx: number) => {
    const currentColor = state.selectedColor;
    const { gridData } = state.currentProject;
    if (!currentColor) return;
    const newGrid = [...gridData.grid];

    // get color and color count
    const colorsUsedDict = { ...gridData.colorsUsed };
    if (
      Object.prototype.hasOwnProperty.call(colorsUsedDict, currentColor.hex)
    ) {
      let count = colorsUsedDict[currentColor.hex];
      colorsUsedDict[currentColor.hex] = count + 1;
    } else {
      colorsUsedDict[currentColor.hex] = 1;
    }
    const oldColor = newGrid[rowIdx][cellIdx];
    if (
      oldColor &&
      Object.prototype.hasOwnProperty.call(colorsUsedDict, oldColor)
    ) {
      let oldColorCount = colorsUsedDict[oldColor];
      colorsUsedDict[oldColor] = oldColorCount - 1;
    }

    // add color to grid
    newGrid[rowIdx][cellIdx] =
      newGrid[rowIdx][cellIdx] === currentColor.hex ? null : currentColor.hex;

    dispatch({
      type: ActionType.EDIT_PROJECT,
      payload: {
        grid: newGrid,
        colorsUsed: colorsUsedDict,
      },
    });
  };

  if (!state?.currentProject || !state.currentProject?.gridData?.grid)
    return null;
  const currentProject: Project = state.currentProject;
  return (
    <div className={styles.designGridContainer}>
      <Designer
        grid={currentProject.gridData.grid}
        title={`${currentProject.title} design`}
      >
        {(rowIdx: number, cellIdx: number) => (
          <button
            data-cy="colorTheGrid"
            aria-label={`cell for row ${rowIdx}, column ${cellIdx}`}
            onClick={() => handleCellSelection(rowIdx, cellIdx)}
          />
        )}
      </Designer>
    </div>
  );
}
