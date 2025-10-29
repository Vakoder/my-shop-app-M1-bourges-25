import { useReducer} from 'react'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { counterReducer } from './CounterReducer'
import { useCounter } from './counter'

function App() {

  const [count2, dispatch] = useReducer(counterReducer, 0)
  const { count, increment, decrement, reset } = useCounter();


  return (
    <div className='container'>
      <div className="row">
        <span>Nb of clicks (version useState): {count}</span>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div className="row">
        <span>Nb of clicks (versions useReducer): {count2}</span>
        <button onClick={()=> dispatch({type: 'INCREMENT'})}>+1</button>
        <button onClick={()=> dispatch({type: 'DECREMENT'})}>-1</button>
        <button onClick={()=> dispatch({type: 'RESET'})}>Reset</button>
      </div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
