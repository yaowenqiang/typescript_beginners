// const logger = (something: unknown) : void => console.log(something)
// logger('somethig unknown')
// logger(123)
// logger({})
const logger = (something: any) : void => console.log(something)
logger('somethig unknown')
logger(123)
logger({})

// always use unknown, not any datatype

// const loggerUppercase = (something: any) : void => {
const loggerUppercase = (something: unknown) : void => {
    // console.log(something.toUpperCase())
    if(typeof something === 'string') {
        console.log(something.toUpperCase())
    } else {
        console.log(something)
    }
}
logger('somethig unknown')
logger(123)
logger({})

loggerUppercase('somethig unknown')
loggerUppercase(123)
loggerUppercase({})



type anyType = {prop1: any;prop2:any}

const anyFoo: anyType = {
    prop1: 'hello',
    prop2: {foo: 'bar'}
}

// console.log(anyFoo.prop2.whateverIwantBecauseWeHaveTurnedOfTS.sossos)



type unknownType = {prop1: unknown;prop2:unknown}

const unknownFoo: unknownType = {
    prop1: 'hello',
    prop2: {foo: 'bar'}
}

// console.log(unknownFoo.prop2.foo)

if(
    unknownFoo.prop2  // check if not undefined
    && typeof unknownFoo.prop2 === 'object'
    // && unknownFoo.prop2.hasProperty('foo')
    && Object.hasOwnProperty.call(unknownFoo.prop2, 'foo')
) {
    // console.log(unknownFoo.prop2.foo)
    console.log((unknownFoo.prop2 as {foo: unknown}).foo)
}


// type casting


const canvas = document.getElementById('my_canvas') as HTMLCanvasElement

