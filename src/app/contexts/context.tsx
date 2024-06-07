/* eslint-disable no-unused-vars */
'use client';
import { Color, GridData, Project } from '@/api/types';
import React, { createContext, useContext, useReducer } from 'react';

export enum ActionType {
  ADD_PROJECT = 'ADD_PROJECT',
  DELETE_PROJECT = 'DELETE_PROJECT',
  EDIT_PROJECT = 'EDIT_PROJECT',
  ADD_INITIAL = 'ADD_INITIAL',
  SELECT_PROJECT = 'SELECT_PROJECT',
  SELECT_COLOR = 'SELECT_COLOR',
}

export type AppState = {
  currentProject: Project | null;
  selectedColor: Color | null;
};

type Action =
  | { type: ActionType.ADD_PROJECT; payload: Project }
  | { type: ActionType.SELECT_PROJECT; payload: Project }
  | { type: ActionType.EDIT_PROJECT; payload: GridData }
  | { type: ActionType.SELECT_COLOR; payload: Color };

const initialState: AppState = {
  currentProject: null,
  selectedColor: null,
};

const reducer = (state: AppState, action: Action): AppState => {
  if (!action) return state;
  switch (action.type) {
    case ActionType.ADD_PROJECT:
    case ActionType.SELECT_PROJECT:
      return {
        ...state,
        currentProject: action.payload,
      };
    case ActionType.EDIT_PROJECT: {
      const newProject = {
        ...state.currentProject,
        gridData: action.payload,
      };
      return {
        ...state,
        currentProject: newProject as Project,
      };
    }
    case ActionType.SELECT_COLOR: {
      return {
        ...state,
        selectedColor: action.payload,
      };
    }
    default:
      return state;
  }
};

export const AppContext = createContext<any>(null);

export const ContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('useAppContext must be used within ContextProvider');
  }

  return context;
}
