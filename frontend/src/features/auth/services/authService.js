// frontend/src/features/auth/services/authService.js
// Consumir API de login

import {API_URL} from "@/features/config";

const AUTH_API_URL = `${API_URL}/auth` 

export async function login(userData) {
    let response;
    try {
        response = await fetch(`${AUTH_API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                userEmail: userData.userEmail, 
                userPassword: userData.userPassword
            }),
        });
    } catch {
        throw new Error('No se pudo conectar con el servidor. Verifica tu conexión.');
    }

    if (!response.ok) {
        let message = 'Error al iniciar sesión';
        try {
            const errorData = await response.json();
            message = errorData.message || errorData.error || message;
        } catch {
            // respuesta sin JSON válido, se mantiene mensaje genérico
        }
        throw new Error(message);
    }

    return response.json();
}