import React from 'react';
import { HiClock, HiPhoneOutgoing, HiOutlineMail, HiXCircle } from "react-icons/hi";
import { FaLocationDot, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='py-8 text-white'>
            <h2 className="text-3xl text-center font-bold font-bebas uppercase">We ready to have you the best dining experiences</h2>
            <div className='md:flex justify-between md:mt-8 mt-3 space-y-3 md:space-y-0'>
                <div className='text-center'>
                    <p className='flex justify-center text-[#FEBF00]'><HiClock></HiClock></p>
                    <h6 className="text-md uppercase font-bebas font-bold">Opening hours</h6>
                    <p><small>Monday - Sunday <br /> 9:00 AM to 11:30 PM</small></p>
                </div>
                <div className='text-center'>
                    <p className='flex justify-center text-[#FEBF00]'><HiPhoneOutgoing></HiPhoneOutgoing></p>
                    <h6 className="text-md uppercase font-bebas font-bold">Lets Talk</h6>
                    <p><small>Phone: 1-800-222-4545 <br /> Fax: 1-800-222-4545</small></p>
                </div>
                <div className='text-center'>
                    <p className='flex justify-center text-[#FEBF00]'><HiOutlineMail></HiOutlineMail></p>
                    <h6 className="text-md uppercase font-bebas font-bold">Book a Table</h6>
                    <p><small>Email: demo@website.com <br /> Support: support@website.com</small></p>
                </div>
                <div className='text-center'>
                    <p className='flex justify-center text-[#FEBF00]'><FaLocationDot></FaLocationDot></p>
                    <h6 className="text-md uppercase font-bebas font-bold">Our Address</h6>
                    <p><small>123 Stree New York City , <br /> United States Of America.</small></p>
                </div>
            </div>
            <div className='md:mt-6 mt-3 space-y-3'>
                <div className='text-center md:space-x-6 space-x-3'>
                    <a><button className='btn btn-circle  btn-outline border border-[#E5E7EB] text-white'><FaFacebook></FaFacebook></button></a>
                    <a><button className='btn btn-circle  btn-outline border border-[#E5E7EB] text-white'><HiXCircle></HiXCircle></button></a>
                    <a><button className='btn btn-circle  btn-outline border border-[#E5E7EB] text-white'><FaInstagram></FaInstagram></button></a>
                    <a><button className='btn btn-circle text-white btn-outline border border-[#E5E7EB]'><FaLinkedin></FaLinkedin></button></a>
                </div>
                <p className="text-center">© 2023 <span className='text-[#FEBF00]'>Niomax</span>  All Rights Reserved </p>
            </div>
        </div>
    );
};

export default Footer;