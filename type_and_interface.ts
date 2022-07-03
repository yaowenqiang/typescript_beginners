/*
    Which one should we user?
    Standard data types use Interfaces
    Use types for unions and intersections
    Key Differences:
    Interfaces are guaranteed to be 'named' in error message, whereas types aliases are not
    Interfaces cannot be used to rename primitives or literal types
    type aliases cannot participate in declaration merging but interfaces can
*/


interface IUser {
    id: string;
    name: string;
}

type OtehrUser = {
    id: string;
    name: string;
}

const user1: IUser = {
    id: '1',
    name: 'jack'
}

const user2 : OtehrUser = {
    id: '2',
    name: 'jack'
}


interface Timestamps {
    createdAt: Date,
    updatedAt: Date,
}

type PersistedUser = IUser & Timestamps

const persisted : PersistedUser = {
    id: 'uuid-1',
    name: 'jack',
    createdAt: new Date(),
    updatedAt: new Date(),
}

type customeString = string
const nice: customeString = 'very nice'

console.log(nice)

type hearts = 'HEARTS'

const hearts: hearts =  'HEARTS'
console.log(typeof hearts)

// Declaration Merging

interface MergeUser {
    id: string;
    name: string;
}

interface MergeUser {
    age: number;
}

const merged: MergeUser = {
    id: '1',
    name: 'jack',
    age: 20
}

console.log(merged)