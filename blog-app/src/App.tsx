import './App.css';
import CardsList from './components/CardsList/CardsList';
import * as React from "react";

export default function App(): React.JSX.Element {
    return (
        <div className = 'App' >
            <CardsList />
        </div>
    );
}
