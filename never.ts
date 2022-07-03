const unreachableCaseError = (e: never) : never  => {
    throw Error(e)
}

interface UserUpdatedEvent {
    eventType: 'USER_UPDATED',
    parameters: {
        id: string;
        name: string;
        email: string;
        someThingElse: string;
    }
}
interface UserDeletedEvent  {
    eventType: 'USER_DELETED',
    parameters: {
        id: 'uuid-1',
    }
}
interface UserCreatedEvent  {
    eventType: 'USER_CREATED',
    parameters: {
        id: 'uuid-1',
        name: "user1",
        email: 'email1'
    }
}

type BetterUserEvent = UserCreatedEvent | UserDeletedEvent | UserUpdatedEvent
// type BetterUserEvent = UserCreatedEvent | UserDeletedEvent

const handleBetterUserEvent = (event: BetterUserEvent) => {
    if (event.eventType === 'USER_CREATED' ) {
        console.log(event.parameters.name)
        return
    }
    if (event.eventType === 'USER_DELETED') {
        console.log(event.parameters.id)
        // console.log(event.parameters.name)
        return
    }
    if (event.eventType === 'USER_UPDATED') {
        console.log(event.parameters.id)
        return
    }
    unreachableCaseError(event)
}