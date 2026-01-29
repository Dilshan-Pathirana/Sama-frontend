import React from 'react'

interface SpecificationsTableProps {
    specs: Record<string, string>
}

export const SpecificationsTable = ({ specs }: SpecificationsTableProps) => {
    return (
        <div className="border border-slate-800 rounded-xl overflow-hidden">
            <table className="w-full text-sm text-left">
                <tbody className="divide-y divide-slate-800">
                    {Object.entries(specs).map(([key, value], index) => (
                        <tr
                            key={key}
                            className={index % 2 === 0 ? 'bg-slate-900/50' : 'bg-transparent'}
                        >
                            <td className="px-6 py-4 font-medium text-slate-400 w-1/3">
                                {key}
                            </td>
                            <td className="px-6 py-4 text-white">{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
