import { Client, Account, ID } from 'appwrite';
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('647c88355176bac2fa49');               // Your project ID

    export const account = new Account(client)