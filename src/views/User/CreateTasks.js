import { createTask } from "../../services/tasksServices.js"

export function CreateTask() {
    return `
  <div class="min-h-screen bg-gray-50 p-8 font-sans">
  <div class="max-w-4xl mx-auto">
    
    <nav class="flex items-center gap-2 text-gray-500 text-sm mb-2">
      <a href="#" class="hover:text-gray-700 flex items-center">
        <span class="mr-1">←</span> Back to Tasks
      </a>
      <span class="text-gray-300">/</span>
      <span class="font-medium text-gray-800">Create New</span>
    </nav>

    <h1 class="text-3xl font-bold text-slate-900 mb-8">Create New Task</h1>

    <div class="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
      <form id="form-create-task" class="space-y-6">
        
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
            <span class="text-lg">💾</span> Save Task
          </button>
        </div>

      </form>
    </div>
  </div>
</div>
    `
}

document.addEventListener('submit' ,(e) =>{
    if (e.target.id == "form-create-task") {
        const formCreateTasks = e.target
        const taskName = formCreateTasks.querySelector('#task-name')
        const taskCategory = formCreateTasks.querySelector('#task-category')
        const taskPriority = formCreateTasks.querySelector('#task-priority')
        const taskStatus = formCreateTasks.querySelector('#task-status')
        const taskDueDate = formCreateTasks.querySelector('#task-due-date')
        const taskDescription = formCreateTasks.querySelector('#task-description')
        createTask(taskName.value,taskCategory.value,taskStatus.value,taskPriority.value,taskDueDate.value,taskDescription.value)
        taskName.value = ''
        taskCategory.value = ''
        taskPriority.value = ''
        taskStatus.value = ''
        taskDueDate.value = ''
        taskDescription.value = ''
        
    }
})