import { fromEvent, FunctionEvent } from 'graphcool-lib'
import { GraphQLClient } from 'graphql-request'

export default async event => {
    const graphcool = fromEvent(event);
    const api = graphcool.api('simple/v1');
    const { userId } = event.data
    const id = await createPatient(api, userId);
    return {
        data: {
            message: id
        }
    }
}

async function createPatient(api, userId){
    const mutation = `
    mutation updateUserAndCreatePatient($userId: ID!) {
        updateUser(
            id: $userId
            patient: { reportsIds: [] }
        ) {
            id
        }
    }
    `

    const variables = {
        userId
    }

    return api.request(mutation, variables).then(r => r.updateUser.id)
}
