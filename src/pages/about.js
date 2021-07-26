import Image from "next/image"
// import CtaSection from "components/content/cta/CtaSection";
import Layout from "components/Layout/Layout";
import { useRouter } from "next/router";


function Research(props) {
  const router = useRouter();

  return (
    <Layout title = "GreenrSpace. Share your plants." description = "Nature is the essence of life. ">
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2 bg-green-800">
            <div              className="h-56 w-full object-cover lg:absolute lg:h-full"
>
            <Image
              src="/static/example_photos/silveryanne.JPG"
              alt=""

              height = "1250"
              width = "1000"
              layout = "intrinsic"
            />
            </div>
          </div>
        </div>
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <p className="leading-6 text-green-500 font-semibold tracking-wide uppercase">
                We're at the beginning of a new era of plants
              </p>
              <h1 className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                Sharing your love of nature is natural. Now you can share it with the best community in the world!
              </h1>
              <p className="text-lg leading-7 text-gray-500 mb-5">
              Greenr's vision of the future is one plantlove is shared! 
              
              

              </p>
              <div className="prose text-gray-500">
                <p>
                Greenr is amazing
                </p>
                <p>Currently in testing:</p>
                <ul>
                <li>
                    GreenrApp - plantpeople!
                  </li>
                  <li>
                    Greenr - plantay
                  </li>
                  
                </ul>
                <h2>Leading too</h2>
                <ol>
                  <li>
                    Better understanding of the efficacy of medications and substances
                  </li>
                  <il>
                    Our Greenr platform uses computer vision, natural language processing, and more to understand how attention is changing over time for users, how facial expressions and sentiment is changing, and understand symptoms like stimming and see there prevalence.
                  </il>
                  
                  <li>Compliant and secure</li>
                  <il>
                    magic plants need magic security.
                  </il>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <CtaSection
        bg="primary"
        textColor="light"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title="Want to learn more?"
        subtitle="Contact our team"
        buttonText="Contact Us"
        buttonColor="light"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/contact");
        }}
      /> */}
      <div className="relative bg-gray-800">
        <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:right-0 md:h-full md:w-1/2">

          {/* <Image
          className="w-full h-full object-contain"
            src="/static/ourteam.jpeg"
            alt="Support team"
          /> */}
        </div>
        <div className="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:mr-auto md:w-1/2 md:pl-10">
            <div className="text-base leading-6 font-semibold uppercase tracking-wider text-gray-300">
              Greenr - Devoted to plants
            </div>
            <h2 className="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
              Want to learn more?
            </h2>
            <p className="mt-3 text-lg leading-7 text-gray-300">
              We are currently working with plant people
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                >
                  Signup Now!
                  <svg
                    className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Research;
