import React, { useReducer } from 'react'

const MyReducerContext = React.createContext()

const MyReducerContextProvider = ({ children }) => {

    const myReducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return {
                    count: state.count + 1
                }
            case 'decrement':
                return {
                    count: state.count - 1
                }
            case 'increment1000':
                return {
                    count: state.count + 1000
                }

            case 'decrement1000':
                return {
                    count: state.count - 1000
                }
        }
    }

    const [state, dispatch] = useReducer(myReducer, { count: 0 })

    return (
        <MyReducerContext.Provider value={[state, dispatch]}>
            {children}
        </MyReducerContext.Provider>
    )
}

export { MyReducerContext, MyReducerContextProvider }