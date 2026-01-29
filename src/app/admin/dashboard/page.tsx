import { ArrowUpRight, DollarSign, Package, Users, AlertCircle } from "lucide-react";

export default function AdminDashboardPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
                <div className="flex space-x-2">
                    <select className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary">
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>This Year</option>
                    </select>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Total Revenue", value: "$42,500", change: "+12.5%", icon: DollarSign, color: "text-green-500" },
                    { label: "Active Rentals", value: "24", change: "+4.1%", icon: Package, color: "text-blue-500" },
                    { label: "New Customers", value: "128", change: "+2.3%", icon: Users, color: "text-purple-500" },
                    { label: "Overdue Items", value: "3", change: "-1.2%", icon: AlertCircle, color: "text-red-500" },
                ].map((stat, i) => (
                    <div key={i} className="glass-card p-6 rounded-xl">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                                <stat.icon className="h-5 w-5" />
                            </div>
                            <span className={`text-xs font-medium px-2 py-1 rounded-full bg-green-500/10 text-green-400 flex items-center`}>
                                {stat.change} <ArrowUpRight className="h-3 w-3 ml-1" />
                            </span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                            <p className="text-gray-400 text-sm">{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Activity Table (Placeholder) */}
            <div className="glass-card rounded-xl overflow-hidden">
                <div className="p-6 border-b border-white/10">
                    <h3 className="font-bold text-white">Recent Rentals</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-white/5 text-gray-400 font-medium">
                            <tr>
                                <th className="px-6 py-4">Booking ID</th>
                                <th className="px-6 py-4">Customer</th>
                                <th className="px-6 py-4">Equipment</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Return Date</th>
                                <th className="px-6 py-4">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[
                                { id: "#BK-2024-001", user: "Alex Morgan", item: "RED V-RAPTOR 8K", status: "Active", date: "Oct 24, 2026", amount: "$1,200" },
                                { id: "#BK-2024-002", user: "Sarah Jones", item: "Sony FX6 Kit", status: "Pending", date: "Oct 25, 2026", amount: "$450" },
                                { id: "#BK-2024-003", user: "Mike Chen", item: "Aputure 1200d", status: "Completed", date: "Oct 20, 2026", amount: "$180" },
                                { id: "#BK-2024-004", user: "Emily Blunt", item: "Arri Alexa Mini", status: "Overdue", date: "Oct 22, 2026", amount: "$2,400" },
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 text-white font-medium">{row.id}</td>
                                    <td className="px-6 py-4 text-gray-300">{row.user}</td>
                                    <td className="px-6 py-4 text-gray-300">{row.item}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium 
                         ${row.status === 'Active' ? 'bg-blue-500/10 text-blue-400' :
                                                row.status === 'Completed' ? 'bg-green-500/10 text-green-400' :
                                                    row.status === 'Overdue' ? 'bg-red-500/10 text-red-400' :
                                                        'bg-yellow-500/10 text-yellow-400'}`}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-400">{row.date}</td>
                                    <td className="px-6 py-4 text-white font-medium">{row.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
