import React from 'react'

const RenderTodo = ({ data, handleSetActiveTitle }) => {
    console.log('rendered')
    return (
        <ol className='flex flex-col lg:gap-6 gap-4 list-decimal pl-4'>
            {
                React.Children.toArray(
                    data?.slice(0, 10).map(({ title, id }) => (
                        (
                            <li
                                onClick={() => handleSetActiveTitle(title)}
                                key={id} className='lg:text-base text-sm text-[#121212]'>
                                {title}
                            </li>
                        )
                    ))
                )
            }
        </ol>
    )
}

export default RenderTodo