import { createActions, handleActions } from 'redux-actions';

export const { showAll, showComplete } = createActions('SHOW_ALL', 'SHOW_COMPLETE', {
  prefix: 'redux-study/filter',
});

// 초기값
const initialState = 'ALL';

const reducer = handleActions(
  { SHOW_ALL: (state, action) => 'ALL', SHOW_COMPLETE: () => 'COMPLETE' },
  initialState,
  { prefix: 'redux-study/filter' },
);

// 리듀서
export default reducer;
