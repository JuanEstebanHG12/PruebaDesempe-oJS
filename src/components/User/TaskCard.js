import { render } from "../../core/render.js";
import { deleteTask } from "../../services/tasksServices.js";
import { capitalizeCase, states } from "../../utils/utils.js";
import { DashboardUser } from "../../views/User/DashboardUser.js";
import { loadEditForm } from "./UpdateTask.js";


const priority = {
    'high' : 'red',
    'medium' : 'orange',
    'low' : 'green'
}
export function TaskCard(task) {
    return `
     <tr class="hover:bg-gray-50">
                                <td class="px-6 py-4 font-medium">${task.name}</td>
                                <td class="px-6 py-4 flex items-center gap-2">
                                    <div class="w-6 h-6 rounded-full bg-gray-200"></div> <span>${JSON.parse(sessionStorage.getItem('user')).name}</span>
                                </td>
                                <td class="px-6 py-4"><span
                                        class="px-3 py-1 ${task.status} text-blue-600 rounded-full text-xs">${states[task.status]}</span></td>
                                <td class="px-6 py-4"><span class="text-${priority[task.priority]}-400">●</span> ${capitalizeCase(task.priority)}</td>
                                <td class="px-6 py-4 text-gray-500">${task.dueDate}</td>
                                <td class="px-6 py-4 text-right space-x-2">
                                    <button id="edit-task" data-id="${task.id}" class="text-gray-400">✏️</button>
                                    <button id="delete-task" data-id='${task.id}' class="text-red-400">🗑️</button>
                                </td>
                            </tr>
    `
}

document.addEventListener('click',async (e) => {
    if (e.target.id === 'delete-task') {
        render(await DashboardUser())        
        deleteTask(e.target.dataset.id)
    }
    if (e.target.id === 'edit-task') {
        await loadEditForm(e.target.dataset.id)
    }
})
