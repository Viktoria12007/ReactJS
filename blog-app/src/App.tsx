import './App.css';
import CardsList from './components/CardsList/CardsList';
import * as React from "react";
import Header from "./components/Header/Header";

export default function App(): React.JSX.Element {
    return (
        <div className = 'App' >
            <Header />
            <CardsList />
        </div>
    );
}
