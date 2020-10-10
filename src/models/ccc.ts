import { Effect, Reducer, Subscription } from 'umi';

export interface IndexModelState {
  name: string;
  a: any;
}

export interface IndexModelType {
  namespace: 'ccc';
  state: IndexModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<IndexModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  //   subscriptions: { setup: Subscription };
}

const IndexModel: IndexModelType = {
  namespace: 'ccc',

  state: {
    name: '11111',
    a: '22222',
  },

  effects: {
    *query({ payload }, { call, put }) {},
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
};

export default IndexModel;
