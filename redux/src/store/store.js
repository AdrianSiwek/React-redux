import { createStoreHook } from "react-redux";

import rootReducer from "../reducers/rootReducer";

const store = createStoreHook(rootReducer);

export default store;