import Image from "next/image";
const BigParagraph = ({
  title,
  body,
  LinkTitle,
  LinkHref,
  multipleImages,
  OptionalImage,
}) => (
  <BigParagraphParent>
    <BigParagraphTitle Content={title} />
    <BigParagraphSubTitle Content={body} />
    {/*<BigParagraphTagsContent={Tags} />*/}
    {/*<BigParagraphImg ImgSrc={OptionalImage}/>*/ }
    <BigParagraphImgSet ImagesSrc={multipleImages} />
    <BigParagraphLink Title={LinkTitle} Href={LinkHref} />
  </BigParagraphParent>
);
const BigParagraphTitle = ({ Content }) => {
  return <div className="BigParagraphTitleWrapper">{Content}</div>;
};

const BigParagraphSubTitle = ({ Content }) => {
  return <div className="BigParagraphBodyWrapper">{Content}</div>;
};
const BigParagraphLink = ({ Title, Href }) => {
  return (
    <div className="BigParagraphLinkWrapper">
      <a href={Href}>{Title}</a>
    </div>
  );
};
const BigParagraphTags = ({ Content }) => {
  return (
    <div className="BigParagraphTagsWrapper">
      {Content &&
        Content.map((Tag) => (
          <div className="Tag" key={Tag.TagName}>
            {Tag.TagName}
          </div>
        ))}
    </div>
  );
};
const BigParagraphImg = ({ ImgSrc }) => {
  return (
    <div>
      {ImgSrc && (
        <div className="BigParagraphImgWrapper">
          <Image
            src={`/assets/img/${ImgSrc}`}
            width={"10px"}
            height={"2px"}
            layout="responsive"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

const BigParagraphImgSet = ({ ImagesSrc }) => {
  return (
    <div>
      {ImagesSrc && (
        <div className="BigParagraphImgWrapper">
          <div className="Rower">
            <div className="inlineRower">
              <Image
                src={`/assets/img/javascript.jpg`}
                width={"15px"}
                height={"8px"}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="inlineRower">
              <Image
                src={`/assets/img/elixir.png`}
                width={"10px"}
                height={"4px"}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="inlineRower">
              <Image
                src={`/assets/img/python.png`}
                width={"15px"}
                height={"8px"}
                layout="responsive"
                alt=""
              />
            </div>
          </div>
          <div className="Rower">
            <div className="inlineRower rustClause">
              <Image
                src={`/assets/img/rust.png`}
                width={"15px"}
                height={"8px"}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="inlineRower">
              <Image
                src={`/assets/img/php.png`}
                width={"15px"}
                height={"8px"}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="inlineRower">
              <Image
                src={`/assets/img/nodejs.png`}
                width={"15px"}
                height={"8px"}
                layout="responsive"
                alt=""
              />
            </div>
          </div>
          <div className="Rower">
            <div className="inlineRower">
              <Image
                src={`/assets/img/react.jpg`}
                width={"15px"}
                height={"8px"}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="inlineRower">
              <Image
                src={`/assets/img/reactnative.png`}
                width={"15px"}
                height={"8px"}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="inlineRower">
              <Image
                src={`/assets/img/nextjs.webp`}
                width={"15px"}
                height={"8px"}
                layout="responsive"
                alt=""
              />
            </div>
          </div>
          <div className="Rower">
            <div className="inlineRower">
              <Image
                src={`/assets/img/postgre.jpg`}
                width={"15px"}
                height={"8px"}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="inlineRower">
              <Image
                src={`/assets/img/mysql.png`}
                width={"15px"}
                height={"8px"}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="inlineRower">
              <Image
                src={`/assets/img/mongodb.png`}
                width={"15px"}
                height={"8px"}
                layout="responsive"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const BigParagraphParent = ({ children }) => {
  return (
    <div className="BigParagraphWrapper">
      <div className="BigParagraphGrid">{children}</div>
    </div>
  );
};

export default BigParagraph;
