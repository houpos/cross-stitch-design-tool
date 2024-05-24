'use client';
import { Color, Project } from '@/api/types';
import { createContext, useContext, useReducer } from 'react';

export enum AppFlowActionType {
	INIT = 'INIT',
	LOG_IN = 'LOG_IN',
	GO_TO_DASHBOARD = 'GO_TO_DASHBOARD',
	VIEW_PROJECT = 'VIEW_PROJECT',
}

export enum ActionType {
	ADD_PROJECT = 'ADD_PROJECT',
	DELETE_PROJECT = 'DELETE_PROJECT',
	EDIT_PROJECT = 'EDIT_PROJECT',
	ADD_INITIAL = 'ADD_INITIAL',
	SELECT_PROJECT = 'SELECT_PROJECT',
	SELECT_COLOR = 'SELECT_COLOR',
}

type AppState = {
	allProjects: Project[];
	currentProject: Project | null;
	flowStep: AppFlowActionType;
	selectedColor: Color | null;
};

type Action =
	| { type: ActionType.ADD_INITIAL; payload: Project[] }
	| { type: ActionType.ADD_PROJECT; payload: Project }
	| { type: ActionType.SELECT_PROJECT; payload: string }
	| { type: ActionType.EDIT_PROJECT; payload: string[][] }
	| { type: ActionType.SELECT_COLOR; payload: Color };

const initialState: AppState = {
	allProjects: [],
	currentProject: null,
	flowStep: AppFlowActionType.INIT,
	selectedColor: null,
};

const reducer = (state: AppState, action: Action): AppState => {
	if (!action) return state;
	switch (action.type) {
		case ActionType.ADD_INITIAL:
			return {
				...state,
				allProjects: action.payload,
				flowStep: AppFlowActionType.GO_TO_DASHBOARD,
			};
		case ActionType.ADD_PROJECT:
			return {
				...state,
				currentProject: action.payload,
				allProjects: [...state.allProjects, action.payload],
				flowStep: AppFlowActionType.VIEW_PROJECT,
			};
		case ActionType.SELECT_PROJECT:
			const project: Project | undefined = state.allProjects.find(
				(project) => project.id === action.payload
			);

			if (project) {
				return {
					...state,
					currentProject: project,
					flowStep: AppFlowActionType.VIEW_PROJECT,
				};
			}
		case ActionType.EDIT_PROJECT:
			const newProject = {
				...state.currentProject,
				grid: action.payload,
			};

			const newAllProjects = state.allProjects.map((project) => {
				if (project.id === state.currentProject?.id) {
					return {
						...project,
						grid: action.payload,
					};
				}
				return project;
			});
			return {
				...state,
				allProjects: newAllProjects as Project[],
				currentProject: newProject as Project,
			};
		case ActionType.SELECT_COLOR:
			return {
				...state,
				selectedColor: action.payload,
			};
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
