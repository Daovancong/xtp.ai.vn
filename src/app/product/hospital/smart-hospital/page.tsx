'use client';
import React, { useState, useEffect } from "react";
import style from "@/app/style/styles.module.css";
import Navigation from '@/components/navigation';
import { usePathname } from "next/navigation";
import Link from 'next/link';
import Image from "next/image";
import Footer from "@/components/Footer";
import Benefit from "@/components/benefit";

export default function product() {
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        if (showVideo) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showVideo]);
    const pathname = usePathname();

    return (
        <main className={`${style.mainIndex} w-[70%] bg-white ml-[15%] mr-[15%] relative top-[20vh] flex flex-col shadow-md`}>
            <div className='w-full h-10 bg-[#005db2] flex items-center'>
                <div className='flex justify-end h-full max-w-[1170px] w-full m-auto'>
                    <ul className='p-0 m-0 h-full list-none flex items-center'>
                        <li className='cursor-pointer h-full items-center py-2 relative mr-4'>
                        </li>
                    </ul>
                </div>
            </div>
            <Navigation />
            <section className='py-[3.125rem] bg-[#f3f4f8] pb-[100px] p-12 relative overflow-hidden'>
                <div className='container w-full max-w-[1200px]'>
                    <div>
                        <div className='m-auto relative min-h-0.5 px-4 w-[55%] float-left max-930:w-full'>
                            <h1 className='text-lg mb-12 font-bold'>
                                PHẦN MỀM QUẢN LÝ BỆNH VIỆN THÔNG MINH
                            </h1>
                            <p className='text-sm mb-5 font-medium'>
                                <span>Phần mềm quản lý bệnh viện đầu và cuối <b>HIS</b></span> <br />
                                <span>Phần mềm quản lý máy y tế <b>LIS</b></span> <br />
                                <span>Phần mềm quản lý thông tin chuẩn đoán hình ảnh <b>PACS</b></span> <br />
                                <span>Phần mềm bệnh án điện tử <b>EMR</b></span> <br />
                                <span>Phần mềm xếp hạng tự động <b>QMS</b></span> <br />
                            </p>
                            <p className='text-sm mb-5 font-medium'>
                                <b>PHẦN MỀM TÍCH CỰC KHÁC</b> <br />
                            </p>
                            <p className='text-sm mb-5 font-medium'>
                                <span>Phần mềm quản lý văn bản <b>IOFFICE</b></span> <br />
                                <span>Phần mềm quản lý trạng thái y tế <b>MMME</b></span> <br />
                                <span>Phần mềm hóa đơn điện tử <b>E-INVOICE</b></span> <br />
                                <span>Phần mềm telemedicine <b>TELEMEDICINE</b></span> <br />
                                <span>Kết nối thanh toán không tiền mặt <b>EPAYMENTS</b></span>
                            </p>
                            <div className='mt-12 mr-[-15px]'>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2 max-750:w-full max-750:mt-5"
                                    onClick={() => {
                                        const link = document.createElement("a");
                                        link.href = "/file/Small.pdf";
                                        link.download = "OFFICIAL HỆ THỐNG Bệnh Viện Thông Minh His Và Lis.pdf";
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                    }}
                                >
                                    Download now
                                </button>
                                <button
                                    className="bg-white hover:bg-slate-200 text-slate-500 font-bold py-2 px-4 rounded-full m-2 max-750:w-full max-750:mt-5"
                                    onClick={() => setShowVideo(true)}
                                >
                                    video hướng dẫn
                                </button>
                                {showVideo && (
                                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 mt-28">
                                        <div className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full ">
                                            <button
                                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-200"
                                                onClick={() => setShowVideo(false)}
                                            >
                                                ✖
                                            </button>
                                            <div className="aspect-w-16 aspect-h-9">
                                                <iframe width="560" height="315" className='w-full' src="https://www.youtube.com/embed/h6q3zIWmBGM?si=XFbtxTMCvSOvLD0U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='text-center relative min-h-0.5 px-4 w-[45%] m-auto float-right max-930:w-full'>
                            <Image className='w-full h-full' width={300} height={300} src={'/product/benh-vien-thong-minh-his-lis.png'} alt='' />
                        </div>
                    </div>
                </div>
            </section>
            <Benefit />
            <Footer />
        </main >

    )
}
