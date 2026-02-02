const app = document.getElementById('app')

export function render(view) {
    return app.innerHTML = `
    ${JSON.parse(sessionStorage.getItem('user')) ? "Navbar()": ""}
    ${view}
    ${JSON.parse(sessionStorage.getItem('user')) ? "Footer()": ""}
    `
}