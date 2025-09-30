import React, { Children, useState } from 'react'

const MyContext = React.createContext()

const MyContextProvider = ({ children }) => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    return (
        <MyContext.Provider value={[count, increment, decrement]}>
            {children}
        </MyContext.Provider>
    )
}

export { MyContext, MyContextProvider }