//Array
const arr: Array<string> = ["a", "b", "c"]

const arrNum: number[] = [1, 2, 3, 4]

const arr2: Array<Array<number>> = [[1, 2, 3], [4, 5, 6]]

//Tuples
const tuples: [string, string, number] = ["Van Duy", "Ha Noi", 20]

//Enum
enum ROLE { ADMIN, USER }

const role: ROLE = ROLE.USER
console.log(role);

enum STATUS_CODE { success = 200, CLIENT_ERROR = 400, SERVER_ERROR = 500 }
const code: STATUS_CODE = STATUS_CODE.CLIENT_ERROR

// const book: { authors: { id: number, name: string, slug: string }[], book_cover?: string, categories: { id: number, name: string, is_leaf: boolean } }


//interface
interface Book {
    authors: Author[],
    book_covers?: string,
    categories: { id: number, name: string, is_leaf: boolean },
    description: string,
    images: Image[]
}
interface Author {
    id: number,
    name: string,
    slug: string
}

//Type Aliases
type Image = {
    base_url: string,
    is_gallery: boolean,
    label: string,
    large_url: string,
    medium_url: string,
    small_url: string,
}

//Differences type Aliases / interface

interface User {
    username: string,
    password: string,
    email: string,
}
enum LEVEL { STAFF, MANAGER }

//interface Admin extends User{
//     is.Admin : boolean,
//     level: LEVEL.MANAGER | LEVEL.STAFF
// }

//Properties
interface User {
    name: string,
    password: string,
    email: string
}
//Method
interface User {
    login: () => void,
    logout: () => void
}

type Admin = User & {
    is_admin: boolean,
    level: LEVEL.MANAGER | LEVEL.STAFF
}