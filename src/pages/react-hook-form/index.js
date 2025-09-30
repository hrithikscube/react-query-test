import React from 'react'
import { useForm } from 'react-hook-form'

const ReactHookForm = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data, 'data')
    }

    console.log(errors, 'errors')

    return (
        <div className='flex flex-col lg:p-10 p-4 w-full min-h-screen bg-[#f2f2f2]'>

            <form onSubmit={handleSubmit(onSubmit)} className='grid lg:grid-cols-5 lg:gap-5 gap-4 bg-white w-full lg:p-6 p-4'>

                <div className='flex flex-col gap-2'>
                    <input
                        {...register("firstName", { required: true, maxLength: 10 })}
                        aria-invalid={errors.firstName ? "true" : "false"}
                        className='text-input'
                        placeholder='First Name'
                    />
                </div>

                <button type="submit" className='primary-button'>
                    Submit
                </button>

            </form>

        </div>
    )
}

export default ReactHookForm