import Link from "next/link";
const SmallParagraph = ({ SmallTitle,UnderlinedLinkTitle, Content }) => (
    <div className="SmallParagraphWrapper">
        <div className="SmallParagraphContentWrapper">
            <div className="RegP SmallParagraphTitle">
                {SmallTitle}
            </div>
            <div className="SmallParagraphContentText">
                <Link href='/about'><a className="AltHoverableLink">{UnderlinedLinkTitle}</a></Link>
            
                {Content}
            </div>
        </div>
    </div>
);
export default SmallParagraph