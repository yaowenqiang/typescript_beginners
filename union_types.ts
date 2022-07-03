interface UserCreatedEvent  {
    eventType: 'USER_CREATED',
    parameters: {
        id: 'uuid-1',
        name: "user1",
        email: 'email1'
    }
}

interface UserDeletedEvent  {
    eventType: 'USER_DELETED',
    parameters: {
        id: 'uuid-1',
    }
}

interface UserEvent {
    eventType: 'USER_CREATED' | 'USER_DELETED',
    parameters: {
        id: string;
        name?: string;
        email: string;
    }
}


type BetterUserEvent = UserCreatedEvent | UserDeletedEvent



// const handleUserEvent = (event: UserEvent) => {
const handleUserEvent = (event: BetterUserEvent) => {
    if(event.eventType === 'USER_CREATED') {
        console.log(event.parameters)
        return
    }

    if(event.eventType === 'USER_DELETED') {
        console.log(event.parameters.id)
        // console.log(event.parameters.name)
        return
    }
}

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
}