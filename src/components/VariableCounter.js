import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";
import { decrement as dynamicDecremnet, increment as dynamicInecremnet } from "../redux/dynamicCounter/actions";
function VariableCounter({ count, increment, decrement }) {

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={increment}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={decrement}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        count: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // dispatch er moddhye increment/decrement call kore dile amra action pai, karon in/dec action object return kore
        increment: ownProps.dynamic ? (value) => dispatch(dynamicInecremnet(5)) : () => dispatch(increment()),
        decrement: ownProps.dynamic ? (value) => dispatch(dynamicDecremnet(2)) : () => dispatch(decrement())
    }
}
// connect fun call korle HOC return kore, HOC parameter hisabe Counter(comp) ney. connect func param hisabe mapStateToProps,mapDispatchToProps ke ney
export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter)
