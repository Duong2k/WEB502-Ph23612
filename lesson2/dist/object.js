//Array
var arr = ["a", "b", "c"];
var arrNum = [1, 2, 3, 4];
var arr2 = [[1, 2, 3], [4, 5, 6]];
//Tuples
var tuples = ["Van Duy", "Ha Noi", 20];
//Enum
var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["USER"] = 1] = "USER";
})(ROLE || (ROLE = {}));
var role = ROLE.USER;
console.log(role);
var STATUS_CODE;
(function (STATUS_CODE) {
    STATUS_CODE[STATUS_CODE["success"] = 200] = "success";
    STATUS_CODE[STATUS_CODE["CLIENT_ERROR"] = 400] = "CLIENT_ERROR";
    STATUS_CODE[STATUS_CODE["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(STATUS_CODE || (STATUS_CODE = {}));
var code = STATUS_CODE.CLIENT_ERROR;
var LEVEL;
(function (LEVEL) {
    LEVEL[LEVEL["STAFF"] = 0] = "STAFF";
    LEVEL[LEVEL["MANAGER"] = 1] = "MANAGER";
})(LEVEL || (LEVEL = {}));
