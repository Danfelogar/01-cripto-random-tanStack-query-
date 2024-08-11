import { useQuery } from '@tanstack/react-query'

const getCryptoNumber = async():Promise<number> => {
    // throw 'Error al obtener el numero'
    const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
    .then(response => response.json())

    return Number(res)
}

export const useRandom = () => {

    // const {
    //     // isLoading, // cambia de estado cuando no hay data
    //     isFetching, // cambia de estado cada que la data cambia o es llamada el fetch
    //     data: number,
    //     error,
    //     refetch
    //   }
    const randomQuery  = useQuery({
        queryKey: ['randomNumber'],
        queryFn: getCryptoNumber,
        // retry: 3, // numero de intentos para refrescar la data
        // retryDelay: 1000, // tiempo de espera entre intentos
        // staleTime: 1000 * 60, // 1 minuto para considerar la data como vieja y refrescar o mandar señal para que refresque
        refetchOnWindowFocus: false // no refresca la data cuando la ventana esta en foco
      })

  return {
    randomQuery 
  }
}
