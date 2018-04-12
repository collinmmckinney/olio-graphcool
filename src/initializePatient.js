export default async event => {
    // you can use ES7 with async/await and even TypeScript in your functions :)

    await new Promise(r => setTimeout(r, 50))

    return {
        data: {
            message: `Hello ${event.data.username || 'World'}`
        }
    }
}

async function createPatient(api: GraphQLClient): Promise<string> {
    const mutation = `
    mutation createPatient {
        id
    }
    `

    const variables = {
        email,
        username,
        password
    }

    return api.request<{ createUser: User }>(mutation, variables)
    .then(r => r.createUser.id)
}
