import React from 'react'

type IProps = {
	children: React.ReactNode
}

export default function AuthLayout({children} : IProps) {
	return (
		<div className='flex items-center justify-center h-full'>
			{children}
		</div>
	)
}