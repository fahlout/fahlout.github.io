import ProfileImageVector from './resources/nik-fahl-vector.svg';

function Hero() {
    return (
        <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 md:mt-24 sm:mt-16 mt-10 pb-3">
            <section id="hero">
                <div className="px-4 sm:px-6 md:px-16 mb-10 sm:mb-16 md:mb-20">
                    <div className="mb-12 sm:mb-13 md:mb-16">
                        <img className="lg:w-64 md:w-60 w-44 lg:h-64 md:h-60 h-44 rounded-full mx-auto" src={ProfileImageVector} alt="Nik Fahl"></img>
                    </div>
                    <div className="xl:my-auto">
                        <p className="text-3xl sm:text-5xl lg:text-6xl text-center leading-none font-extrabold text-gray-900 dark:text-gray-100 tracking-tight mb-8">
                            Hi, I'm Nik! 👋🏼
                        </p>
                        <p className="max-w-3xl mx-auto text-lg sm:text-2xl text-center font-medium sm:leading-10 space-y-6 text-gray-500 dark:text-gray-400">
                            I am an iOS developer with over 6 years of experience developing and deploying apps and a passion for designing and implementing beautiful and pixel-perfect user interfaces.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center pb-3">
                    <a className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 border-green-500 border-2 rounded-xl text-green-500 text-lg hover:bg-green-500 hover:text-white" href={process.env.PUBLIC_URL + '/documents/Niklas-Fahl-Resume.pdf'} target="_blank" rel="noopener noreferrer">View my Resume</a>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-600 mx-auto md:max-w-sm md:w-auto w-1/2 mb-10 sm:mb-16 md:mb-20 mt-10 sm:mt-16 md:mt-20"></div>
            </section>
        </div>
    );
}

export default Hero;