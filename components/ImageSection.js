const ImageSection = ({ FillingImg }) => (
    <div className="ImageSectionWrapper">
        <div className="ImageSectionImgWrapper" style={{ backgroundImage: `url('/assets/img/${FillingImg}')` }}></div>
        <div className="ImageSectionEmptyMargin"></div>
    </div>
);
export default ImageSection