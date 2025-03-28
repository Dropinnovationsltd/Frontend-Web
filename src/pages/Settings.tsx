import { UserIcon, PauseCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { EyeIcon, EyeSlashIcon, CameraIcon, ArrowUpLeftIcon } from '@heroicons/react/24/outline';



const Settings = () => {

    const [previewImage, setPreviewImage] = useState(null)
    const [activeTab, setActiveTab] = useState(null);
    const [passwordVisibility, setPasswordVisibility] = useState({
        currentPassword: false,
        newPassword: false,
        confirmPassword: false
      });
      const togglePasswordVisibility = (field) => {
        setPasswordVisibility(prev => ({
          ...prev,
          [field]: !prev[field]
        }));
      };

      const handleImageUpload = (event) => {
        const file = event.target.files[0]
        if (file) {
          const reader = new FileReader()
          reader.onloadend = () => {
            setPreviewImage(reader.result)
          }
          reader.readAsDataURL(file)
        }
      }

  return (
    <div className='container mx-auto p-[8px]'>
        <div>
            <h2 className='text-[24px] font-[400] py-[8px] text-[#808080]'>
                Account Settings
            </h2>
        </div>
        <div className='bg-[#f5f5f5] mb-[30px] rounded-[10px]'>
            <div onClick={() => setActiveTab('general')} 
            className={`
                cursor-pointer p-[px] flex rounded-[10px] 
            ${
            activeTab === 'general' 
              ? 'bg-[#96842c] text-[#fff]' 
              : 'bg-[#fff] text-[#808080]'
          }`}>
                <UserIcon className='h-[30px] p-[8px] w-[30px]'/>
                <p className='text-[16px] px-[8px] font-[300]'>
                    General
                </p>
            </div>
            <div onClick={() => setActiveTab('password')} 
            className={`
                cursor-pointer p-[px] flex rounded-[10px] 
            ${
            activeTab === 'password' 
              ? 'bg-[#96842c] text-[#fff]' 
              : 'bg-[#fff] text-[#808080]'
          }`}>
                <PauseCircleIcon className='h-[30px] p-[8px] w-[30px]'/>
                <p className='text-[16px] px-[8px] font-[300]'>
                    Change Password
                </p>
            </div>
            
        </div>

      {activeTab === 'general' && (
        <div className="bg-[#fff] mt-[90px] py-[16px] px-[20px] shadow rounded-[7px]">
          <div className="space-y-4 p-[px]">
         <div className='flex '>
         <div className="w-[80px] h-[80px] rounded-[16px] bg-[#f5f5f5] flex items-center justify-center overflow-hidden">
        {previewImage ? (
          <img 
            src={previewImage} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        ) : (
          <CameraIcon className="text-[#808080] h-[40px] w-[40px]" />
        )}
      </div>

      {/* Upload Button */}
      <div className="flex flex-col space-y-2">
        <label 
          htmlFor="profile-pic-upload" 
          className="cursor-pointer inline-flex items-center  px-[16px] py-[8px] 
                     bg-[#96842c] text-[#fff] rounded-[14px] 
                     hover:bg-[#6d6120] transition-colors"
        >
          <ArrowUpLeftIcon className="mr-[8px] h-[20px] w-[20px]" />
          Upload
          <input 
            type="file" 
            id="profile-pic-upload"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>
        <p className="text-[14px] text-[#808080] font-[300]">
          JPG or PNG. Max size 5MB.
        </p>
      </div>
         </div>
            
                <div className='flex flex-col py-[8px]'>
                    <label htmlFor='name'
                    className='block my-[8px] text-[#808080] font-[300]'>
                        Name
                    </label>
                    <input type="text"
                    className='w-[90%] p-[8px] text-[#808080] bg-[#f5f5f5] font-[300] border rounded-[8px]'
                    placeholder="Admins"  />
                </div>
                <div className='flex flex-col py-[8px]'>
                    <label htmlFor='email'
                    className='block my-[8px] text-[#808080] font-[300]'>
                        E-mail
                       </label>
                    <input type="email"
                    className='w-[90%] p-[8px] text-[#808080] bg-[#f5f5f5] font-[300] border rounded-[8px]'
                    placeholder="admin@taxi.com"  />
                </div>
                <div className='flex flex-col py-[8px]'>
                    <label htmlFor='country=code'
                    className='block my-[8px] text-[#808080] font-[300]'>
                        Country Code
                    </label>
                    <input type="text"
                    className='w-[90%] p-[8px] text-[#808080] bg-[#f5f5f5] font-[300] border rounded-[8px]'
                    placeholder="Country Code"  />
                </div>
                <div className='flex flex-col py-[8px]'>
                    <label htmlFor='phone'
                    className='block my-[8px] text-[#808080] font-[300]'>
                        Emergency Phone Number
                    </label>
                    <input type="phone"
                    className='w-[90%] p-[8px] text-[#808080] bg-[#f5f5f5] font-[300] border rounded-[8px]'
                    placeholder="Phone Number"  />
                </div>
                <div className='flex flex-col py-[8px]'>
                    <label htmlFor='name'
                    className='block my-[8px] text-[#808080] font-[300]'>
                        Commission(%)
                    </label>
                    <input type="text"
                    className='w-[90%] p-[8px] text-[#808080] bg-[#f5f5f5] font-[300] border rounded-[8px]'
                    placeholder="Commission"  />
                </div>
                <div className='flex flex-col py-[8px]'>
                    <label htmlFor='name'
                    className='block my-[8px] text-[#808080] font-[300]'>
                        Payment Mode
                    </label>
                    <p className='block my-[8px] text-[14px] text-[#989898] font-[300]'>
                        Toggle for live mode. Leave unchecked for the test mode
                    </p>
                </div>
                <button className="my-[10px] bg-[#96842c] text-[#fff] p-[8px] rounded-[8px]">
              Save Changes
            </button>         
          </div>
        </div>
      )}

      {activeTab === 'password' && (
        <div className="bg-[#fff] mt-[90px] py-[16px] px-[20px] shadow rounded-[7px]">
          
          <div className="space-y-4">
            <div>
              <label className="block my-[8px] text-[#808080] font-[300]">Old Password</label>
             <div className='flex items-center'>
             <input 
                type={passwordVisibility.currentPassword ? "text" : "password"}  
                className="w-[90%] p-[8px] text-[#808080] font-[300] border rounded-[8px]" 
                placeholder="Old password" 
              />
              <span  
                  className="absolute right-[50px] mt-[8px] bg-transparent top-1/2 transform -translate-y-1/2"
                  onClick={() => togglePasswordVisibility('currentPassword')}
                >
                  {passwordVisibility.currentPassword ? (
                    <EyeSlashIcon className="text-[#808080] h-[15px] w-[15px]  border-collapse border-none" />
                  ) : (
                    <EyeIcon className="text-[#808080] h-[15px] w-[15px]" />
                  )}
                </span>
             </div>
            </div>
            <div>
              <label className="block my-[8px] text-[#808080] font-[300]">New Password</label>
              <div>
              <input 
                type={passwordVisibility.newPassword ? "text" : "password"} 
                className="w-[90%] p-[8px] text-[#808080] font-[300] border rounded-[8px]" 
                placeholder="New password" 
              />
              <span
                  
                  className="absolute right-[50px] mt-[70px] bg-transparent top-1/2 transform -translate-y-1/2"
                  onClick={() => togglePasswordVisibility('newPassword')}
                >
                  {passwordVisibility.newPassword ? (
                    <EyeSlashIcon className="text-[#808080] h-[15px] w-[15px]  border-collapse border-none" />
                  ) : (
                    <EyeIcon className="text-[#808080] h-[15px] w-[15px]" />
                  )}
                </span>
              </div>
            </div>
            <div>
              <label className="block my-[8px] text-[#808080] font-[300]">Retype New Password</label>
             <div>
             <input 
                type={passwordVisibility.confirmPassword ? "text" : "password"} 
                className="w-[90%] p-[8px] text-[#808080] font-[300] border rounded-[8px]" 
                placeholder="New password" 
              />
              <span
                  type="button"
                  className="absolute right-[50px] mt-[140px] bg-transparent top-1/2 transform -translate-y-1/2"
                  onClick={() => togglePasswordVisibility('confirmPassword')}
                >
                  {passwordVisibility.confirmPassword ? (
                    <EyeSlashIcon className="text-[#808080] h-[15px] w-[15px] bg-transparent border-collapse border-none" />
                  ) : (
                    <EyeIcon className="text-[#808080] h-[15px] w-[15px]" />
                  )}
                </span>
             </div>
            </div>
            <button className="my-[10px] bg-[#96842c] text-[#fff] p-[8px] rounded-[8px]">
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Settings