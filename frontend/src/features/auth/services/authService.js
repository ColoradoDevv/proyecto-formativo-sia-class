// frontend/src/features/auth/services/authService.js
// Consumir API de login

import {API_URL} from "@/features/config";

const AUTH_API_URL = `${API_URL}/auth` 

export async function login(userData) {
    const response = await fetch(`${AUTH_API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            userEmail: userData.userEmail, 
            userPassword: userData.userPassword
        }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al iniciar sesión');
    }

    return response.json();
}