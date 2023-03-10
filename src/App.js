import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Mail from "./components/Mail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmailList from "./components/EmailList";
import SendMail from "./components/SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import Login from "./components/Login";
import { auth } from "./firebase";

function App() {
    const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                // the user is logged in
                dispatch(
                    login({
                        displayName: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL,
                    })
                );
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Router>
            {!user ? (
                <Login />
            ) : (
                <div className="app">
                    <Header />

                    <div className="app__body">
                        <Sidebar />
                        <Switch>
                            <Route path="/mail">
                                <Mail />
                            </Route>
                            <Route path="/">
                                <EmailList />
                            </Route>
                        </Switch>
                    </div>

                    {sendMessageIsOpen && <SendMail />}
                </div>
            )}
        </Router>
    );
}

export default App;