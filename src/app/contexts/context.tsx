import { createContext, useContext, useReducer } from 'react';
import { Project } from '../types';

export enum ProjectActionType {
	ADD_PROJECT = 'ADD_PROJECT',
	DELETE_PROJECT = 'DELETE_PROJECT',
	EDIT_PROJECT = 'EDIT_PROJECT',
	ADD_INITIAL = 'ADD_INITIAL',
}

type ProjectState = {
	allProjects: Project[];
	currentProject: Project | null;
};

type Action =
	| { type: ProjectActionType.ADD_INITIAL; payload: Project[] }
	| { type: ProjectActionType.ADD_PROJECT; payload: Project };

const initialState: ProjectState = {
	allProjects: [],
	currentProject: null,
};

const reducer = (state: ProjectState, action: Action): ProjectState => {
	if (!action) return state;
	switch (action.type) {
		case ProjectActionType.ADD_INITIAL:
			return {
				...state,
				allProjects: action.payload,
			};
		case ProjectActionType.ADD_PROJECT:
			return {
				currentProject: action.payload,
				allProjects: [...state.allProjects, action.payload],
			};
		default:
			return state;
	}
};

export const ProjectContext = createContext<any>(null);

export const ProjectContextProvider = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<ProjectContext.Provider value={{ state, dispatch }}>
			{children}
		</ProjectContext.Provider>
	);
};

export function useProjectContext() {
	const context = useContext(ProjectContext);

	if (context === undefined) {
		throw new Error(
			'useProjectContext must be used withing ProjectContextProvider'
		);
	}

	return context;
}
