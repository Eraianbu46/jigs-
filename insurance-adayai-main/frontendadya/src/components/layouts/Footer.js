import React from 'react';
import InstagramIcon from '../../icons/instagramIcon';
import FacebookIcon from '../../icons/facebookIcon';
import TwitterIcon from '../../icons/twitterIcon';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='border-y-[1px] border-gray-300 font-medium'>
            <div className='lg:w-[80%] w-[90%] mx-auto flex flex-col gap-[10px]'>
                <div className="flex flex-row gap-[20px] py-[15px] justify-center items-center">
                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/security-checked--v1.png" alt="security-checked--v1" />
                    <text className='font-semibold text-[24px] text-blue-600'>JIGS INSURANCE</text>
                </div>
                <div className='flex flex-row gap-[30px] py-[15px] justify-center'>
                    <Link to="/" className='hover:text-blue-500'>HOME</Link>
                    <Link to="/" className='hover:text-blue-500'>POLICIES</Link>
                    <Link to="/user-insurance" className='hover:text-blue-500'>PURCHASED</Link>
                    <Link to="" className='hover:text-red-500'>CONTACT</Link>
                </div>
               
                
            </div>
        </section>
    );
};

export default Footer;