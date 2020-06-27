import { home} from "@/services/myProduct";
export default {
    namespace: 'myProduct',

    state: {
        homeList: {}
    },

    subscriptions: {
        setup({ dispatch, history }) {
            // eslint-disable-line
        },
    },

    effects: {
        // 首页数据
        *getHomeData({ payload: value }, { call, put, select }) {
            // eslint-disable-line
            try {
                // 非真实接口需要注释
                // const { data } = yield call(home, value);
                const tempList = yield select(
                    (state: any) => state.myProduct.homeList
                );
                const data: object = {recmd: [{name: '我们万众一心，众志成城'},{name: '战胜疫情'},{name: '伟大的民族不会被打败'}]}
                const homeList:object = { ...tempList, ...data }
                
                yield put({ type: "HOME_LIST", payload: { homeList } });
                return homeList
            } catch (error) {
                console.log(error);
            }
        }
    },

    reducers: {
        HOME_LIST(state: any, { payload: { homeList } }) {
            return { ...state, homeList };
        }
    },
};
