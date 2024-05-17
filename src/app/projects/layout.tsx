'use client';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import TopNavigation from '../components/top-navigation';

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ThemeProvider theme={theme}>
			<TopNavigation />
			{children}
		</ThemeProvider>
	);
}
