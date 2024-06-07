"use client";
import { Color } from "@/api/types";
import styles from "./color-selector.module.scss";
import { ActionType, useAppContext } from "../contexts/context";

export default function ColorSelector({ colors }: { colors: Color[] }) {
  const { dispatch } = useAppContext();
  return (
    <div className={styles.colorContainer}>
      {colors.map((color) => (
        <button
          className={styles.color}
          id={color.id}
          key={color.id}
          aria-label={color.name}
          role="button"
          style={{ background: color.hex }}
          onClick={() =>
            dispatch({ type: ActionType.SELECT_COLOR, payload: color })
          }
        />
      ))}
    </div>
  );
}
