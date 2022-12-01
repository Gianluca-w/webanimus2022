const SmallParagraph = ({ SmallTitle,UnderlinedLinkTitle, Content }) => (
    <div className="SmallParagraphWrapper">
        <div className="SmallParagraphContentWrapper">
            <div className="RegP SmallParagraphTitle">
                {SmallTitle}
            </div>
            <div className="SmallParagraphContentText">
            <a href='https://facttic.org.ar/' target='self'>{UnderlinedLinkTitle}</a>
                {Content}
            </div>
        </div>
    </div>
);
export default SmallParagraph