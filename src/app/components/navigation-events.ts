"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ActionType, useAppContext } from "../contexts/context";
import { getAllProjects } from "../actions";
import { Project } from "@/api/types";

export function NavigationEvents() {
  const pathname = usePathname();
  const { state, dispatch } = useAppContext();
  // TODO: this needs to be cleaned up when a backend is implemented
  useEffect(() => {
    const projectId = pathname.split("/")[2];

    if (state?.allProjects?.length === 0) {
      const addAllProjects = async () => {
        const allProjects = await getAllProjects();
        dispatch({ type: ActionType.ADD_INITIAL, payload: allProjects });
      };
      addAllProjects();
    }

    if (projectId && !state?.currentProject) {
      const currentProject = state?.allProjects?.filter(
        (project: Project) => project?.id === projectId
      );
      dispatch({ type: ActionType.ADD_PROJECT, payload: currentProject[0] });
    }
  }, [pathname, state?.allProjects, state?.currentProject, dispatch]);

  return null;
}
