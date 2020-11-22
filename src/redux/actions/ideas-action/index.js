import * as TYPES from "../types";

// getIdeas
export const getIdeas = (page, cbSuccess, cbFailure) => {
   return {
      type: TYPES.IDEAS_GET_REQUEST,
      page,
      cbSuccess,
      cbFailure
   };
};
