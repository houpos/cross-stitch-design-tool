'use client';
import { useAppContext } from '@/app/contexts/context';
import { Project } from '@/app/types';
import { useEffect, useState } from 'react';

export default function CurrentProject() {
	const { state, dispatch } = useAppContext();
	const [currentProject, setCurrentProject] = useState<Project | null>(null);

	useEffect(() => {
		if (state?.currentProject) {
			setCurrentProject(state.currentProject);
		}
	}, [state?.currentProject]);

	if (!currentProject) return null;
	return (
		<>
			<h1>{currentProject.title}</h1>
			<div>
				Dimensions: {currentProject.height} x {currentProject.width}
			</div>
		</>
	);
}
