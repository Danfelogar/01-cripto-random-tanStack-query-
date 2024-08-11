import './App.css'
import { useRandom } from './hooks/useRandom'

function App() {
//https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new
  const {randomQuery} = useRandom()

  const { isFetching, data: number, error, refetch } = randomQuery

  return (
    <div>
      { isFetching ? <h1>Loading...</h1> :  <h1>Numero: { number }</h1>}

      {/* <RandomNumber/> */}

      <div>{ error && JSON.stringify(error)}</div>
      <button disabled={isFetching} onClick={ ()=>refetch() } >Refresh Token</button>
    </div>
  )
}

export default App
