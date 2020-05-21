import { HomePage, SingIn, TodoList, NotFound, UserList } from "../views/pages";
import withPermissions from '../views/enhancers/withPermissionsRedirect';
import { permissionList } from '../utils/constants';

/*
navLink ctructure
    {
        path: "/path",
        name: "Title",
        permission: role
    }
*/

export const navLinks = [
    {
        path: "/",
        name: "Home"
    },
    {
        path: "/todolist",
        name: "Todo List",
        permission: permissionList.user
    },
    {
        path: "/userlist",
        name: "User List",
        permission: permissionList.admin
    },
    {
        path: "/asd",
        name: "404 test",
        permission: permissionList.user
    },
];

export const routes = [
    {
        path: "/login",
        component: SingIn,
        exact: true,
    },
    {
        path: "/",
        component: withPermissions(HomePage),
        exact: true,
    },
    {
        path: "/todolist",
        component: withPermissions(TodoList),
        exact: true,
    },
    {
        path: "/userlist",
        component: withPermissions(UserList, permissionList.admin),
        exact: true,
    },
    {
        component: withPermissions(NotFound)
    },
];
