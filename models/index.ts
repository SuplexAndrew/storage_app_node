import {Sequelize} from "sequelize";
import {development} from "../config/config";

const sequelize = new Sequelize(development)
// sequelize.sync({alter: true})

import {OrderFactory}  from "./order";
import {OrderItemFactory}  from "./orderItem";
import {ItemFactory}  from "./item";
import {StatusFactory}  from "./status";
import {UserFactory} from "./user";
import {UserRoleFactory} from "./userRole";
import {RoleFactory} from "./role";

const User = UserFactory(sequelize)
const UserRole = UserRoleFactory(sequelize)
const Role = RoleFactory(sequelize)
const Item = ItemFactory(sequelize)
const Order = OrderFactory(sequelize)
const OrderItem = OrderItemFactory(sequelize)
const Status = StatusFactory(sequelize)

User.hasMany(UserRole, {as: 'roles'})
UserRole.belongsTo(User, {foreignKey: 'userId', targetKey: 'id'})
UserRole.belongsTo(Role, {foreignKey: 'roleId', targetKey: 'id'})
Role.hasMany(UserRole)
Item.hasMany(OrderItem, {as: 'orderItems', foreignKey: 'itemId'})
Order.belongsTo(User, {foreignKey: 'userId'})
Order.belongsTo(Status, {foreignKey: 'statusId'})
Order.hasMany(OrderItem, { as: 'items' })
OrderItem.belongsTo(Order, {foreignKey: 'orderId'})
OrderItem.belongsTo(Item, {foreignKey: 'itemId'})
Status.hasMany(Order)

export {
  User,
  UserRole,
  Role,
  Order,
  OrderItem,
  Item,
  Status
}
