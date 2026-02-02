const states = {
    'pending' : 'Pending',
    'inProgress' : 'In Progress',
    'completed' : 'Completed'
}

function capitalizeCase(text){
    return text.charAt(0).toUpperCase() + text.slice(1)
}
export {
    states,
    capitalizeCase    
}