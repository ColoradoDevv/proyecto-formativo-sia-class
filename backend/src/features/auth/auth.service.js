// backend/src/features/auth/auth.service.js
// logica de autenticacion + JWT

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authRepository } from "./auth.repository.js";

export const authService = {
    async login({userEmail, userPassword}) {
        const user = await authRepository.findByEmail(userEmail);

        console.log("Usuario encontrado:", user); // Debug: Verificar el usuario obtenido

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

        const token = jwt.sign(
            { id: user.id, email: user.user_email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES }
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