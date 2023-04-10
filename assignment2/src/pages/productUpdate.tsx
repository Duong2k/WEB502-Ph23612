import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useParams, useNavigate } from 'react-router-dom';
import { getById, update } from '../api/product';
import { useEffect } from 'react';
import { UpdateForm, updateSchema } from '../model';

const productUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<UpdateForm>({
        resolver: yupResolver(updateSchema),
        defaultValues: async () => {
            if (id) {
                return await fetchProductById(id)
            }
        }
    })
    const onSubmit = async (data: UpdateForm) => {
        try {
            if (id) {
                const response = await update(id, data)
                console.log(response);
                navigate('/admin')
            }
        } catch (err) {
            console.log(err);

        }

    }

    const fetchProductById = async (id: string) => {
        const { data } = await getById(id)
        return data

    }

    return <section className="bg-gray-100">
        < div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8" >
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">

                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Name</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                {...register("name")}
                            />
                            <p className='text-red-600 text-[10px]'>
                                {errors.name && errors.name.message}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label>Giá</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    {...register("price")}
                                />
                                <p className='text-red-600 text-[10px]'>
                                    {errors.price && errors.price.message}
                                </p>
                            </div>

                            <div>
                                <label>Giảm giá</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    {...register("original_price")}
                                    type="number"
                                />
                                <p className='text-red-600 text-[10px]'>
                                    {errors.original_price && errors.original_price.message}
                                </p>
                            </div>
                        </div>

                        <div>
                            <label>Mô tả</label>

                            <textarea
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                {...register("description")}
                            ></textarea>
                            <p className='text-red-600 text-[10px]'>
                                {errors.description && errors.description.message}
                            </p>
                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                            >
                                Cập nhật
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    </section >

}
export default productUpdate