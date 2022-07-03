interface Box<T> {
    contents: T
}

const boxOfStrings: Box<string[]> = {
    contents: ['hello', 'type script']
}

const boxOfString: Box<string> = {
    contents: 'hello'
}

const boxOfNumbers: Box<number[]> = {
    contents: [1,2,3,4]
}
const identity = <T>(x: T) : T => {
    return x
}


const randomElement = <T>(xs: T[]) : T => {
    const randomwIndex = Math.floor(Math.random() * xs.length)
    return xs[randomwIndex]
}

const aa = randomElement(['a', 'b', 'c'])
const b = randomElement([1,2,3,4])
const cc = randomElement([1,2,3,4, 'a', [1,2,3,4], {'a':'b'}])