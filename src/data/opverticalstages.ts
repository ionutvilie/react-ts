// import axios, { AxiosResponse } from 'axios';

// export interface OpVerticalStages {
//     customer: string;
//     vertical: string;
//     stages: [{ name: string, locations: string[] }];
// }

// export const emptyOpVerticalStages: OpVerticalStages = {
//     customer: '',
//     vertical: '',
//     stages: [{ name: '', locations: [''] }]
// };

// const fetchOpVerticalStages = (e?: string | undefined): Promise<OpVerticalStages> => {
//     if (e) {
//         let apiData = axios.get('/v1/custo/' + e)
//             .then(function (response: AxiosResponse) {
//                 if (response.data !== '') {
//                     return Promise.resolve(response.data);
//                 }
//                 return Promise.resolve(emptyOpVerticalStages);
//             })
//             .catch(function (error: {}) {
//                 // console.log(error);
//             });

//         if (apiData) {
//             return apiData;
//         }
//     }
//     return Promise.resolve(emptyOpVerticalStages);
// };

// export const verticalStageAPI = {
//     fetchOpVerticalStages,
// };