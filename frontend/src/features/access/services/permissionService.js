const GROUPS_API_URL = "/api/groups"
const PERMISSIONS_API_URL = "/api/permissions"

export async function getGroupPermissions(groupId) {
    const response = await fetch(`${GROUPS_API_URL}/${groupId}/permissions`);

    if(!response.ok) {
        throw new Error("Error obteniendo permisos");
    }
    
    return response.json()
}

export async function getAllPermissions() {
    const response = await fetch(PERMISSIONS_API_URL);

    if (!response.ok) {
        throw new Error("Error obteniendo el catalogo de permisos")
    }

    return response.json()
}
