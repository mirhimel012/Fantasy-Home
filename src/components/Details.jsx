import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const blog = useLoaderData();
    const { id } = useParams();
    const [details, setdetails] = useState(null);

    

    useEffect(() => {
        const foundItem = blog.find(item => item.id == id);
        setdetails(foundItem);
    }, [blog, id]);


    if (!details) {
        return <div className='text-center'><span className="loading loading-infinity loading-lg"></span></div>;
    }

    const {estate_title, price, image, description, area, status, location, facilities} = details;

    return (
        <div className="container mx-auto py-8">
            <div className="max-w-5xl mx-auto border rounded-2xl p-4 m-2 border-opacity-30 border-primary hover:border-secondary  ">

<div  className="  dark:bg-gray-50">
    <div className="">
        <img role="presentation" className="object-cover w-full rounded  dark:bg-gray-500 lg:h-fit" src={image} />
    </div>
    <div className='text-center m-4'>
        <h3 className="font-bold text-xl lg:text-3xl">{estate_title}</h3>
    </div>
    <div className='flex justify-center'>
        <div className='border border-primary rounded-2xl p-4 m-6 w-fit'>
            <h2><span className="text-lg font-bold">Price:</span> <span className="text-lg font-semibold">{price}</span></h2>
            <h2><span className="text-lg font-bold">Area:</span> <span className="text-lg font-semibold">{area}</span></h2>
            <h2><span className="text-lg font-bold">Location:</span> <span className="text-lg font-semibold">{location}</span></h2>        </div>
    </div>

    <div className="flex items-center justify-center">
        <div>
            <h2 className="text-base font-semibold lg:text-2xl">Facilities: </h2>
        </div>
        <div className="flex gap-2 text-green-500 font-bold m-2">
            <h3 className="bg-slate-200 p-2 rounded-3xl">{facilities[0]}</h3>
            <h3 className="bg-slate-200 p-2 rounded-3xl">{facilities[1]}</h3>
            <h3 className="bg-slate-200 p-2 rounded-3xl">{facilities[2]}</h3>
        </div>
    </div>
    <div className="p-6 space-y-2">
        

        <p className='text-xl m-6'>{description}</p>

        <h5 className="border-b-2 m-2 border-dashed mx-auto"></h5>

        <div className="flex justify-center text-2xl">
            <div className="flex items-center gap-2">
                <h2>For: <span className="font-semibold">{status}</span></h2>
            </div>
        </div>
    </div>
</div>
    
</div>
        </div>
    );
};

export default Details;
