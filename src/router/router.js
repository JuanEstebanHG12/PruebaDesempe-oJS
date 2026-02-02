import { render } from "../core/render.js";
import { Login } from "../views/Login.js"
import { ManageTasks } from "../views/User/ManageTasks.js";


export function router() {
    console.log("router");
    render('p')

    // Obtenemos el hash actual de la URL, por defecto '#/login'
    const hash = location.hash || '#/login'
    // Extraemos la ruta del hash (parte después de '/')
    const [,route,params] = hash.split('/') || 'login'

    // Obtenemos el usuario del sessionStorage y su rol
    const user = JSON.parse(sessionStorage.getItem('user'))
    const role = user?.role || null
    



    if (!role && route !== 'login') {
        location.hash = '#/login'
        return
    }
    if (role && route === 'login') {
        location.hash = role === 'admin'
            ? '#/manage-test'
            : '#/manage-tasks'
        return
    }

    //Routes by roles
    const routes = {
        'login': {
            view: Login,
            role: null //Public access
        },
        'manage-tasks': {
            view: ManageTasks,
            role: "user"
        },

    }

    const routerConfig = routes[route]
    console.log(routerConfig);

    render(routerConfig.view())
}

