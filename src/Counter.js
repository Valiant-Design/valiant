import { useState } from "react";




function Counter(){
    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(counter +1)
    }

    const decrease = () => {
        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(0)
    }

    return(
        <div>
            <div className="d-flex">
                <h3> { counter } </h3>
            </div>

            <button className="btn btn-info" onClick={increase}> Increase by 1 </button>
            <button className="btn btn-dark" onClick={decrease}> Decrease by 1 </button>
            <button className="btn btn-danger" onClick={reset}> Reset to 0 </button>
        </div>
    )
}










export default Counter;