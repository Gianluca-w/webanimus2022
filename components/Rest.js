const Rest = ({ TitleText, Body}) => (
    <div className="restWrapper">
        <div className="restGrid">
            <div className="restTittle">
                {TitleText}
            </div>
            <div className="restContent LightH2">
                {Body}
            </div>

        </div>
    </div>
);
export default Rest