import { createContext, useContext, useReducer } from 'react';
import { Project } from '../types';

export enum ActionType {
	ADD_PROJECT = 'ADD_PROJECT',
	DELETE_PROJECT = 'DELETE_PROJECT',
	EDIT_PROJECT = 'EDIT_PROJECT',
	ADD_INITIAL = 'ADD_INITIAL',
}

type AppState = {
	allProjects: Project[];
	currentProject: Project | null;
};

type Action =
	| { type: ActionType.ADD_INITIAL; payload: Project[] }
	| { type: ActionType.ADD_PROJECT; payload: Project };

const initialState: AppState = {
	allProjects: [],
	currentProject: null,
};

const reducer = (state: AppState, action: Action): AppState => {
	if (!action) return state;
	switch (action.type) {
		case ActionType.ADD_INITIAL:
			return {
				...state,
				allProjects: action.payload,
			};
		case ActionType.ADD_PROJECT:
			return {
				currentProject: action.payload,
				allProjects: [...state.allProjects, action.payload],
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
		throw new Error('useAppContext must be used withing ContextProvider');
	}

	return context;
}
