const TitleSection = ({ title, description }) => {
    return (
        <div className="text-center pb-[20px]">
            <h2 data-aos="fade-up" className="font-semibold text-3xl">{title}</h2>
            <p data-aos-delay="350" data-aos="fade-up" className="max-w-md mx-auto mt-2 text-gray-500">{description}</p>
        </div>
    );
};

export default TitleSection;