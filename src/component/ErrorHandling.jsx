import {useRouteError} from 'react-router-dom'
const ErrorHandling = () => {
    const err = useRouteError()
    console.log(err)
    return (
        <h1>This is Error Handling</h1>
    )
}

export default ErrorHandling