import React, { useEffect } from 'react';
import { useCounterStore } from '@/store/store';

const logCount = () => {
    const count = useCounterStore.getState().count
    console.log('count value is ', count)
}

const setCountTo100 = () => {
    useCounterStore.setState({ count: 100 })
}

const Test = () => {

    const count = useCounterStore(state => state.count)
    const increment = useCounterStore(state => state.increment)
    const decrement = useCounterStore(state => state.decrement)

    useEffect(() => {
        logCount()
    }, [count])


    return (
        <div className='flex flex-col items-center justify-center w-full h-screen'>


            <div className='w-72 mx-auto flex flex-col lg:gap-5 gap-4 items-center'>
                <p className=''>{count}</p>

                <button onClick={increment} className='primary-button'>
                    Increment
                </button>

                <button onClick={decrement} className='primary-button'>
                    Decrement
                </button>

                <button onClick={setCountTo100} className='primary-button'>
                    Set To Hundred
                </button>

            </div>

        </div>
    )
}

export default Test