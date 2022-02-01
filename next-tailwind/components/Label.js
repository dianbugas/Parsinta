import React from 'react';

export default function Label({ forInput, children }) {
    return (
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={forInput}>
            {children}
        </label>
    )
}
