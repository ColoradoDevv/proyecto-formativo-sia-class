// fronted/src/features

import {API_URL} from "@/features/config";
const GROUPS_API_URL = ` ${API_URL}/groups` 


export async function getGroups() {
    const response = await fetch (GROUPS_API_URL)

    if(!response.ok) {
        throw new Error("Error obteniendo grupos");
    }

    return response.json()
}

export async function updateGroupPermissions(groupId, permissionIds) {
    const token = sessionStorage.getItem("token");

    const response = await fetch(`${GROUPS_API_URL}/${groupId}/permissions`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            permissionIds,
        }),
    });

    if (!response.ok) {
        throw new Error("Error actualizando permisos del grupo")
    }

    return response.json()
}