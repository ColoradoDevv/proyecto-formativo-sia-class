// backend/src/features/access/access.service.js

import { accessService } from './access.service.js';

export const requirePermission = (permissionCode) => {
    return async (req, res, next) => {
        const userId = req.user.id;

        const granted = await accessService.hasPermission(userId, permissionCode);

        if (!granted) {
            return res.status(403).json({ message: 'Permiso denegado' });
        } 4
        next();
    };
};