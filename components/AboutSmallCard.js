import Image from "next/image";
const AboutSmallCard = ({ Title, Body, OptionalImage, OptionalImageWdt }) => (
    <div className="AboutSmallCardWrapper">
        <AboutSmallCardTitle Content={Title} />
        <AboutSmallCardContent Content={Body} />
        <AboutSmallCardImg ImageSrc={OptionalImage} MaxWidth={OptionalImageWdt} />
    </div>
);
const AboutSmallCardTitle = ({ Content }) => (
    <div className="AboutSmallCardTitle">
        <strong>{Content}</strong>
    </div>
);
const AboutSmallCardContent = ({ Content }) => (
    <div className="AboutSmallCardContent">
        {Content}
    </div>
);
const AboutSmallCardImg = ({ ImageSrc, MaxWidth }) => (

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

export default AboutSmallCard