import { Client, Account} from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('655ac0b1d72eee4983ef');

export const account = new Account(client);
export default client;