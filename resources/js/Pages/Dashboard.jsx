import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard({ auth }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = () => {
        const data = {
            title, description, category
        }
        Inertia.post('/news', data)
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard News</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="p-6 bg-white border-b border-gray-200">
                        <input type="text" placeholder="judul" className="m-2 input w-full" onChange={(title) => setTitle(title.target.value)}/>
                        <input type="text" placeholder="Description" className="m-2 input w-full" onChange={(description) => setDescription(description.target.value)}/>
                        <input type="text" placeholder="Category" className="m-2 input w-full" onChange={(category) => setCategory(category.target.value)}/>
                        <button className='btn btn-primary M-2 ' onClick={() => handleSubmit()}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
