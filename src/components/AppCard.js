function AppCard({ name, clientName, appIcon, description, color, appStoreLink }) {
    return (
        <div className="flex flex-col max-w-screen-lg mx-auto rounded-3xl bg-gray-100 dark:bg-gray-1100 px-5 md:px-8 py-8 sm:py-14 md:py-16">
            <div className="mb-8 sm:mb-14 md:mb-16 mr-auto">
                <img className="w-16 md:w-32 lg:w-36 h-16 md:h-32 lg:h-36" src={appIcon} alt="App Icon"></img>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3 leading-none text-black dark:text-gray-100">{name}</h1>
            <p className="text-sm sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase" style={{ color: color }}>{clientName}</p>
            <p className="mb-8 sm:mb-14 md:mb-16 mt-8 text-md sm:text-xl font-normal leading-7 sm:leading-9 text-black dark:text-gray-100">{description}</p>
            <div className="flex-grow"></div>
            <div className="mx-auto">
                <div className="hidden lg:inline">
                    <div className="hidden dark:inline">
                        <a href={appStoreLink} style={{ display: "inline-block", overflow: "hidden", borderRadius: "13px", width: "250px", height: "83px" }}><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-US?size=250x83&amp;releaseDate=1478736000&h=0f8079ec163dcb13b25e500e85655996" alt="Download on the App Store" style={{ borderRadius: "13px", width: "250px", height: "83px" }}></img></a>
                    </div>
                    <div className="inline dark:hidden">
                        <a href={appStoreLink} style={{ display: "inline-block", overflow: "hidden", borderRadius: "13px", width: "250px", height: "83px" }}><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-US?size=250x83&amp;releaseDate=1478736000&h=0f8079ec163dcb13b25e500e85655996" alt="Download on the App Store" style={{ borderRadius: "13px", width: "250px", height: "83px" }}></img></a>
                    </div>
                </div>
                <div className="hidden md:inline lg:hidden">
                    <div className="hidden dark:inline">
                        <a href={appStoreLink} style={{ display: "inline-block", overflow: "hidden", borderRadius: "13px", width: "200px", height: "66.4px" }}><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-US?size=250x83&amp;releaseDate=1478736000&h=0f8079ec163dcb13b25e500e85655996" alt="Download on the App Store" style={{ borderRadius: "13px", width: "200px", height: "66.4px" }}></img></a>
                    </div>
                    <div className="inline dark:hidden">
                        <a href={appStoreLink} style={{ display: "inline-block", overflow: "hidden", borderRadius: "13px", width: "200px", height: "66.4px" }}><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-US?size=250x83&amp;releaseDate=1478736000&h=0f8079ec163dcb13b25e500e85655996" alt="Download on the App Store" style={{ borderRadius: "13px", width: "200px", height: "66.4px" }}></img></a>
                    </div>
                </div>
                <div className="inline md:hidden">
                    <div className="hidden dark:inline">
                        <a href={appStoreLink} style={{ display: "inline-block", overflow: "hidden", borderRadius: "7.8px", width: "150px", height: "49.8px" }}><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-US?size=250x83&amp;releaseDate=1478736000&h=0f8079ec163dcb13b25e500e85655996" alt="Download on the App Store" style={{ borderRadius: "7.8px", width: "150px", height: "49.8px" }}></img></a>
                    </div>
                    <div className="inline dark:hidden">
                        <a href={appStoreLink} style={{ display: "inline-block", overflow: "hidden", borderRadius: "7.8px", width: "150px", height: "49.8px" }}><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-US?size=250x83&amp;releaseDate=1478736000&h=0f8079ec163dcb13b25e500e85655996" alt="Download on the App Store" style={{ borderRadius: "7.8px", width: "150px", height: "49.8px" }}></img></a>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default AppCard;