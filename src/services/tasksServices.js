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

async function getTasksById(userId) {
    try {
        const response = await fetch(`http://localhost:3000/tasks?assignee=${userId}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error);
        
    }

}
async function getTasks() {
    try {
        const response = await fetch(`http://localhost:3000/tasks`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error);
        
    }

}
async function getTaskInfoById(id) {
    try {
        const response = await fetch(`http://localhost:3000/tasks/${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error);
        
    }

}

async function updateTaskService(taskId,task) {
    try {
        await fetch(`http://localhost:3000/tasks/${taskId}`,{
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
    } catch (error) {
        
    }
}

async function deleteTask(taskId) {
    try {
        fetch(`http://localhost:3000/tasks/${taskId}`,{
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        })
    } catch (error) {
        
    }
}

export{
    createTask,
    getTasksById,
    deleteTask,
    getTasks,
    getTaskInfoById,
    updateTaskService
}