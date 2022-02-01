import React, { Children } from 'react'

export default function Button({ children, className, ...props }) {
    return (
        <button {...props} className={`${className ? className : "bg-blue-600 focus:ring-blue-200 hover:bg-blue-700"}border border-transparent px-6 py-2.5 text-sm font-medium transition duration-300 focus:ring rounded text-center text-white`} >
            {children}
        </button >
    )
}
