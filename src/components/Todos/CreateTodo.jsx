import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const createTodoItem = async (params) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    })
    if (!response.ok) throw new Error('Something went wrong')
    return response.json()
}

const initialParams = {
    title: '',
    body: ''
}

const CreateTodo = () => {
    const [params, setParams] = useState(initialParams)

    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationFn: createTodoItem,
        onMutate: async (newPost) => {
            queryClient.invalidateQueries(['todos'])
            const previousTodos = queryClient.getQueryData(['todos'])
            queryClient.setQueriesData(['todos'], (prev) => [
                ...prev,
                {
                    id: 'test',
                    ...newPost
                }
            ])

            return { previousTodos }
        }
    })

    const handleChange = (e) => {
        let { name, value } = e.target
        setParams({ ...params, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        mutate(params)
    }

    return (
        <form onSubmit={handleSubmit} className='grid lg:grid-cols-4 w-full mx-auto bg-white lg:p-6 p-4 lg:gap-6 gap-4 overflow-y-auto'>

            <input
                required
                name="title"
                value={params?.title}
                onChange={handleChange}
                placeholder="Title"
                className='py-2 text-sm px-4 border border-[#80808050]'
            />

            <input
                required
                name="body"
                value={params?.body}
                onChange={handleChange}
                placeholder="Body"
                className='py-2 text-sm px-4 border border-[#80808050]'
            />

            <button type="submit" className='py-2 text-sm px-4 border border-blue-600 bg-blue-600 text-white'>
                Submit
            </button>

        </form>
    )
}

export default CreateTodo