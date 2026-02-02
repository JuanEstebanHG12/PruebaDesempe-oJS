import { HeaderDashboard } from "../../components/HeaderDashboard.js"
import { ListTask } from "../../components/User/ListTask.js"
import { getTasksById } from "../../services/tasksServices.js"


export async function DashboardUser() {
    // obtener todas las tareas de este id (user)
    const tasks = await getTasksById(JSON.parse(sessionStorage.getItem('user')).id) 

    //Todas las tareas completas
    const completed = tasks.filter(task => task.status == "completed") || 0 

    //Todas las tareas pendientes
    const pending = tasks.filter(task => task.status == "pending") || 0 

    //todas las tareas pendientes con status alto
    const status = pending.filter(pen  => pen.priority == "high")

    //Porcentaje do completados
    const  overallProgress = ((completed.length / tasks.length)*100)

    

    

    return `
<div class="p-8">
               ${HeaderDashboard()}

                <div class="grid grid-cols-4 gap-6 mb-8">
                    <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <div class="flex justify-between mb-4">
                            <span class="text-gray-500 font-medium">Total Tasks</span>
                            <span class="text-blue-500 bg-blue-50 p-1 rounded">📊</span>
                        </div>
                        <div class="text-3xl font-bold">${tasks.length}</div>
                        <div class="text-green-500 text-sm mt-2">↗ 12% from last week</div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <div class="flex justify-between mb-4">
                            <span class="text-gray-500 font-medium">Completed</span>
                            <span class="text-green-500 bg-green-50 p-1 rounded">✅</span>
                        </div>
                        <div class="text-3xl font-bold">${completed.length > 0 ? completed.length : 0}</div>
                        <div class="text-green-500 text-sm mt-2">✓ On track</div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <div class="flex justify-between mb-4">
                            <span class="text-gray-500 font-medium">Pending</span>
                            <span class="text-orange-500 bg-orange-50 p-1 rounded">🕒</span>
                        </div>
                        <div class="text-3xl font-bold">${pending.length > 0 ? pending.length : 0}</div>
                        <div class="text-orange-500 text-sm mt-2">⚠ ${status.length} High Priority</div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <div class="flex justify-between mb-4">
                            <span class="text-gray-500 font-medium">Overall Progress</span>
                            <span class="text-purple-500 bg-purple-50 p-1 rounded">📈</span>
                        </div>
                        <div class="text-3xl font-bold">${overallProgress.toFixed(2)}%</div>
                        <div class="text-green-500 text-sm mt-2">📊 Keep it up!</div>
                    </div>
                </div>

                ${ListTask(tasks)}
            </div>
    `
}