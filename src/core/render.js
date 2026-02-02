import { Aside } from "../components/Aside.js"
import { Navbar } from "../components/Navbar.js"

const app = document.getElementById('app')

export function render(view) {
    return app.innerHTML = `
     <div class="flex min-h-screen bg-gray-50 font-sans">
        ${JSON.parse(sessionStorage.getItem('user')) ? Aside(): ""}

        <main class="flex-1">
            ${JSON.parse(sessionStorage.getItem('user')) ? Navbar(): ""}

            ${view}
        </main>
    </div>
    `
}
/* ${JSON.parse(sessionStorage.getItem('user')) ? Navbar(): ""}
${view}
${JSON.parse(sessionStorage.getItem('user')) ? "Footer()": ""} */