
import './App.css';
import * as React from "react"
// @ts-ignore
import Quiz from './components/Quiz.tsx';
// @ts-ignore
import { questions } from './constants/questions.ts';
function App() {
    return (
        <div className="App">
                <Quiz questions={questions}></Quiz>
        </div>
    );
}

export default App;