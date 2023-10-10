import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist/es/constants';
import { authSlice } from './auth/slice';
import advertReducer from './advertSlice';

// Configure persist options for auth slice
const authPersistConfig = {
  key: 'authRoot',
  storage,
  whitelist: ['token'], // Specify which parts of the auth slice to persist
};

// Configure persist options for advert slice
const advertPersistConfig = {
  key: 'advertRoot',
  storage,
  whitelist: ['items'], // Specify which parts of the advert slice to persist
};

// Create persisted reducers
const persistedAuthReducer = persistReducer(authPersistConfig, authSlice.reducer);
const persistedAdvertReducer = persistReducer(advertPersistConfig, advertReducer);

// Create the Redux store
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    advert: persistedAdvertReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

// Create the persistor for hydration
export const persistor = persistStore(store);
