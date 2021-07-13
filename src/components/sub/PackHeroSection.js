import React, { useState } from 'react';

import explore from '../../assets/img/explore.svg';
import travel from '../../assets/img/travel.svg';

function PackHero() {

    const [videoModalOpen, setVideoModalOpen] = useState(false);

    return (
        <div className="hero bg-gray-100 dark:bg-gray-800 py-16 rounded-md mt-5 md-6">

            <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">

                <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                    <div className="hero-text col-span-6">
                        <h1 className=" font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight dark:text-gray-300  ">Don't listen to what they say, Go See</h1>
                        <hr className=" w-12 h-1 bg-orange-500 rounded-full mt-8" />
                        <p className="text-gray-800 text-base leading-relaxed mt-8 font-semibold dark:text-white">Your ultimate travel companion. Carries all the information you need while travelling</p>
                        <div className="get-app flex space-x-5 mt-10 justify-center md:justify-start">
                            <button className="apple bg-white shadow-md px-3 py-2 rounded-lg flex items-center space-x-4 ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 cursor-pointer hover:bg-accentLight hover:bg-opacity-100 transition">
                                <div className="logo">
                                    <svg
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path d="M911.5 699.7a8 8 0 00-10.3-4.8L840 717.2V179c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V762c0 3.3 2.1 6.3 5.3 7.5L501 909.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zm-243.8-377L564 514.3h57.6c4.4 0 8 3.6 8 8v27.1c0 4.4-3.6 8-8 8h-76.3v39h76.3c4.4 0 8 3.6 8 8v27.1c0 4.4-3.6 8-8 8h-76.3V703c0 4.4-3.6 8-8 8h-49.9c-4.4 0-8-3.6-8-8v-63.4h-76c-4.4 0-8-3.6-8-8v-27.1c0-4.4 3.6-8 8-8h76v-39h-76c-4.4 0-8-3.6-8-8v-27.1c0-4.4 3.6-8 8-8h57L356.5 322.8c-2.1-3.8-.7-8.7 3.2-10.8 1.2-.7 2.5-1 3.8-1h55.7a8 8 0 017.1 4.4L511 484.2h3.3L599 315.4c1.3-2.7 4.1-4.4 7.1-4.4h54.5c4.4 0 8 3.6 8.1 7.9 0 1.3-.4 2.6-1 3.8z" />
                                    </svg>

                                </div>
                                <div className="text">
                                    <p className=" text-xs text-gray-600" >Convert all your</p>
                                    <p className=" text-xs font-semibold text-gray-900">currency</p>
                                </div>
                            </button>

                            <button className="google bg-white shadow-md px-3 py-2 flex items-center rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 cursor-pointer hover:bg-accentLight hover:bg-opacity-100 transition space-x-4">
                                <div className="image">
                                    <svg
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path d="M512 128c-212.1 0-384 171.9-384 384v360c0 13.3 10.7 24 24 24h184c35.3 0 64-28.7 64-64V624c0-35.3-28.7-64-64-64H200v-48c0-172.3 139.7-312 312-312s312 139.7 312 312v48H688c-35.3 0-64 28.7-64 64v208c0 35.3 28.7 64 64 64h184c13.3 0 24-10.7 24-24V512c0-212.1-171.9-384-384-384z" />
                                    </svg>
                                </div>
                                <div className="text">
                                    <p className="text-xs text-gray-600" >Get a your tour</p>
                                    <p className="text-xs font-semibold text-gray-900">Package</p>
                                </div>
                            </button>

                        </div>
                    </div>

                    <div className="hero-image col-span-6">
                      <img src={travel} className="dark:hidden"/>
                      <img src={explore} className="hidden dark:block"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PackHero;