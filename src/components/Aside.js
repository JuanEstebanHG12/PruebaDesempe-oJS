export function Aside(){
    return `
     <aside class="w-64 bg-white border-r border-gray-200 flex flex-col">
            <div class="p-6 flex items-center gap-3">
                <div class="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                    <span class="text-white font-bold">👔</span>
                </div>
                <h1 class="text-xl font-bold tracking-tight">CRUDZASO</h1>
            </div>

            <nav class="flex-1 px-4 space-y-2">
                <a href="#" class="flex items-center gap-3 p-3 bg-blue-50 text-blue-600 rounded-lg font-medium">
                    <span class="icon">📁</span> Dashboard
                </a>
                <a href="#" class="flex items-center gap-3 p-3 text-gray-500 hover:bg-gray-100 rounded-lg">
                    <span class="icon">📋</span> My Tasks
                </a>
                <a href="#" class="flex items-center gap-3 p-3 text-gray-500 hover:bg-gray-100 rounded-lg">
                    <span class="icon">👤</span> Profile
                </a>
            </nav>
        </aside>
    `
}