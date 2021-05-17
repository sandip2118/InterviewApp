import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import AppScreen from './Navigation';
import Sugar from 'sugar';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import FilesystemStorage from 'redux-persist-filesystem-storage'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from "redux-persist/integration/react";


const persistConfig = {
  key: 'root',
  storage: FilesystemStorage,
  whitelist: [
    'appSetting',
  ]
};
const persistedReducer = persistReducer(persistConfig, reducer);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(persistedReducer);
let persistor = persistStore(store);

Sugar.extend();
class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}  >
        <PersistGate loading={null} persistor={persistor}>
          <AppScreen />
        </PersistGate>
      </Provider >
    );
  }
}

export default Index;




// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import AppScreen from './router';
// // import { updateInitialProps } from './config';
// import { Provider } from 'react-redux';
// import Sugar from 'sugar';
// import thunk from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux';
// import reducer from './reducers';
// import { handleChanges, restoreState } from './services/persistHandler';


// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const store = createStoreWithMiddleware(reducer);

// export default class Main extends Component {
//   constructor(props) {
//     super(props);
//     restoreState(store);
//     updateInitialProps(props);
//     Sugar.extend();
//     handleChanges(store);
//   }

//   render() {
//     return (
//       <Provider store={store}  >
//         <AppScreen />
//       </Provider >
//     )
//   }
// }
