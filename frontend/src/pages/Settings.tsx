import React from 'react';
import { UserIcon, PauseCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { EyeIcon, EyeSlashIcon, CameraIcon, ArrowUpLeftIcon } from '@heroicons/react/24/outline';



const Settings = () => {

const [previewImage, setPreviewImage] = useState<string | null>(null)
const [activeTab, setActiveTab] = useState<string | null>(null);
const [passwordVisibility, setPasswordVisibility] = useState<{
    currentPassword: boolean;
    newPassword: boolean;
    confirmPassword: boolean;
}>({

        currentPassword: false,
        newPassword: false,
        confirmPassword: false
      });
      const togglePasswordVisibility = (field: keyof typeof passwordVisibility) => {

        setPasswordVisibility(prev => ({
          ...prev,
          [field]: !prev[field]
        }));
      };

      const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
          const reader = new FileReader()
          reader.onloadend = () => {
            if (typeof reader.result === 'string') {
                setPreviewImage(reader.result);

          }
          reader.readAsDataURL(file)
        }
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
                cursor-pointer flex rounded-[10px] px-2
            ${
            activeTab === 'general' 
              ? 'bg-[#96842c] text-[#fff]' 
              : 'bg-[#fff] text-[#808080]'
          }`}>
                <UserIcon className='h-7 md:h-8 md:w-8 md:pt-3 pt-2 w-7'/>
                <p className='text-[16px] py-2 md:text-lg px-[8px] font-[300]'>
                    General
                </p>
            </div>
            <div onClick={() => setActiveTab('password')} 
            className={`
                cursor-pointer p-[px] flex rounded-[10px] px-2
            ${
            activeTab === 'password' 
              ? 'bg-[#96842c] text-[#fff]' 
              : 'bg-[#fff] text-[#808080]'
          }`}>
                <PauseCircleIcon className='h-7 md:h-8 md:w-8 md:pt-3 pt-2 w-7'/>
                <p className='text-[16px] py-2 md:text-lg px-[8px] font-[300]'>
                    Change Password
                </p>
            </div>
            
        </div>

      {activeTab === 'general' && (
        <div className="bg-[#fff] mt-[90px] py-[16px] px-[20px] shadow rounded-[7px]">
          <div className="space-y-4 p-[px]">
         <div className='flex '>
         <div className="w-22 h-22 rounded-[16px] bg-[#f5f5f5] flex items-center justify-center overflow-hidden">
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
          className="cursor-pointer inline-flex items-center px-[16px] py-[8px] 
                     bg-[#96842c] m-6 text-[#fff] rounded-[14px] 
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
         
        </p>
      </div>
         </div>
            
                <div className='flex flex-col py-[8px]'>
                    <label htmlFor='name'
                    className='block my-[8px] text-[#808080] font-[300]'>
                        Name
                    </label>
                    <input type="text"
                    className='w-full p-[8px] text-[#808080] bg-[#f5f5f5] font-[300] border rounded-[8px]'
                    placeholder="Admins"  />
                </div>
                <div className='flex flex-col py-[8px]'>
                    <label htmlFor='email'
                    className='block my-[8px] text-[#808080] font-[300]'>
                        E-mail
                       </label>
                    <input type="email"
                    className='w-full p-[8px] text-[#808080] bg-[#f5f5f5] font-[300] border rounded-[8px]'
                    placeholder="admin@taxi.com"  />
                </div>
                <div className='flex flex-col py-[8px]'>
                    <label htmlFor='country=code'
                    className='block my-[8px] text-[#808080] font-[300]'>
                        Country Code
                    </label>
                    <input type="text"
                    className='w-full p-[8px] text-[#808080] bg-[#f5f5f5] font-[300] border rounded-[8px]'
                    placeholder="Country Code"  />
                </div>
                <div className='flex flex-col py-[8px]'>
                    <label htmlFor='phone'
                    className='block my-[8px] text-[#808080] font-[300]'>
                        Emergency Phone Number
                    </label>
                    <input type="phone"
                    className='w-full p-[8px] text-[#808080] bg-[#f5f5f5] font-[300] border rounded-[8px]'
                    placeholder="Phone Number"  />
                </div>
                <div className='flex flex-col py-[8px]'>
                    <label htmlFor='name'
                    className='block my-[8px] text-[#808080] font-[300]'>
                        Commission(%)
                    </label>
                    <input type="text"
                    className='w-full p-[8px] text-[#808080] bg-[#f5f5f5] font-[300] border rounded-[8px]'
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
                <button className="my-[10px] bg-[#96842c] text-[#fff] p-[8px] cursor-pointer rounded-[8px]">
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
             <div className='flex justify-center items-center'>
             <input 
                type={passwordVisibility.currentPassword ? "text" : "password"}  
                className="w-full p-[8px] text-[#808080] font-[300] border rounded-[8px]" 
                placeholder="Old password" 
              />
              <span  
                  className="absolute right-10 md:right-30"
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
            <div className=''>
              <label className="block my-[8px] text-[#808080] font-[300]">New Password</label>
              <div className='flex justify-center items-center'>
              <input 
                type={passwordVisibility.newPassword ? "text" : "password"} 
                className="w-full p-[8px] text-[#808080] font-[300] border rounded-[8px]" 
                placeholder="New password" 
              />
              <span
                  
                  className="absolute right-10 md:right-30"
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
             <div className='flex justify-center items-center'>
             <input 
                type={passwordVisibility.confirmPassword ? "text" : "password"} 
                className="w-full p-[8px] text-[#808080] font-[300] border rounded-[8px]" 
                placeholder="New password" 
              />
              <span
                  className="absolute right-10 md:right-30"
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
            <button className="my-[10px] bg-[#96842c] text-[#fff] p-[8px] cursor-pointer rounded-[8px]">
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Settings;
