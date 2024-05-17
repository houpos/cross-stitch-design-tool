'use client';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import TopNavigation from '../components/top-navigation';
import { ProjectContextProvider } from '../contexts/project-context';

export default function ProjectsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ThemeProvider theme={theme}>
			<ProjectContextProvider>
				<TopNavigation />
				{children}
			</ProjectContextProvider>
		</ThemeProvider>
	);
}
