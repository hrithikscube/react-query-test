import React, { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import RenderTodo from '@/components/Todos/RenderTodo';
import CreateTodo from '@/components/Todos/CreateTodo';

const RenderTodoComp = React.memo(RenderTodo)

const getAllTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  if (!response.ok) throw new Error('Something went wrong')
  return response.json()
}

const Home = () => {

  const { data } = useQuery({ queryKey: ['todos'], queryFn: getAllTodos, refetchOnWindowFocus: false })

  const handleSetActiveTitle = useCallback((title) => {
    setParams({ ...params, title: title })
  }, [])


  return (
    <div className='flex flex-col items-center justify-center w-full min-h-screen bg-[#f2f2f2] p-6 lg:gap-6 gap-4'>

      <CreateTodo />

      <div className='flex flex-col w-full mx-auto bg-white lg:p-6 p-4 lg:gap-6 gap-4 overflow-y-auto'>
        <RenderTodoComp data={data} handleSetActiveTitle={handleSetActiveTitle} />
      </div>

    </div>
  )
}

export default Home