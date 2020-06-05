import { permissionList } from './constants';

export const checkPermissionRank = (role) => {
    const defaultPermissionRank = Object.values(permissionList).indexOf(permissionList.user)

    if (Object.values(permissionList).indexOf(role) === "-1") {
        return defaultPermissionRank;
    }

    return Object.values(permissionList).indexOf(role)
}