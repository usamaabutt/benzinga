import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {createLogger} from "redux-logger";
import {rootSaga} from "./saga";
import rootReducer from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import {persistStore, persistReducer} from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
   key: "root",
   storage: AsyncStorage,
   whitelist: [],
   stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};
const pReducer = persistReducer(persistConfig, rootReducer);

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create a redux store with our reducer above and middleware
let store = createStore(
   pReducer,
   composeWithDevTools(applyMiddleware(sagaMiddleware, createLogger()))
);
export const persistor = persistStore(store);

// run the saga
sagaMiddleware.run(rootSaga);

export default store;
