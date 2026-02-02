class Task{
    constructor(name,category ,status,priority,dueDate,desctiption){
        this.name = name,
        this.category = category
        this.status = status,
        this.priority = priority,
        this.dueDate = dueDate,
        this.desctiption = desctiption
        this.assignee = JSON.parse(sessionStorage.getItem('user')).id
    }
}

async function createTask(name,category ,status,priority,dueDate,desctiption) {
    const task = new Task(name,category ,status,priority,dueDate,desctiption)
    try {
        await fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
    } catch (error) {
        console.error(error);
    }
}

export{
    createTask
}