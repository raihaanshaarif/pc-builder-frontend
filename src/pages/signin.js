
import { signIn } from 'next-auth/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaGithub } from "react-icons/fa";


const SigninPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div className="container mx-auto mt-[100px]">
            <div className='flex justify-center items-center'>
                
                <div>
               
                    <form className='flex flex-col border rounded px-40 py-10' onSubmit={handleSubmit(onSubmit)}>
                    <p className='text-center text-4xl mb-10 font-bold text-blue-600'>Login</p>
                        <label className='px-2'>Email</label>
                        <input className='border-b py-2 mb-2 px-2 border-blue-600  w-60 focus:outline-blue-600' type="email" placeholder="enter your email" {...register("Email", {required: true})} />
                        <label className='px-2'>Password</label>
                        <input className='border-b py-2 mb-2 px-2 border-blue-600 w-60 focus:outline-blue-600' type="text" placeholder="enter your password" {...register("Password", {required: true, maxLength: 100})} />

                        <input className='w-full bg-blue-600 rounded text-white py-2 hover:bg-blue-400 cursor-pointer' type="submit" />

                        <p className='mt-5 text-center mb-3'>or signup using</p>

                        
                        <div className='flex justify-center'>
                        <FaGithub className='text-4xl cursor-pointer hover:text-blue-400'onClick={()=>signIn("github",{ callbackUrl: '/' })}/>
                        </div>

                       
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default SigninPage;