// backend /src/features/auth/auth.repository.js

import { pool } from "../../config/db.js";

export const authRepository = {
    // Método para obtener un usuario por su email
    async findByEmail(userEmail) {
        const query = `
            SELECT id, user_email, password, is_active
            FROM users
            WHERE user_email = $1
            LIMIT 1;
        `;
        const result = await pool.query(query, [userEmail]);
        return result.rows[0]; // Devuelve el usuario encontrado o undefined si no existe
    }
}