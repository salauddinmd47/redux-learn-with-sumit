const counterEl = document.getElementById('count')
const incrementEl = document.getElementById('increment')
const decrementEl = document.getElementById('decrement')

const initialState = {
    value:0
}

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

const increment = (value)=>{
    return {
            type:INCREMENT,
            payload:value
        }
}
const decrement = (value)=>{
    return {
            type:DECREMENT,
            payload:value
        }
}


function counterReducrer(state = initialState, action){

    if(action.type === INCREMENT){
        return {
            ...state,
            value:state.value + action.payload
        }
    }else if (action.type === DECREMENT){
        return {
            ...state,
            value:state.value - action.payload
        }
    }else{
        return state
    }

}
const store = Redux.createStore(counterReducrer)
const render = ()=>{
    const state = store.getState();
    counterEl.innerText = state.value;
}
render()
store.subscribe(render)

incrementEl.addEventListener('click', ()=>{
    store.dispatch(increment(5))
})
decrementEl.addEventListener('click', ()=>{
    store.dispatch(decrement(3))
})