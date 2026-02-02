class User{
    constructor(email,password){
        this.email = email,
        this.password = password
        this.role = 'user'
    }
}

async function getUsers(){
    try {
        const response = await fetch('http://localhost:3000/users')
        const data = response.json()
        return data
    } catch (error) {
        console.error(error);
    }
}

async function login(email, password) {
    try {
        const users = await getUsers()
        const userFinded = users.find(user => user.email == email && user.password == password)
        if (userFinded) {
            const userCopy = {...userFinded}
            delete userCopy.password
            sessionStorage.setItem('user', JSON.stringify(userCopy))
            location.hash = "#/manage-tasks"
            return true
        }
        throw new Error('User or password are wrong')
    } catch (error) {
        console.error(error);
    }
}

async function createUsers(email, password){
    try {
        const user = new User(email, password)
       await fetch('http://localhost:3000/users',{
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.parse(user)
        })
    } catch (error) {
        console.error(error);
        
    }
}

export {
    login
}