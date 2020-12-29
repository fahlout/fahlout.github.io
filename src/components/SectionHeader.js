function SectionHeader({ title, subtitle, subtext }) {
    return (
        <div className="mb-10 sm:mb-16 lg:mb-14">
            <h2 className="section-subtitle">{subtitle}</h2>
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