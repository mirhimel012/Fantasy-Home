import { Link } from "react-router-dom";
import { LuStar } from "react-icons/lu";

const Blog = ({blog}) => {
    const{id, estate_title, price, image, description, area, status, location, facilities} = blog;
    return (
        <div className="border rounded-2xl p-4 m-2 border-opacity-30 border-primary hover:border-secondary  ">

            <div  className="max-w-xl mx-auto dark:bg-gray-50">
                <div className="">
                    <img role="presentation" className="object-cover w-full rounded  dark:bg-gray-500 lg:h-80" src={image} />
                </div>
                <div className="flex items-center">
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
                    <h3 className="font-bold text-xl lg:text-3xl">{estate_title}</h3>
                    <h3 className="text-lg font-semibold">{price}</h3>
                    <h2><span className="text-lg font-bold">Area:</span> <span className="text-lg font-semibold">{area}</span></h2>
                    <h2><span className="font-bold">Location:</span>  <span>{location}</span></h2>

                    <h5 className="border-b-2 m-2 border-dashed mx-auto"></h5>

                    <div className="flex justify-between text-lg">
                        <div className="flex items-center gap-2">
                            <h2>For: <span className="font-semibold">{status}</span></h2>
                        </div>
                        <Link to={`/blog/${blog.id}`}>
                        <a className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
<span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
<span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">View Property</span>
</a>
                        </Link>
                    </div>
                </div>
            </div>
                
        </div>
    );
};

export default Blog;