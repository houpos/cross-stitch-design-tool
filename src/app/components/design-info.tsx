"use client";
import Link from "next/link";
import { useAppContext } from "../contexts/context";
import styles from "./design-info.module.scss";
import { usePathname } from "next/navigation";

export default function DesignInformation() {
  const { state } = useAppContext();
  const currentPath = usePathname();

  if (!state || !state.currentProject) return null;
  return (
    <>
      <h1>{state.currentProject.title}</h1>
      <div>
        {state.currentProject.height} x {state.currentProject.width}
      </div>
      <div
        data-cy="selectedColor"
        className={styles.currentColor}
        style={{ background: state.selectedColor?.hex || "transparent" }}
      />
      <Link
        href={`${currentPath}/instructions`}
        className="button-with-text button"
        data-cy="generateInstructions"
      >
        Instructions
      </Link>
    </>
  );
}
