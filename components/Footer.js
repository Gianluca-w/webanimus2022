import Link from 'next/link';
import Image from 'next/image';
import whitearrowsvg from '../public/assets/icons/arrow.svg'
const Footer = ({ FooterTitleTxt, FooterLinkText, FooterMailText, FooterAdressText }) => (

    <div className="FooterWrapper">
        <div className="FooterGrid">
            <div className="FooterTitleWrapper">
                <div className="FooterTitle">
                    <strong >
                        {FooterTitleTxt}
                    </strong>
                </div>
                <div className="FooterLink">
                    <Link className='' href="/contact">
                        <div className='LinkWrapper AltHoverableLink'>
                            {FooterLinkText}
                            <div className='FooterArrowWrapper'>
                                <Image layout='responsive' width={'18px'} height={'18px'} src={whitearrowsvg.src} alt='->' />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="ContactWrapper">
                <div className="FooterContactGrid">
                    <div className='ContactFlexWrapper'>
                        <div className="ContactMail">
                            {FooterMailText}
                        </div>
                        <div className="ContactDirection">
                            {FooterAdressText}
                        </div>
                        <div className="ContactSocials">
                            <strong>
                                <a href="https://mobile.twitter.com/animuscoop" target="self">TW </a>
                                <a href="https://www.instagram.com/animuscoop/" target="self">IG</a>
                                <a href="https://animus-coop.medium.com/" target="self">Medium</a>
                                <a href="https://www.linkedin.com/company/animus-argentina" target="self">LinkedIn</a>
                                <a href="https://github.com/animus-coop/" target="self">GIT </a>
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default Footer;