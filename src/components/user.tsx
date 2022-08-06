import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../action";

const Users = () => {
    const dispatch: any = useDispatch();
    const usersListData = useSelector((state: any) => state.usersList);
    const { loading, error, users } = usersListData;

    useEffect(() => {
        (async () => {
            dispatch(getUsers());
        })();
    }, [dispatch]);

    return (
        <div>
            {loading
                ? "Loading..."
                : error
                ? error.message
                : users.map((u: any, index: number) => (
                      <h3 key={index}>{u.name}</h3>
                  ))}
        </div>
    );
};

export default Users;
