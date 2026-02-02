class User {
    constructor(name, email, password) {
        this.name = name
        this.email = email,
            this.password = password
        this.role = 'user'
    }
}

async function getUsers() {
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
            const userCopy = { ...userFinded }
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

async function createUsers(name, email, password) {
    try {
        if (validateUserExist(email)) throw new Error('The email is not available.')
        const user = new User(name, email, password)
        await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    } catch (error) {
        console.error(error);
    }
}

async function validateUserExist(email) {
    const users = await getUsers()
    const userExist = users.find(user => user.email == email)
    return userExist ? true : false
}



export {
    login,
    createUsers
}