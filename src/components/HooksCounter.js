import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/counter/actions";
function HooksCounter() {
    const value = useSelector((state) => state.value)
    const dispatch = useDispatch()
    const incrementHandler = (count) => {
        dispatch(increment(count))
    }
    const derementHandler = (count) => {
        dispatch(decrement(count))
    }
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{value}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => incrementHandler(5)}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => derementHandler(3)}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default HooksCounter
