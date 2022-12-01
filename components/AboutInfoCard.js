
const AboutInfoCard = ({ Title, SubTitle, Body }) => (
    <div className="AboutInfoCardWrapper">
        <div className="AboutInfoCardInliner">
            <div className="InfoCardColumnContent">
                <AboutInfoCardTitle Content={Title} />
                <AboutInfoCardSubTitle Content={SubTitle} />
            </div>
            <div className="InfoCardColumnContent"><AboutInfoCardContent Content={Body} /></div>
        </div>
    </div>
);
const AboutInfoCardTitle = ({ Content }) => (
    <div className="AboutInfoCardTitle">
        <strong>{Content}</strong>
    </div>
);
const AboutInfoCardSubTitle = ({ Content }) => (
    <div className="AboutInfoCardSubTitle">
        {Content}
    </div>
);
const AboutInfoCardContent = ({ Content }) => (
    <div className="AboutInfoCardContent">
        {Content}

    </div>
);
export default AboutInfoCard