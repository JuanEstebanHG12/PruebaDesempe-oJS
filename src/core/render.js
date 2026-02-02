const app = document.getElementById('app')

return function render(view) {
    return `
    ${Navbar()}
    ${view}
    ${Footer()}
    `
}