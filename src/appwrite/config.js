import { Client, Account } from "appwrite";

const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject("6554a5232c249b0c2eda")

// client.setEndpoint(process.env.TO_DO_APP_ENDPOINT).setProject(process.env.TO_DO_APP_PROJECT_ID);

export const account = new Account(client);