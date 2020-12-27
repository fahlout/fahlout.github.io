import ProfileImage from './resources/nik-profile-image.jpg';

function Hero() {
    return (
        <div class="lg:flex items-center justify-center max-w-screen-lg xl:max-w-screen-xl mx-auto space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 md:mt-24 sm:mt-16 mt-10">
            <section id="hero">
                <div class="xl:flex px-4 sm:px-6 md:px-16 mb-10 sm:mb-16 md:mb-20">
                    <div class="xl:flex items-center justify-center xl:mb-0 mb-12">
                        <img class="lg:w-64 md:w-60 w-44 lg:h-64 md:h-60 h-44 rounded-full md:my-auto xl:mr-20 xl:mx-0 mx-auto" src={ProfileImage} alt="Nik Fahl"></img>
                    </div>
                    <div class="xl:my-auto">
                        <p class="text-3xl sm:text-5xl lg:text-6xl text-center leading-none font-extrabold text-gray-900 tracking-tight mb-8">
                            Hi, I'm Nik! 👋🏼
                        </p>
                        <p class="xl:max-w-3xl max-w-xl text-lg sm:text-2xl text-center font-medium sm:leading-10 space-y-6 text-gray-500">
                            I am an iOS developer with extensive experience in developing and deploying apps for various clients and a passion for designing and implementing beautiful and pixel-perfect user interfaces.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;