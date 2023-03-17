//union type
function print1(a) {
    if (typeof a === "string") {
        return a.toUpperCase();
    }
    return a;
}
function optionalFunc(sinhvien) {
    if (!!sinhvien) {
        return sinhvien.name;
    }
}
optionalFunc({});
// type Admin = User & {
//     is_admin: boolean,
//     level: LEVEL.MANAGER | LEVEL.STAFF
// }
function login(user) {
    if ("is_admin" in user && user.is_admin) {
        console.log("Welcome to admin");
    }
    else {
        console.log("Welcome back");
    }
}
