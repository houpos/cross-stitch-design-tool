'use client';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import TopNavigation from '../components/top-navigation';
import { ContextProvider } from '../contexts/context';

export default function ProjectsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ThemeProvider theme={theme}>
			<ContextProvider>
				<TopNavigation />
				{children}
			</ContextProvider>
		</ThemeProvider>
	);
}
