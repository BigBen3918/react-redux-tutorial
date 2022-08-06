import { GET_USERS, USERS_ERROR } from "../store/types";

export const getUsers = () => async (dispatch: any) => {
    try {
        const res: any = await window.fetch(
            `http://jsonplaceholder.typicode.com/users`,
            {
                method: "GET",
                mode: "cors",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        );
        dispatch({
            type: GET_USERS,
            payload: await res.json(),
        });
    } catch (error) {
        dispatch({
            type: USERS_ERROR,
            payload: error,
        });
    }
};
