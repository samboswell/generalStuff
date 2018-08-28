import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        window.devToolsExtension ? window.devToolsExtension() : undefinded
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = requre('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
