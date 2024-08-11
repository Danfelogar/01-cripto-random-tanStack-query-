import { useEffect, useState } from 'react'
import './App.css'

function AppClassic() {
//https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new

const [number, setNumber] = useState(0)
const [isLoading, setIsLoading] = useState(true)
const [refreshToken,setRefreshToken] = useState(0)

useEffect(() => {
  setIsLoading(true)
  fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
  .then(response => response.json())
  .then(data => setNumber(data))
  .catch(error => console.error('Error:', error))
  .finally(()=> setIsLoading(false))
}, [refreshToken])

  return (
    <div>
      { isLoading && <h1>Loading...</h1> }
      { !isLoading && <h1>Numero: { number }</h1> }
      <button disabled={isLoading} onClick={ ()=>setRefreshToken((e)=> e+1) } >Refresh Token</button>
    </div>
  )
}

export default AppClassic