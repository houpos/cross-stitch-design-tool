'use client';
import { ThemeProvider } from 'styled-components';
import Dashboard from './components/dashboard';
import TopNavigation from './components/top-navigation';
import theme from './styles/theme';

export default function Home() {
	return (
		<ThemeProvider theme={theme}>
			<TopNavigation />
			<Dashboard />
		</ThemeProvider>
	);
}
