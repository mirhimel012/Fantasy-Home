
const OfficeCard = ({branch}) => {
    const{name, address, phone} = branch;
    return (
        <div>
            <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-600 mb-2">{address}</p>
            <p className="text-gray-600 mb-2">Phone: {phone}</p>
            <div className="flex justify-between items-center mt-4"></div>
          </div>
        </div>
    );
};

export default OfficeCard;