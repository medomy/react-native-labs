import {createStore, applyMiddleware} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import Thunk from 'redux-thunk';
import Logger from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import {storeMov} from './reducers';

const middleware = applyMiddleware(Thunk, Logger);

const config = {
  key: 'root',
  storage: AsyncStorage,
};

const Reducer = persistReducer(config, storeMov);
const store = createStore(Reducer, {}, middleware);
const presistor = persistStore(store);

export {store, presistor};
