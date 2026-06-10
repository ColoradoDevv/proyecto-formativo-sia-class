// backend/src/features/access/access.service.js

import { accesRepository } from './access.repository.js';

export const accessService = {
    async hasPermission(userId, permissionCode) {
        const isSuperUser = await accesRepository.isSuperUser(userId);

        if (isSuperUser) {
            return true;
        }

        const permissions = await accesRepository.getUserPermissions(userId);

        return permissions.includes(permissionCode);
    }
}