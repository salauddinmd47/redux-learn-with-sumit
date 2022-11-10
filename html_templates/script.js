const counterEl = document.getElementById('count')
const incrementEl = document.getElementById('increment')
const decrementEl = document.getElementById('decrement')

const initialState = {
    value:0
}

function counterReducrer(state = initialState, action){

    if(action.type === 'increment'){
        return {
            ...state,
            value:state.value + 1
        }
    }else if (action.type === "decrement"){
        return {
            ...state,
            value:state.value - 1
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
    store.dispatch({
        type:'increment'
    })
})
decrementEl.addEventListener('click', ()=>{
    store.dispatch({
        type:'decrement'
    })
})