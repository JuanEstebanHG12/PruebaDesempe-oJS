import { render } from "../core/render.js";
import { DashboardAdmin } from "../views/Admin/index.js";
import { Login, Register } from "../views/Global/index.js"
import { DashboardUser } from "../views/User/index.js";


export function router() {

    // Obtenemos el hash actual de la URL, por defecto '#/login'
    const hash = location.hash || '#/login'
    // Extraemos la ruta del hash (parte después de '/')
    const [, route, params] = hash.split('/') || 'login'

    // Obtenemos el usuario del sessionStorage y su rol
    const user = JSON.parse(sessionStorage.getItem('user'))
    const role = user?.role || null



    //Si no está logueado y la ruta no es login, redirecciona a login
    if (!role && route !== 'login' && route !== 'register') {
        location.hash = '#/login'
        return
    }
    //Si hay un rol logueado y está en la ruta de login, redirigue segun rol
    if (role && route === 'login') {
        location.hash = role === 'admin'
            ? '#/dashboard'
            : '#/manage-tasks'
        return
    }

    //Routes by roles
    const routes = {
        //Global routes
        'login': {
            view: Login,
            role: null //Public access
        },
        'register': {
            view: Register,
            role: null //Public access
        },
        //User routes
        'manage-tasks': {
            view: DashboardUser,
            role: "user"
        },
        //Admin Routes
        'dashboard': {
            view: DashboardAdmin,
            role: "admin"
        }

    }

    const routerConfig = routes[route]

    //Si la ruta no existe, redirigir a la ruta por defecto según rol
    if (!routerConfig) {
        location.hash = role === 'admin'
            ? '#/dashboard'
            : '#/manage-tasks'
        return
    }

    //Si un usuario normal intenta acceder a una ruta de admin, redirigir a dashboard
    if (role === 'user' && routerConfig.role === 'admin') {
        location.hash = '#/manage-tasks'
        return
    }
    //Si un admin intenta acceder a una ruta de usuario, redirigir a manage-orders
    if (role === 'admin' && routerConfig.role === 'user') {
        location.hash = '#/dashboard'
        return
    }

  // Renderizamos la vista correspondiente
    render(routerConfig.view())
}

