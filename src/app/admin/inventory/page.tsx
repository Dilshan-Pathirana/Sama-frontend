import { Button } from "@/components/ui/button";
import { Plus, Search, MoreHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function AdminInventoryPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Inventory Management</h1>
                    <p className="text-gray-400">Track and manage your equipment assets</p>
                </div>
                <Button variant="primary" className="h-10 px-6">
                    <Plus className="h-4 w-4 mr-2" /> Add New Item
                </Button>
            </div>

            <div className="glass-card rounded-xl overflow-hidden">
                <div className="p-4 border-b border-white/10 flex items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <Input placeholder="Search inventory..." className="pl-9 h-10 bg-white/5 border-white/10 text-sm" />
                    </div>
                    <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="border-white/10 bg-transparent">Filter</Button>
                        <Button variant="outline" size="sm" className="border-white/10 bg-transparent">Export</Button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-white/5 text-gray-400 font-medium">
                            <tr>
                                <th className="px-6 py-3 pl-8">Item Name</th>
                                <th className="px-6 py-3">Category</th>
                                <th className="px-6 py-3">Serial No</th>
                                <th className="px-6 py-3">Daily Rate</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[
                                { name: "RED V-RAPTOR 8K", category: "Camera", serial: "RD-8K-001", rate: "$450", status: "Available" },
                                { name: "Sony FX6", category: "Camera", serial: "SN-FX6-224", rate: "$180", status: "Rented" },
                                { name: "Cooke S7/i 50mm", category: "Lens", serial: "CK-50-992", rate: "$150", status: "Maintenance" },
                                { name: "Aputure 600d", category: "Lighting", serial: "AP-600-112", rate: "$85", status: "Available" },
                                { name: "DJI Ronin 2", category: "Gimbal", serial: "DJ-RN2-445", rate: "$250", status: "Available" },
                            ].map((item, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4 pl-8 font-medium text-white">{item.name}</td>
                                    <td className="px-6 py-4 text-gray-400">{item.category}</td>
                                    <td className="px-6 py-4 text-gray-500 font-mono text-xs">{item.serial}</td>
                                    <td className="px-6 py-4 text-white">{item.rate}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ring-1 ring-inset
                         ${item.status === 'Available' ? 'bg-green-400/10 text-green-400 ring-green-400/20' :
                                                item.status === 'Rented' ? 'bg-blue-400/10 text-blue-400 ring-blue-400/20' :
                                                    'bg-red-400/10 text-red-400 ring-red-400/20'}`}>
                                            <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${item.status === 'Available' ? 'bg-green-400' :
                                                    item.status === 'Rented' ? 'bg-blue-400' : 'bg-red-400'
                                                }`}></span>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <Button variant="ghost" size="sm" className="h-8 w-8 text-gray-400 hover:text-white">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
