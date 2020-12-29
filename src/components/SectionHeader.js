function SectionHeader({ title, subtitle, subtext }) {
    return (
        <div className="mb-10 sm:mb-16 lg:mb-14">
            <h2 className="sm:text-lg sm:leading-snug font-semibold text-center tracking-wide uppercase text-green-500 mb-3">{subtitle}</h2>
            <p className="section-title">
                {title}
            </p>
            <p className="subtext">
                {subtext}
            </p>
        </div>
    );
}

export default SectionHeader;