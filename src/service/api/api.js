import axios from 'axios';

class Api {
   static postAxios(route, formData, config) {
      return this.axiosPost(route, formData, config);
   }

   static getAxios(route, formData, config) {
      return this.axiosGet(route, formData, config);
   }

   static putAxios(route, params, config) {
      return this.axiosPut(route, params, config);
   }

   static deleteAxios(route, params, config) {
      return this.axiosDelete(route, params, config);
   }

   static postRequest = async (endpoint, formData, config) => {
      const url = `${endpoint}`;
      console.log('[URL API]', url, formData);
      return axios
         .post(url, formData)
         .then(response => {
            console.log('SUCCESS!!', response);
            return response.data;
         })
         .catch(error => {
            console.log('FAILURE!!', error);
            return error;
         });
   };

   static axiosPost = async (endpoint, formData, config) => {
      const url = `${endpoint}`;
      console.log('[URL API]', url, formData, config);
      return axios
         .post(url, formData, config)
         .then(response => {
            console.log('SUCCESS!!', response);
            return response.data;
         })
         .catch(error => {
            return error.response;
         });
   };

   static axiosGet = async (endpoint, formData, config) => {
      console.log('[get-axios-call]', endpoint, formData, config);
      let url = `${endpoint}`;
      console.log('[URL API]', url);

      if (config) {
         // with header request
         let options = {
            headers: {
               Authorization: `Bearer ${config.token}`,
            },
         };
         console.log('[get-axios-header]', options);
         let configration = Object.assign(options);
         return axios
            .get(url, formData, configration)
            .then(response => {
               console.log('SUCCESS!!', response);
               return response.data;
            })
            .catch(error => {
               console.log('FAILURE!!', error);
               return error.response;
            });
      } else {
         // without header request
         return axios
            .get(url, formData)
            .then(response => {
               console.log('SUCCESS!!', response);
               return response.data;
            })
            .catch(error => {
               console.log('FAILURE!!', error);
               return error.response;
            });
      }
   };

   static axiosDelete = async (endpoint, formData, config) => {
      console.log('[delete-axios-call]', endpoint, formData, config);
      let url = `${endpoint}`;
      console.log('[URL API]', url);

      if (config) {
         // with header request
         let options = {
            headers: {
               Authorization: `Bearer ${config.token}`,
            },
         };
         console.log('[delete-axios-header]', options);
         let configration = Object.assign(options);
         return axios
            .delete(url, formData, configration)
            .then(response => {
               console.log('SUCCESS!!', response);
               return response.data;
            })
            .catch(error => {
               console.log('FAILURE!!', error);
               return error;
            });
      } else {
         // without header request
         return axios
            .delete(url, formData)
            .then(response => {
               console.log('SUCCESS!!', response);
               return response.data;
            })
            .catch(error => {
               console.log('FAILURE!!', error);
               return error;
            });
      }
   };

   static axiosPut = async (endpoint, formData, config) => {
      return fetch(`${endpoint}`, {
         method: 'PUT',
         body: JSON.stringify(formData),
         headers: {
            'Content-Type': 'application/json',
         },
      })
         .then(response => response.json())
         .then(responseJOSN => {
            console.log('SUCCESS!!', responseJOSN);
            return responseJOSN;
         })
         .catch(error => {
            console.error('Error response:');
            console.log('FAILURE!!', error);
            console.error(error.response.data); // ***
            console.error(error.response.status); // ***
            console.error(error.response.headers); // ***
            return error;
         });
   };
}

export default Api;
