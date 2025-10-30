import { useReducer} from 'react'
import { Container, Typography, Button, Box } from '@mui/material'
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
    <Container maxWidth="lg">
      <Box sx={{ mb: 2 }}>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
          <Typography variant="body1">Nb of clicks (version useState): {count}</Typography>
          <Button variant="contained" onClick={increment}>+1</Button>
          <Button variant="outlined" onClick={decrement}>-1</Button>
          <Button variant="text" onClick={reset}>Reset</Button>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
          <Typography variant="body1">Nb of clicks (versions useReducer): {count2}</Typography>
          <Button variant="contained" onClick={()=> dispatch({type: 'INCREMENT'})}>+1</Button>
          <Button variant="outlined" onClick={()=> dispatch({type: 'DECREMENT'})}>-1</Button>
          <Button variant="text" onClick={()=> dispatch({type: 'RESET'})}>Reset</Button>
        </Box>
      </Box>
      <Header/>
      <Main/>
      <Footer/>
    </Container>
  )
}

export default App
