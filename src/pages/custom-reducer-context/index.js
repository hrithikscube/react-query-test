import React, { useContext } from 'react';
import { MyReducerContext } from '@/custom-reducer-context/MyReducerContext';

const CustomReducerContext = () => {

    const [state, dispatch] = useContext(MyReducerContext)

    return (
        <div className='flex flex-col w-full lg:p-10 p-4 h-screen bg-[#f2f2f2]'>

            <div className='w-full flex flex-col lg:gap-6 gap-4 bg-white h-96 lg:p-6 p-4'>

                <p>{state.count}</p>

                <div className='grid lg:grid-cols-5 lg:gap-5 gap-4'>
                    <button className='primary-button' onClick={() => dispatch({ type: 'increment' })}>
                        Increment
                    </button>

                    <button className='primary-button' onClick={() => dispatch({ type: 'decrement' })}>
                        Decrement
                    </button>

                    <button className='primary-button' onClick={() => dispatch({ type: 'increment1000' })}>
                        Incr 1000
                    </button>

                    <button className='primary-button' onClick={() => dispatch({ type: 'decrement1000' })}>
                        Decr 1000
                    </button>
                </div>

            </div>
        </div>
    )
}

export default CustomReducerContext