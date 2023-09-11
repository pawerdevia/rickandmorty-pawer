import axios from "axios"
import { useState } from "react"


const useFetch = (url) => {
    const [infoApi, setinfoApi] = useState()
    const [hasError, sethasError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const getApi = () => {
        setIsLoading(true)
        axios.get(url)
        .then(res => {
            setinfoApi(res.data)
            sethasError(false)
        })
        .catch(err => {
            console.log(err)
            sethasError(true)
        })
        .finally(() => setIsLoading(false))
    }

    return [infoApi, getApi, hasError, isLoading]
}

export default useFetch