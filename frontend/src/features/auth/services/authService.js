// frontend/src/features/auth/services/authService.js
// Consumir API de login

const API_URL = '/api/auth';

export async function login(userData) {
    const response = await fetch(`${API_URL}/login`, {
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