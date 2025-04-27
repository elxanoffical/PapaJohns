'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function AdminPanel() {
  const router = useRouter()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async(data) => {
    const res = await fetch('/api/products',{
      method:"POST",
      body: JSON.stringify(data)
    })
    const resData = await res.json()
    if(res.status===401){
      router.push('/signin')
      return
    }
    else if(res.status==201){
      alert('Product Added Succesfully')
      reset()
    }else{
      alert(resData.mes)
    }
    
  };

  return (
    <>
    <h1 className='text-white bg-pink-600 text-center text-8xl py-[40px]'>ADMIN PANEL</h1>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-4 space-y-4"
    >
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          {...register('title', {
            required: 'Title is required',
          })}
          className="mt-1 block w-full border border-gray-300 p-2 rounded"
        />
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="subTitle" className="block text-sm font-medium text-gray-700">
        subTitle
        </label>
        <input
          type="text"
          id="subTitle"
          {...register('subTitle', {
            required: 'subTitle is required',
          })}
          className="mt-1 block w-full border border-gray-300 p-2 rounded"
        />
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
        )}
      </div>
     

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Add Product
      </button>
    </form>
    </>
  );
}