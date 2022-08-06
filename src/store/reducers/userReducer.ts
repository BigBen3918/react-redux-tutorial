import { GET_USERS, USERS_ERROR } from "../types";

interface StateObject {
    users: [];
    loading: boolean;
}

const initialState: StateObject = {
    users: [],
    loading: true,
};

export default function (state: StateObject = initialState, action: any) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        case USERS_ERROR:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
