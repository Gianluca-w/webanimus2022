import Image from "next/image";
import SecondImage from "../public/assets/img/mountain.png"
import FirstImage from "../public/assets/img/ImageSection.jpeg"
const AboutImage = ({ }) => (
    <div className="AboutImageWrapper">
        <div className="AboutImageInliner">
            <div className="AboutImageStandalone" >
                <Image src={FirstImage.src} layout='responsive' width={'790px'} height={'790px'} alt={''} />
                {console.log(FirstImage.src)}
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