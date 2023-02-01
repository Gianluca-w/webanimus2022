import Image from 'next/image';
import asterisc from '../public/assets/icons/asterisc.svg'

const PhraseAndItems = ({ 
    Content }) => (
    <div className="PhraseWrapper">
        <div className="PraseGrid">
            <div className="PhraseTitle">
                <h1>
                    {Content.TitleText}
                </h1>
            </div>
            <div className="PraseContentWrapper">
                <div className="PhraseContentsGrid">
                    {Content.GridBody && Content.GridBody.map((contents) => {
                        return (
                            <div className={`PhraseContents PhraseContents${contents.GridPosition}`} key={contents.GridPosition}>
                                <div className='AsteriscWrapper'>
                                    <Image
                                        src={asterisc.src}
                                        height='24px'
                                        width='24px'
                                        alt='*'
                                    />
                                </div>
                                <div className='phraseContentTextWrapper'>
                                    {contents.body}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
);
export default PhraseAndItems