import React, { useReducer } from 'react'

const ReducerDemo = () => {

    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return {
                    count: state.count + 1
                }

            case "decrement":
                return {
                    count: state.count - 1
                }

            case "increment1000":
                return {
                    count: state.count + 1000
                }

            default:
                return state

        }
    }

    const [state, dispatch] = useReducer(reducer, { count: 0 })

    console.log(state, 'state')

    return (
        <div className='flex flex-col bg-[#f2f2f2] lg:p-10 p-4 w-full min-h-screen'>
            <div className='flex flex-col bg-white w-full h-96 lg:p-6 p-4 lg:gap-5 gap-4'>
                <p>Hello world</p>
                <p>{state.count}</p>
                <div className='flex items-center lg:gap-5 gap-4 justify-center w-6/12'>

                    <button
                        onClick={() => {
                            dispatch({ type: 'increment' })
                        }}
                        className='primary-button'>
                        Increment
                    </button>

                    <button
                        onClick={() => {
                            dispatch({ type: 'decrement' })
                        }}
                        className='primary-button'>
                        Decrement
                    </button>

                    <button
                        onClick={() => {
                            dispatch({ type: 'increment1000' })
                        }}
                        className='primary-button'>
                        Increment 1000
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ReducerDemo