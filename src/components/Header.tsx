import type { FC } from 'react'
import { UserButton } from '@clerk/nextjs'

interface HeaderProps {
	title?: string
}

const Header: FC<Readonly<HeaderProps>> = ({ title = 'Management System' }) => {
	return (
		<header className="flex justify-between items-center px-6 h-16 border-b border-slate-200 bg-white">
			<div className="flex items-center gap-2">
				<span className="text-lg font-semibold text-slate-800">{title}</span>
			</div>
			<div className="flex items-center gap-4">
				<UserButton afterSignOutUrl="/sign-in" />
			</div>
		</header>
	)
}

export default Header