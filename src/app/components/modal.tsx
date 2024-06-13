"use client";
import { useEffect, useRef } from "react";
import styles from "./modal.module.scss";
import CreateDesignForm from "./create-design-form";
import { MdClose } from "react-icons/md";
import { useModalContext } from "../contexts/modal-context";

export default function Modal() {
  const { showModal, handleModal } = useModalContext();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!showModal) {
      dialogRef.current?.close();
    } else if (!dialogRef.current?.open && showModal) {
      dialogRef.current?.showModal();
    }
  }, [showModal]);
  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <dialog
      role="dialog"
      aria-modal="true"
      ref={dialogRef}
      className={styles.createDesignModal}
      aria-labelledby="title"
    >
      <div>
        <div className={styles.top}>
          <h1 id="title">Create a design</h1>
          <button
            className="round-button cancel"
            type="button"
            data-cy="cancel"
            aria-label="cancel and close modal"
            onClick={() => handleModal()}
          >
            <MdClose />
          </button>
        </div>
        <CreateDesignForm handleClose={handleModal} />
      </div>
    </dialog>
  );
}
