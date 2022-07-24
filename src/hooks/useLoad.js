import {useEffect, useState} from 'react'
import axios from 'axios'

export function useLoad(params, defaultState) {
    const [response, setResponse] = useState(defaultState)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios({method: 'GET', ...params}).then(({data}) => {
            setResponse(data)
            setIsLoading(false)
        })
        // eslint-disable-next-line
    }, [params?.reloadParam])

    return [response, isLoading]
}
