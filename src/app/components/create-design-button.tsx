"use client";
import { useModalContext } from "../contexts/modal-context";

export default function CreateDesignButton() {
  const { handleModal } = useModalContext();

  return (
    <button
      className="button-with-text button"
      type="button"
      onClick={() => handleModal()}
      data-cy="create"
    >
      Create a design
    </button>
  );
}
