// import fetch from 'node-fetch';
// import { env } from '../config';
// import log from '../log';
// import { CustomerServicesError } from './customer-service-error';
// import { CustomerBankDetailsResponse } from './types';

// export class CustomerService {
//     private readonly customerServicesUrl: string;

//     private readonly customerServicesApiKey: string;

//     constructor() {
//         this.customerServicesUrl = String(env.CustomerServicesApiUrl);
//         this.customerServicesApiKey = String(env.CustomerServicesApiKey);
//     }

//     getBankDetailsFromCustomerService = async (
//         customerId: number
//     ): Promise<CustomerBankDetailsResponse | undefined> => {
//         const headers = {
//             Authorization: this.customerServicesApiKey,
//             'Content-Type': 'application/json',
//         };
//         try {
//             const response = await fetch(`${this.customerServicesUrl}/verifications/bank/${customerId}`, {
//                 headers,
//                 method: 'GET',
//             });

//             switch (response.status) {
//                 case 200: {
//                     const result = await response.json();
//                     return result;
//                 }
//                 case 404:
//                     return undefined;
//                     default: {
//                         log.error('Unhandled error calling customer service api', {
//                             status: response.status,
//                             body: await response.json(),
//                         });
//                         throw new CustomerServicesError(
//                             `Error calling customer service api. Http response ${response.status}`
//                         );
//                     }
//                 }
//             } catch (err) {
//                 if (err.name === CustomerServicesError.name) {
//                     throw err;
//                 }
    
//                 throw new CustomerServicesError(
//                     `An unexpected error ocurred calling customer services api. Error: ${err.message}`
//                 );
//             }
//     };
// }
    