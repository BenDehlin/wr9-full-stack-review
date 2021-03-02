import {useState} from 'react'

const useStyle = () => {
    const [styles, setStyles] = useState({
        moviePage: {
            backgroundColor: 'rebeccapurple',
            height: '100vh',
            width: '100vw'
        },
        movieStyle: {
            backgroundColor: 'green',
            height: 100,
            width: 100
        },
        loginPageStyle: {
            backgroundColor: 'blue'
        }
    })

    return styles
}

export default useStyle