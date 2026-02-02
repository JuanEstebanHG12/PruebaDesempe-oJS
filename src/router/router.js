

export async function router() {
    // Obtenemos el hash actual de la URL, por defecto '#/login'
    const hash = location.hash || '#/login'
    // Extraemos la ruta del hash (parte después de '/')
    const route = hash.split('/')[1] || 'login'
    if (!role && route !== 'login') {
        location.hash = '#/login'
        return
    }
    if (role && route === 'login') {
        location.hash = role === 'admin'
            ? '#/manage-orders'
            : '#/dashboard'
        return
    }
}

