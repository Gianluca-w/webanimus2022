import Image from "next/image";
//Content formatting: Array with what content it will have inside so it can build itself from scratch, if "filler" exists, it will draw from a random image within the filler images.
//Order of the Content array does'nt matter as it will define it via the "GridPosition" property to  order the content.
// If left blank it won't display anything to improve performance, if there is at least 1 filler and everything else is blmk it will fill itself with filler images
const Grid = ({ Content }) => (
    <GridSectionParent>
        <GridContent
            Props={Content} />
    </GridSectionParent>
);
const GridSectionParent = ({
    children }) => {
    return <div className="GridParentWrapper">
        <div >
            {children}
        </div>
    </div>

}
const GridContent = ({
    Props }) => (
    <div className="GridSquared">

        {Props && Props.map((content) => {
            //  !content.filler &&  When filling system is online, create the logic to make it work properly
            return (
                <div className={`GridElement${content.GridPosition} GridElement ${content.Filler}`} key={content.GridPosition}>
                    <h1 className="GridTitle">
                        {content.GridTitle}
                    </h1>
                    <p className="GridContent">
                        {content.GridBody}
                    </p>
                    {content.Image && <div className="GridImageWrapperCenter">
                        <Image
                            src={`/assets/img/${content.Image}`}
                            width={"1px"}
                            height={"1px"}
                            layout="responsive"
                            alt=""
                        />
                    </div>
                    }
                </div>
            )
        })}
    </div>
);
export default Grid;