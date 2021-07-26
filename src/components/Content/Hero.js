import { useState } from "react";
// import newsletter from "util/newsletter.js";
// import FormField from "components/Layout/forms/FormField";


// import { useForm } from "react-hook-form";
import Image from "next/image";

import Link from "next/link";

import AuthModal from "../Authentication/AuthModal.js";


const Hero = (props) => {
    // const { handleSubmit, register, errors } = useForm();
    // const [earlysubsc, setSubscribed] = useState(false);
  
    // const onSubmit = ({ email }) => {
    //   setSubscribed(true);
    //   // Parent component can optionally
    //   // find out when subscribed.
    //   props.onSubscribed && props.onSubscribed();
    //   // Subscribe them
    //   newsletter.subscribe({ email });
    // };

  return (
    <>
        <div className="hidden relative lg:block lg:relative lg:inset-0">
         
        </div>
        <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
          <div className="relative top-0 inset-x-0 p-2 md:hidden"></div>

          <div className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                  {props.testingphase}
                </div>
                <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                  Plant <em>More</em>
                  <br className="hidden md:inline" />
                  <span className="text-blue-500"> Plant</span>
                  Form
                </h2>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  {props.subtitle}
                </p>
                <div className="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                  <p className="text-base font-medium text-gray-900">
                    Sign up to get notified about our journey and make your own plantform!
                  </p>
                

                  <AuthModal/>
                </div>
              </div>
              <div className="mt-12 relative max-w-lg mx-auto  sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
             
                <div className="relative mx-auto w-auto rounded-lg lg:max-w-lg">
              
                  {/* <Image
                  className="object-contain z-50	"
                    alt="Work?"
        width="600"
        height="600"
        layout="responsive"
                    src={props.image}
                  /> */}
             
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
export default Hero;
