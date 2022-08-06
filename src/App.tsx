import { Provider } from "react-redux";
import store from "./store";
import User from "./components/user";

export default function App() {
    return (
        <Provider store={store}>
            <User />
        </Provider>
    );
}
