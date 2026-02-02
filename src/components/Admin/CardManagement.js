export function CardManagement(title, amount, icon){
    return `
    <div class="h-23 w-76 bg-gray-200 rounded flex justify-around items-center">
            <div>
                <h2>${title}</h2>
                <span>${amount}</span>
            </div>
            <span class="material-symbols-outlined">
${icon}
</span>
        </div>
    `
}