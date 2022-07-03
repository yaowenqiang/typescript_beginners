interface Serializable {
    serialize(x:unknown): string
}

interface identifiable {
    uuid: string
}

const something: Serializable & identifiable = {
    uuid: 'uuid-1',
    serialize(x: unknown) : string {
        return JSON.stringify(x)
    },
}

type Dictionary = {
    [key: string] : string
}

const dict : Dictionary = {
    foo: 'bar',
    bar: 'bar'
}


type OtherDictionary = Record<string, string>
type UnknownRecord = Record<PropertyKey, unknown>

interface Foo {
    ttl: number;
    name: string;
}


type Nope = Foo & Record<string, string>
const nope: Nope = {
    ttl: 100,
    name: 'yes'
}