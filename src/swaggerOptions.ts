export const options = {
    definition:{
        opeapi: "3.0.0",
        info:{
            title: 'Tasks API Documentation',
            version: '1.0.0',
            description: 'Tasks API Documentation',
        },
        servers:[
        {

            url: "https://localhost:4000"
        }
    ]
    },
    apis:["./src/routes/*.ts"]
}