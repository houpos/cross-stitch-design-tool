"use client";
import { Color } from "@/api/types";
import styles from "./color-selector.module.scss";
import { ActionType, useAppContext } from "../contexts/context";

export default function ColorSelector({ colors }: { colors: Color[] }) {
  const { state, dispatch } = useAppContext();

  if (!state) return null;

  return (
    <div
      className={styles.colorContainer}
      role="radiogroup"
      aria-labelledby="color-selector"
    >
      <div className="visually-hidden" id="color-selector">
        Color Selector
      </div>
      {colors.map((color) => (
        <button
          className={styles.color}
          id={color.id}
          data-cy="color"
          key={color.id}
          aria-label={color.name}
          role="radio"
          aria-checked={color.hex === state?.selectedColor?.hex}
          style={{
            background: color.hex,
          }}
          onClick={() =>
            dispatch({ type: ActionType.SELECT_COLOR, payload: color })
          }
        />
      ))}
    </div>
  );
}
