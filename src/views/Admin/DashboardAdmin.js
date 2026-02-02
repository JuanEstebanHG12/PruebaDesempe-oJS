import { CardManagement } from "../../components/Admin/CardManagement.js";
import { CardTaskManagement } from "../../components/Admin/CardTaskManagement.js";
import { HeaderDashboard } from "../../components/HeaderDashboard.js";
import { getTasks } from "../../services/tasksServices.js";
export async function DashboardAdmin() {
    const tasks = await getTasks()
    console.log(tasks);

    //Todas las tareas en progreso
    const inProgress = tasks.filter(task => task.status == "inProgress") || 0
    //Todas las tareas completas
    const completed = tasks.filter(task => task.status == "completed") || 0
    //Todas las tareas pendientes
    const pending = tasks.filter(task => task.status == "pending") || 0


    return `
    <div class="p-8">
        ${HeaderDashboard()}
            <div class="flex gap-2">
            ${CardManagement('Total Tasks', tasks.length, 'data_check')}
            ${CardManagement('In Progress', inProgress.length, 'progress_activity')}
            ${CardManagement('Completed', completed.length, 'check_circle')}
            ${CardManagement('Pending Review', pending.length, 'exclamation')}
            </div>
    <table class="w-full text-left text-sm">
                            <thead class="bg-blue-50 text-gray-600 uppercase text-xs font-semibold">
                            <tr>
                                    <th class="px-6 py-4"><input type="checkbox" name="" id=""></th>
                                    <th class="px-6 py-4">TASK NAME</th>
                                    <th class="px-6 py-4">CATEGORY</th>
                                    <th class="px-6 py-4">PRIORITY</th>
                                    <th class="px-6 py-4">STATUS</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                            ${tasks.map(task => CardTaskManagement(task)).join('')}
                            </tbody>
                        </table>
    </div>
    `
}