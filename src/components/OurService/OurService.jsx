import React from "react";
import { FaMobileScreen } from "react-icons/fa6";
import { MdOutlineFastfood } from "react-icons/md";
import { MdFoodBank } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";

const OurServices = () => {
    return (
        <div className="container py-12">
            {/* header section */}
            <div className="text-center ">
                <h1 className="text-4xl font-semibold">Our Services</h1>
            </div>
            {/* icons section */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-12">
                <div className="flex justify-center items-center gap-3">
                    <FaMobileScreen className="text-2xl" />
                    <p className="text-xl font-semibold">Online Booking</p>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <MdOutlineFastfood className="text-2xl" />
                    <p className="text-xl font-semibold">Fast Food</p>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <MdFoodBank className="text-2xl" />
                    <p className="text-xl font-semibold">Healthy Food</p>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <CiDeliveryTruck className="text-2xl" />
                    <p className="text-xl font-semibold">Delivery</p>
                </div>
            </div>
            <div className="mt-9 text-1xl font-bold dark:text-white">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, porro laudantium? Ipsa quasi nesciunt hic ab atque unde magnam voluptatibus facilis asperiores molestias optio omnis, id consectetur. Laudantium, dolorem voluptates Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laboriosam beatae a debitis sed sequi modi totam eligendi nihil natus optio, amet expedita quod corrupti, aliquam vel. Cum, quo fugiat? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt commodi ut et necessitatibus laborum adipisci aut repellat sint facere ratione, laboriosam dolorem, quam, recusandae odit maxime sequi eius saepe soluta.</p>
            </div>
        </div>
    );
};

export default OurServices;