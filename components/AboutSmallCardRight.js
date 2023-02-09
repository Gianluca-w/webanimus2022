import Image from "next/image";
const AboutSmallCardRight = ({
    Title,
    Body,
    OptionalImage,
    OptionalImageWdt,
    SideImage }) => (
    <div className="AboutSmallCardWrapper flex">
        <div className="aboutSmallCardAlongImgWrapper">
            <div className="aboutSmallCardSideImgContainer">
        <Image
                    src={`/assets/img/RestComponentBackground.jpeg`}
                    width={'600%'}
                    height={'400%'}
                    layout ='intrinsic'
                    alt='' />
                    </div>
        </div>
        <div className="aboutSmallCardContentWrapper">
        <AboutSmallCardTitle
            Content={Title} />
        <AboutSmallCardContent
            Content={Body} />
        <AboutSmallCardImg
            ImageSrc={OptionalImage}
            MaxWidth={OptionalImageWdt} />
            </div>
    </div>
);
const AboutSmallCardTitle = ({
    Content }) => (
    <div className="AboutSmallCardTitle">
        <strong>
            {Content}
        </strong>
    </div>
);
const AboutSmallCardContent = ({
    Content }) => (
    <div className="AboutSmallCardContent">
        {Content}
    </div>
);
const AboutSmallCardImg = ({
    ImageSrc,
    MaxWidth }) => (

    <div>
        {ImageSrc &&
            <div className="AboutSmallCardImg" style={{ maxWidth: `${MaxWidth}` }}>
                <Image
                    src={`/assets/img/${ImageSrc}`}
                    width={'4px'}
                    height={'1px'}
                    layout='responsive'
                    alt='' />
            </div>
        }
    </div>
);

export default AboutSmallCardRight