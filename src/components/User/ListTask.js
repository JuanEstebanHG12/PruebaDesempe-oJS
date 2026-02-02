import { TaskCard } from "./TaskCard.js";

export function ListTask(tasks) {
    return `
    
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
                        ${tasks.map(task => TaskCard(task)).join('')}
                        </tbody>
                    </table>
                </div>`
}