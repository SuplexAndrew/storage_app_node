import {Role, UserRole} from "../../models";

export const checkAdminRole = async (userId: number) => {
    const adminRole = await Role.findOne({
        where: {name: 'Администратор'},
        attributes: ['id']
    })
    return await UserRole.findOne({
        where: {userId, roleId: adminRole.id}
    })
}