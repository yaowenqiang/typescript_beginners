const addTwoNumbers = (a: number, b:number): number => a + b

const getUserById = (id: string) : {id : string, name: string} => ({
    id ,
    name: "Michal"
})

const getUserById2 = (id: string) : User => ({
    id ,
    name: "Michal",
})

const getBookById = (id: string) : Book => ({
    id ,
    name: "PHP",
})


interface User {
    id: string;
    name: string;
}


interface Book {
    id: string;
    name: string;
    releaweDate?: Date; // optional propertity
}

const user = getUserById("uuid-1")
const book = getBookById("uuid-2")


const saveUser = (user: User) => console.log('saving user', {user})
const saveBook = (book: Book) => console.log('saving book', {book})

saveUser(book)
saveBook(user)
