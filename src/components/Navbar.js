export function Navbar() {
    return `<header class="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
                <div class="text-gray-400 text-sm">
                    🏠 > <span class="text-gray-600">Dashboard</span>
                </div>
                <div class="flex items-center gap-4">
                    <button class="relative p-2 text-gray-400">🔔</button>
                    <div class="flex items-center gap-3 border-l pl-4">
                        <div class="text-right">
                            <p class="text-sm font-semibold">Alex Morgan</p>
                            <p class="text-xs text-gray-500">Product Designer</p>
                        </div>
                        <img src="avatar.jpg" class="w-10 h-10 rounded-full bg-gray-200" alt="Avatar">
                    </div>
                    <button id="logout" class="text-red-500 ml-2">➡️</button>
                </div>
            </header>

`
}

document.addEventListener('click',(e) =>{
    if (e.target.id === 'logout') {
        sessionStorage.clear()
        location.hash = '#/login'
        console.log('logout');
        
    }
})