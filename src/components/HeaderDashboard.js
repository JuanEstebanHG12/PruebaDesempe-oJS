export function HeaderDashboard() {
    return `
    
     <div class="flex justify-between items-start mb-8">
                    <div>
                        <h2 class="text-3xl font-bold text-gray-800">Task Manager</h2>
                        <p class="text-gray-500 mt-1 border border-yellow-400 inline-block px-1">Overview of your
                            current academic performance tasks.</p>
                    </div>
                    <a
                        href="#/create-tasks" class="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
                        <span>+</span> New Task
                    </a>
                </div>`
}