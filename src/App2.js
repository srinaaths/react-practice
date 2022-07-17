import React, { useEffect , useState, useMemo} from 'react'
import Axios from 'axios';
import Movie from './Movie'
import Home from './Home'

function App2() {
    const [number, setNumber] = useState(0);
    const [inputText, setInputText] = useState(0);
    const renderInputText = (event) => {
        setInputText(event.target.value)
    }
    const mulByTwo = (num) => {
        for(let i = 0; i < 1000000000; ++i) {}
        setInputText(num * 2);
        return inputText
    }
    const mulByThree = (num) => {
        setInputText(num * 3);
        return inputText
    }
    const doubleFunction = () => {
        mulByTwo(inputText)
    }
    return (
        <div>
            <input type="number" onChange={(e) => renderInputText(e)}/>
            <button onClick={doubleFunction}>Two multiply</button>
            <button onClick={() => mulByThree(inputText)}>Three multiply</button>
            <div>{inputText}</div>
        </div>
    )
}

export default App2