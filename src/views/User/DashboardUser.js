export function DashboardUser() {
    return `
    <div class="p-8">
                <div class="flex justify-between items-start mb-8">
                    <div>
                        <h2 class="text-3xl font-bold text-gray-800">Task Manager</h2>
                        <p class="text-gray-500 mt-1 border border-yellow-400 inline-block px-1">Overview of your
                            current academic performance tasks.</p>
                    </div>
                    <button
                        class="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
                        <span>+</span> New Task
                    </button>
                </div>

                <div class="grid grid-cols-4 gap-6 mb-8">
                    <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <div class="flex justify-between mb-4">
                            <span class="text-gray-500 font-medium">Total Tasks</span>
                            <span class="text-blue-500 bg-blue-50 p-1 rounded">📊</span>
                        </div>
                        <div class="text-3xl font-bold">24</div>
                        <div class="text-green-500 text-sm mt-2">↗ 12% from last week</div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <div class="flex justify-between mb-4">
                            <span class="text-gray-500 font-medium">Completed</span>
                            <span class="text-green-500 bg-green-50 p-1 rounded">✅</span>
                        </div>
                        <div class="text-3xl font-bold">18</div>
                        <div class="text-green-500 text-sm mt-2">✓ On track</div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <div class="flex justify-between mb-4">
                            <span class="text-gray-500 font-medium">Pending</span>
                            <span class="text-orange-500 bg-orange-50 p-1 rounded">🕒</span>
                        </div>
                        <div class="text-3xl font-bold">6</div>
                        <div class="text-orange-500 text-sm mt-2">⚠ 2 High Priority</div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <div class="flex justify-between mb-4">
                            <span class="text-gray-500 font-medium">Overall Progress</span>
                            <span class="text-purple-500 bg-purple-50 p-1 rounded">📈</span>
                        </div>
                        <div class="text-3xl font-bold">75%</div>
                        <div class="text-green-500 text-sm mt-2">📊 Keep it up!</div>
                    </div>
                </div>

                <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div class="p-4 flex justify-between items-center border-b border-gray-100">
                        <div class="relative w-64">
                            <input type="text" placeholder="Search tasks..."
                                class="w-full pl-8 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none">
                            <span class="absolute left-2 top-2">🔍</span>
                        </div>
                        <div class="flex bg-gray-100 p-1 rounded-lg text-sm">
                            <button class="px-4 py-1 bg-white rounded shadow-sm font-medium">All Tasks</button>
                            <button class="px-4 py-1 text-gray-500">Pending</button>
                            <button class="px-4 py-1 text-gray-500">Completed</button>
                        </div>
                    </div>

                    <table class="w-full text-left text-sm">
                        <thead class="bg-blue-50 text-gray-600 uppercase text-xs font-semibold">
                            <tr>
                                <th class="px-6 py-4">Task Name</th>
                                <th class="px-6 py-4">Assignee</th>
                                <th class="px-6 py-4">Status</th>
                                <th class="px-6 py-4">Priority</th>
                                <th class="px-6 py-4">Due Date</th>
                                <th class="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                            <tr class="hover:bg-gray-50">
                                <td class="px-6 py-4 font-medium">Update Documentation</td>
                                <td class="px-6 py-4 flex items-center gap-2">
                                    <div class="w-6 h-6 rounded-full bg-gray-200"></div> Sarah Lin
                                </td>
                                <td class="px-6 py-4"><span
                                        class="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">In
                                        Progress</span></td>
                                <td class="px-6 py-4 text-orange-400">● Medium</td>
                                <td class="px-6 py-4 text-gray-500">Oct 24, 2023</td>
                                <td class="px-6 py-4 text-right space-x-2">
                                    <button class="text-gray-400">✏️</button>
                                    <button class="text-red-400">🗑️</button>
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="px-6 py-4 font-medium">Fix Login Authentication</td>
                                <td class="px-6 py-4 flex items-center gap-2">
                                    <div class="w-6 h-6 rounded-full bg-gray-200"></div> Raj Patel
                                </td>
                                <td class="px-6 py-4"><span
                                        class="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-xs">Pending</span>
                                </td>
                                <td class="px-6 py-4 text-red-500">● High</td>
                                <td class="px-6 py-4 text-red-500 font-medium">Oct 22, 2023</td>
                                <td class="px-6 py-4 text-right space-x-2">
                                    <button class="text-gray-400">✏️</button>
                                    <button class="text-red-400">🗑️</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    `
}