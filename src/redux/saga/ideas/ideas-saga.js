import {takeLatest} from 'redux-saga/effects';
import * as TYPES from '../../actions/types';
import {endPoints} from "../../../utilities";
import Api from "../../../service/api/api";

export function* ideas() {
   yield takeLatest(TYPES.IDEAS_GET_REQUEST, request);
}

function* request(params) {
   try {
      let response = yield Api.getAxios(endPoints.getIdeas(params.page));
      if (Array.isArray(response?.data)) {
         params.cbSuccess(response);
      } else {
         params.cbFailure();
      }
   } catch (e) {
      params.cbFailure();
      console.log('Error in Loading Ideas: \n', e);
   }
}
