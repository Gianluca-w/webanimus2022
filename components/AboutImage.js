import Image from "next/image";
import SecondImage from "../public/assets/img/mountain.jpg"
import FirstImage from "../public/assets/img/AboutUsShowImg.jpg"
const AboutImage = ({ }) => (
    <div className="AboutImageWrapper">
        <div className="AboutImageInliner">
            <div className="AboutImageStandalone" >
                <Image src={FirstImage.src} layout='responsive' width={'790px'} height={'790px'} alt={''} />
            </div>
            <div className="AboutImageStandalone AboutImageSecond" >
                <Image src={SecondImage.src} layout='responsive' width={'790px'} height={'790px'} alt={''} />
            </div>
        </div>
    </div>
    //style={{ background: `url(/assets/img/ImageSection.jpeg)` }} 
    //style={{ background: `url(/assets/img/mountain.png)`}}
);
export default AboutImage