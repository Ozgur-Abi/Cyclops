import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import { Counter } from "./components/Counter";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { UserList } from "./components/UserList";
import { OrderList } from "./components/OrderList";

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Routes>
                <Route >
                    <Route path="/Login" element={<Login />} />
                </Route>
                <Route >
                    <Route path="/Register" element={<Register />} />
                </Route>
                <Route element={<Layout/>}>
                    <Route path="/Counter" element={<Counter />} />
                </Route>
                <Route element={<Layout/>}>
                    <Route path="/home" element={<Home />} />
                </Route>
                <Route >
                    <Route path="/" element={<Login />} />
                </Route>
                <Route element={<Layout/>}>
                    <Route path="/UserList" element={<UserList />} />
                </Route>
                <Route element={<Layout/>}>
                    <Route path="/OrderList" element={<OrderList />} />
                </Route>
            </Routes>
        );
    }
}
