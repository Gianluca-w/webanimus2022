const TitleAndSubtitle = ({ 
    title, 
    Subtitle }) => (

    <TitleAndSubititleParent>
        <Title Content={title}></Title>
        <SubTitle Content={Subtitle}></SubTitle>
    </TitleAndSubititleParent>

);
const Title = ({ Content }) => {
    return <div className="TitleWrapper">
        {Content}
    </div>

}
const SubTitle = ({ Content }) => {
    return <div className="SubTitleContentWrapper">
        {Content}
    </div>

};
const TitleAndSubititleParent = ({ children }) => {
    return <div className="TitleAndSubtitleParentWrapper">
        <div className="TitleAndSubtitleGrid">
            {children}
        </div>
    </div>
}

export default TitleAndSubtitle;