import reducer from './todosSlice';
import * as todosActions from './todosSlice';
import * as todosOperations from './operations';
import * as todosSelectors from './selectors';

export {
    todosActions,
    todosOperations,
    todosSelectors
};

export default reducer;