import SectionHeader from './SectionHeader';

function Hero({ title, subtext, image, linkPath, linkTitle }) {
    return (
        <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 md:mt-24 sm:mt-16 mt-10">
            <section id="hero">
                <div className="px-4 sm:px-6 md:px-16">
                    <div className="mb-12 sm:mb-13 md:mb-16">
                        <img className="lg:w-64 md:w-60 w-44 lg:h-64 md:h-60 h-44 rounded-full mx-auto" src={image} alt="Nik Fahl"></img>
                    </div>
                    <SectionHeader title={title} subtext={subtext} />
                </div>
                <div className="flex justify-center">
                    <a className="green-button-lg" href={process.env.PUBLIC_URL + { linkPath }} target="_blank" rel="noopener noreferrer">{linkTitle}</a>
                </div>
                <div className="divider"></div>
            </section>
        </div>
    );
}

export default Hero;