function LinksComponent({ }) {

    return (
        <div className='LinksComponentWrapper'>
            <div className="LinksComponentInliner">
                <div className="LinksComponentColumn">
                    <div className="LinksComponentLinkwrapper">
                        <a className="AltHoverableLink" href="https://facttic.org.ar/" target="self">
                            FACTTIC
                        </a>
                    </div>
                    <div className="LinksComponentLinkwrapper">
                        <a className="AltHoverableLink" href="https://www.argentina.gob.ar/inaes" target="self">
                            INAES
                        </a>
                    </div>
                    <div className="LinksComponentLinkwrapper">
                        <a className="AltHoverableLink" href="https://www.ica.coop/" target="self">
                            International Coops 
                        </a>
                    </div>
                </div>
                <div className="LinksComponentColumn linkResideRight">
                    <div className="LinksComponentLinkwrapper">
                        <a className="AltHoverableLink" href="https://www.a11yproject.com/accessibility-statement/" target="self">
                            A11i statements
                        </a>
                    </div>
                </div>
                <div className="LinksComponentColumn mobileHide">
                </div>
                <div className="LinksComponentColumn mobileHide">
                </div>
            </div>
        </div>
    )

}

export default LinksComponent;