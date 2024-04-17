import { useEffect, useState } from "react";
import OfficeCard from "./OfficeCard";

const FindOffices = () => {
    const[branches, setBranches] = useState([]);

	useEffect(()=>{
        fetch('./branch.json')
        .then(res => res.json())
        .then(data => setBranches(data))
    },[])
    
    return (
        <div>
             <div className="max-w-4xl mx-auto py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Office Branches</h2>
        <p className="text-gray-600">Find our branches below:</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                branches.map(branch => <OfficeCard key={branch.id} branch={branch}></OfficeCard>)
            }
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p className="text-gray-600">For general inquiries, contact:</p>
        <p className="text-gray-600">Phone: 0123456789</p>
        <p className="text-gray-600">Email: example@gmail.com</p>
      </div>
    </div>
        </div>
    );
};

export default FindOffices;