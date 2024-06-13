"use client";
import styles from "./create-design-form.module.scss";
import { useState } from "react";
import { ActionType, useAppContext } from "../contexts/context";
import { Project, ProjectDimension } from "@/api/types";
import { useRouter } from "next/navigation";

export default function CreateDesignForm({
  handleClose,
}: {
  handleClose: () => void;
}) {
  const availableProjectGridDimensions: ProjectDimension[] = [
    { height: 2, width: 2, display: "2 x 2" },
    { height: 4, width: 4, display: "4 x 4" },
  ];
  const { dispatch } = useAppContext();
  const router = useRouter();
  const [title, setTitle] = useState<string>("Your project title");
  const [dimensionsIndex, setDimensionsIndex] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);

  const prepareProject = () => {
    const project: Project = {
      id: "project-1",
      title,
      height: availableProjectGridDimensions[dimensionsIndex].height,
      width: availableProjectGridDimensions[dimensionsIndex].width,
      gridData: {
        grid: [],
        colorsUsed: {},
      },
    };

    dispatch({ type: ActionType.ADD_PROJECT, payload: project });
    handleClose();
    router.push(`/projects/${project.id}`);
  };

  return (
    <form method="dialog" className={styles.createDesignForm}>
      <div className={styles.row}>
        <label htmlFor="projectTitle">Title</label>
        <input
          type="text"
          id="projectTitle"
          name="projectTitle"
          data-cy="projectTitle"
          required
          minLength={1}
          maxLength={20}
          size={20}
          pattern="[a-zA-Z0-9_ ]*"
          value={title}
          onChange={(e) => {
            if (e.target?.validity) {
              setIsFormValid(e.target.validity.valid);
            }
            setTitle(e.target?.value);
          }}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="projectDimensions">Dimensions</label>
        <select
          required
          id="projectDimensions"
          name="projectDimensions"
          data-cy="projectDimensions"
          value={dimensionsIndex}
          onChange={(e) => setDimensionsIndex(parseInt(e.target?.value))}
        >
          {availableProjectGridDimensions.map((dimension, index) => (
            <option key={index} value={index}>
              {dimension.display}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className="button-with-text submit"
          data-cy="submit"
          type="submit"
          disabled={!isFormValid}
          onClick={() => prepareProject()}
        >
          Create
        </button>
        <button
          className="button-with-text cancel"
          type="reset"
          data-cy="cancel"
          onClick={() => handleClose()}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
