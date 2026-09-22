import type { FC, ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
	title: {
		default: "Management System",
		template: "%s | Management System Web",
	},
};

interface RootLayoutProps {
	readonly children: ReactNode;
}

const RootLayout: FC<Readonly<RootLayoutProps>> = ({ children }) => {
	return (
		<html
			lang="en"
			className="h-full antialiased"
			suppressContentEditableWarning
			suppressHydrationWarning
		>
			<body className="min-h-full flex flex-col">
				<ClerkProvider afterSignOutUrl="sign-in">
					{children}
				</ClerkProvider>
			</body>
		</html>
	);
};

export default RootLayout;
