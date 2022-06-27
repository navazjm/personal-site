import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Topbar } from "./components/Topbar";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { Blog } from "./pages/Blog";
import "./styles/Base.css";
import "./styles/Mobile.css";
import { NotFound } from "./pages/NotFound";

export default function App() {
    const currentUrl = window.location.href;
    let indexOfThirdForwardSlash = 0;
    let count = 0;
    for (let i = 0; i < currentUrl.length; i++) {
        if (currentUrl[i] === "/") count++;
        if (count === 3) {
            indexOfThirdForwardSlash = i;
            break;
        }
    }

    const [currentRoutePath, setCurrentRoutePath] = useState(
        currentUrl.slice(indexOfThirdForwardSlash)
    );

    return (
        <Router>
            <Topbar
                currentRoutePath={currentRoutePath}
                setCurrentRoutePath={setCurrentRoutePath}
            />
            <Switch>
                <Route exact path="/blog">
                    <Blog />
                </Route>
                <Route exact path="/">
                    <Home
                        currentRoutePath={currentRoutePath}
                        setCurrentRoutePath={setCurrentRoutePath}
                    />
                </Route>
                <Route
                    path="/blog/:id"
                    render={(props) => <Post {...props} />}
                ></Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
}
