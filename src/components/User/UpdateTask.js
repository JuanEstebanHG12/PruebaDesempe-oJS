import { render } from "../../core/render.js";
import { getTaskInfoById, getTasksById, updateTaskService } from "../../services/tasksServices.js"
import { DashboardUser } from "../../views/User/DashboardUser.js";

export function UpdateTask() {
    return `
    <div>
                     <form id="form-edit-task" class="space-y-6 p-5 hidden">
        
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            Task Title <span class="text-red-500">*</span>
          </label>
          <input id="task-name"
            type="text" 
            placeholder="e.g., Complete Quarter 3 Report" 
            class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
          >
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Category</label>
            <select id="task-category" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white appearance-none text-gray-500">
              <option>Select category...</option>
              <option value="react">React</option>
              <option value="js">Js</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Priority</label>
            <select id="task-priority" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white">
              <option value="medium">Medium</option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Status</label>
            <select id="task-status" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white text-gray-700">
              <option value="pending">Pending</option>
              <option value="inProgress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Due Date</label>
            <input id="task-due-date"
              type="date" 
              placeholder="mm/dd/yyyy" 
              class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-500"
            >
          </div>
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Description</label>
          <textarea  id="task-description"
            rows="5" 
            placeholder="Add details about this task..." 
            class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-gray-400"
          ></textarea>
        </div>

        <div class="pt-4 border-t border-gray-100 flex justify-end gap-4">
          <button 
            type="button" 
            class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          
          <button 
            type="submit" 
            class="px-6 py-2 bg-[#1d4ed8] text-white rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-md shadow-blue-200"
          >
            <span class="text-lg">💾</span> Edit Task
          </button>
        </div>

      </form>
                    </div>
    `
}

export async function loadEditForm(id) {
    const task = await getTaskInfoById(id)
    console.log(task.category);

    const formEditTask = document.querySelector('#form-edit-task')
    formEditTask.classList.remove('hidden')
    formEditTask.querySelector('#task-name').value = task.name
    formEditTask.querySelector('#task-category').value = task.category
    formEditTask.querySelector('#task-priority').value = task.priority
    formEditTask.querySelector('#task-status').value = task.status
    formEditTask.querySelector('#task-due-date').value = task.dueDate
    formEditTask.querySelector('#task-description').value = task.desctiption




    document.addEventListener('submit', async (e) => {
        if (e.target.id == 'form-edit-task') {
            e.preventDefault()
            const formEditTask = document.querySelector('#form-edit-task')
            formEditTask.classList.add('hidden')
            const taskName = formEditTask.querySelector('#task-name')
            const taskCategory = formEditTask.querySelector('#task-category')
            const taskPriority = formEditTask.querySelector('#task-priority')
            const taskStatus = formEditTask.querySelector('#task-status')
            const taskDueDate = formEditTask.querySelector('#task-due-date')
            const taskDescription = formEditTask.querySelector('#task-description')
            console.log('sub');
            const updatededTask = {
                name: taskName.value,
                category: taskCategory.value,
                status: taskStatus.value,
                priority: taskPriority.value,
                dueDate: taskDueDate.value,
                desctiption: taskDescription.value
            }
            await updateTaskService(id, updatededTask)
            render(await DashboardUser())
        }
    })
}
