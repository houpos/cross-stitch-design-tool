'use client';
import TopNavigation from '../components/top-navigation';
import { ContextProvider } from '../contexts/context';

export default function ProjectsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ContextProvider>
			<TopNavigation />
			{children}
		</ContextProvider>
	);
}
