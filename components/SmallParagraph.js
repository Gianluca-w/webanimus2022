const SmallParagraph = ({ SmallTitle,UnderlinedLinkTitle, Content }) => (
    <div className="SmallParagraphWrapper">
        <div className="SmallParagraphContentWrapper">
            <div className="RegP SmallParagraphTitle">
                {SmallTitle}
            </div>
            <div className="SmallParagraphContentText">
            <a>{UnderlinedLinkTitle}</a>
                {Content}
            </div>
        </div>
    </div>
);
export default SmallParagraph