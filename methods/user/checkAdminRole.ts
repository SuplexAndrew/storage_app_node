import {Role, User, UserRole} from "../../models";

export const checkAdminRole = async (userId: number) => {
    return await Role.findOne({
        where: {name: 'Администратор'},
        include: [{model: UserRole, as: 'user', include: [{model: User, where: {id: userId}}]}]
    })
}