'use client'

import type { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [{ label: 'Dashboard', href: '/' }]

const Sidebar: FC = () => {
	const pathname = usePathname()

	return (
		<aside className="w-56 shrink-0 border-r border-slate-200 bg-white flex flex-col h-full">
			<nav className="flex-1 p-4 space-y-1">
				{navItems.map((item) => {
					const active = pathname === item.href
					return (
						<Link
							key={item.href}
							href={item.href}
							className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
								active
									? 'bg-slate-100 text-slate-900'
									: 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
							}`}
						>
							{item.label}
						</Link>
					)
				})}
			</nav>
		</aside>
	)
}

export default Sidebar