const logger = (something: string) : void => console.log(something)
const a = logger('i am void')
console.log('a = ' , a)

interface User {
    id: string;
    email: string;
    name: string|null;
    age?: number;
}

const createUser = (email: string): User => ({
    id: 'new-uuid',
    email,
    name: null,
})

const user2 :User = createUser('myemail')

// const user :User = {
//     id: 'uuid',
//     email: 'user@email'
// }
