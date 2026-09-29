// backend/src/features/auth/auth.service.js
// logica de autenticacion + JWT

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authRepository } from "./auth.repository.js";

export const authService = {
    async login({userEmail, userPassword}) {
        if (!userEmail || !userPassword) {
            throw new Error("Correo y contraseña son obligatorios");
        }

        const user = await authRepository.findByEmail(userEmail);

        if (!user) {
            throw new Error("Credenciales invalidas");
        };

        const isMatch = await bcrypt.compare(userPassword, user.password);
        if (!isMatch) {
            throw new Error("Credenciales invalidas");
        };

        if (!user.is_active) {
            throw new Error("Usuario inactivo");
        };

        if (!process.env.JWT_SECRET) {
            throw new Error("Error de configuración del servidor");
        }

        const token = jwt.sign(
            { id: user.id, email: user.user_email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES || "8h" }
        );

        return {
            token,
            user: {
                id: user.id,
                email: user.user_email,
            },
        };
    }
}