import { useState, useMemo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/outline';




const BookingsUsersTable = () => {


  interface User {
    id: number;
    name: string; // This should be a string, but it is used as an image source
    email: string;
    number: string;
    phoneNumber: string;
    profilePic: string;
    status: string;
  }
    // Generate mock data
const generateMockUsers = (count: number): User[] => {

  return Array.from({ length: count }, (_, index): User => ({

    id: index + 1,
    name: `User ${index + 1}`,

    email: `user${index + 1}@example.com`,
    number: `${String(index + 1).padStart(4, '0')}`,   
    phoneNumber: `+1 (${Math.floor(Math.random() * 900 + 100)}) ${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}`,
    profilePic: `https://api.dicebear.com/8.x/avataaars/svg?seed=${index}`,
    status: Math.random() > 0.3 ? 'Approved' : 'Cancel'
  }));
};
  // Generate 10,000 mock users
const allUsers = useMemo(() => generateMockUsers(10000), [] as User[]);

  const [searchTerm, setSearchTerm] = useState('');
  const usersPerPage = 10;


  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = allUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(allUsers.length / usersPerPage);

  // Pagination handlers
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  

  // Advanced search function
  const filteredUsers = useMemo(() => {
    if (!searchTerm) return allUsers;

    const lowerSearchTerm = searchTerm.toLowerCase().trim();

    return allUsers.filter(user => 
      user.number.toLowerCase().includes(lowerSearchTerm) ||
      user.email.toLowerCase().includes(lowerSearchTerm) ||
      user.phoneNumber.toLowerCase().includes(lowerSearchTerm) ||
      user.status.toLowerCase().includes(lowerSearchTerm)
    );
  }, [allUsers, searchTerm]);


  return (
    <div className=" font-roboto container mx-auto px-[16px] py-[20px]">
     
       <div className="mb-[16px] relative">
        <div className="flex justify-center ">
          <p className='px-[6px] text-[16px] font-[400] text-[#808080]'>
            Search :
          </p>
          <input 
            type="text"
            placeholder=" "
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page on new search
            }}
            className="
              w-[50%] pl-[40px] text-[#808080] font-[400] pr-[40px] py-[8px] border border-[#808080] rounded-[8px]
              focus:outline-none focus:ring-2 focus:ring-[#6082f0]
            "
          />
          
          
          {/* Clear Search Button */}
          {searchTerm && (
            <button 
              
              className="absolute right-[12px] top-1/2 -translate-y-1/2"
            >
              <XMarkIcon className="h-[20px] w-[20px] text-[#b4b4b4] hover:text-[#585858]" />
            </button>
          )}
        </div>

        {/* Search Results Info */}
        {searchTerm && (
          <div className="mt-[8px] text-[14px] text-[#808080]">
            Found {filteredUsers.length} results for "{searchTerm}"
          </div>
        )}
      </div>
      {/* Horizontal Scrollable Table Container */}
      <div className="w-full overflow-x-auto  rounded-[14px] shadow-[1px]">
        <div>
          
        </div>
        <table className="w-full min-w-[800px] border-collapse border-spacing-0">
          {/* Table Header */}
          <thead className="bg-[#ede9e9]">
            <tr>
              <th className="p-[16px] text-left text-[12px] font-[1000] text-[#808080] uppercase tracking-wider">Sr.no</th>
              <th className="p-[16px] text-left text-[12px] font-[1000] text-[#808080] uppercase tracking-wider">Name</th>            
              <th className="p-[16px] text-left text-[12px] font-[1000] text-[#808080] uppercase tracking-wider">Email</th>
              <th className="p-[16px] text-left text-[12px] font-[1000] text-[#808080] uppercase tracking-wider">booking date</th>
              <th className="p-[16px] text-left text-[12px] font-[1000] text-[#808080] uppercase tracking-wider">booking type</th>
              <th className="p-[16px] text-left text-[12px] font-[1000] text-[#808080] uppercase tracking-wider">Status</th>
              <th className="p-[16px] text-left text-[12px] font-[1000] text-[#808080] uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          
          {/* Table Body */}
          <tbody className="bg-[#fff] divide-y divide-gray-[#d1cfcf]">
            {currentUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-[#d1cfcf] transition-colors">
                {/* Number */}
                <td className="p-[16px] whitespace-nowrap text-[14px] text-[#808080]">
                  {user.number}
                </td>
                
                <td className="p-[16px]">
                  <img 
                    src={user.profilePic} 
                    alt={`Profile of ${user.email}`}

                    className="h-[40px] w-[40px] rounded-[9999px] object-cover"
                  />
                </td>

                {/* Email */}
                <td className="p-[16px] whitespace-nowrap text-[14px] text-[#0a020200]">
                  {user.email}
                </td>

                {/* Phone Number */}
                <td className="p-[16px] whitespace-nowrap text-[14px] text-[#0a020200]">
                  {user.phoneNumber}
                </td>

                {/* Profile Picture */}
                <td className="p-[16px]">
                  <img 
                    src={user.profilePic} 
                    alt={`Profile of ${user.email}`}
                    className="h-[40px] w-[40px] rounded-[9999px] object-cover"
                  />
                </td>
                
                <td className="p-[16px]">
                  <img 
                    src={user.profilePic} 
                    alt={`Profile of ${user.email}`}
                    className="h-[40px] w-[40px] rounded-[9999px] object-cover"
                  />
                </td>
                
                
                
                
                
                
                
                {/* Status */}
                <td className="p-[16px] whitespace-nowrap text-[14px]">
                  <span 
                    className={`
                      px-[8px] py-[4px] rounded-[9999px] text-[14px] font-[500]
                      ${user.status === 'Active' 
                        ? 'bg-[#c1f5bb] text-[#147e14]' 
                        : 'bg-[#fedada] text-[#7c1515]'}
                    `}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="flex justify-between items-center mb-[8px] mt-[16px]">
        {/* Page Info */}
        <div className="text-[14px] text-[#808080]">
          Showing {indexOfFirstUser + 1} to {indexOfLastUser} of {allUsers.length} entries
        </div>
        
        {/* Pagination Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`
              p-[8px] rounded-[8px] border
              ${currentPage === 1 
                ? 'bg-[#dad8d8] text-[#aaa9a9] cursor-not-allowed' 
                : 'hover:bg-[#dad8d8] active:bg-[#c4c3c3]'}
            `}
          >
            <ChevronLeftIcon className="h-[20px] w-[20px]" />
          </button>
          
          <div className="px-[16px] py-[8px] bg-[dad8d8] rounded-[6px] text-[14px]">
            Page {currentPage} of {totalPages}
          </div>
          
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`
              p-[8px] rounded-[7px] border
              ${currentPage === totalPages 
               ? 'bg-[#dad8d8] text-[#aaa9a9] cursor-not-allowed' 
               : 'hover:bg-[#dad8d8] active:bg-[#c4c3c3]'}
            `}
          >
            <ChevronRightIcon className="h-[20px] w-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingsUsersTable;
