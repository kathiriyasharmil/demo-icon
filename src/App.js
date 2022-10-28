import React from "react";
import './App.css';
import Main from "./Component/Main";
import {Provider} from "react-redux"
import store from "./Redux/Store";

function App() {
    return (
        <>
            <Provider store={store}>
                <Main/>
            </Provider>
        </>
    );
}

export default App;
