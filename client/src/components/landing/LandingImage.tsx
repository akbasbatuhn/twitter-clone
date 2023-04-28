import landingPageImage from "../../assets/landing-page-image.png";

const LandingImage = () => {
    return (
        <>
            <img
                src={landingPageImage}
                alt="Landing Page Image"
                className="object-cover h-full w-full"
            />
        </>
    );
};

export default LandingImage;
