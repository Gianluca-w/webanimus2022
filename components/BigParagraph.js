import Image from "next/image";
const BigParagraph = ({
  title,
  body,
  Tags,
  LinkTitle,
  LinkHref,
  OptionalImage,
}) => (
  <BigParagraphParent>
    <BigParagraphTitle Content={title}></BigParagraphTitle>
    <BigParagraphSubTitle Content={body}></BigParagraphSubTitle>
    <BigParagraphImg ImgSrc={OptionalImage}></BigParagraphImg>
    <BigParagraphTags Content={Tags} />
    <BigParagraphLink Title={LinkTitle} Href={LinkHref}></BigParagraphLink>
  </BigParagraphParent>
);
const BigParagraphTitle = ({ Content }) => {
  return <div className="BigParagraphTitleWrapper">{Content}</div>;
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
const BigParagraphImg = ({ ImgSrc }) => {
  return (
    <div>
      {ImgSrc && (
        <div className="BigParagraphImgWrapper">
          <Image
            src={`/../public/assets/img/${ImgSrc}`}
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
const BigParagraphParent = ({ children }) => {
  return (
    <div className="BigParagraphWrapper">
      <div className="BigParagraphGrid">{children}</div>
    </div>
  );
};

export default BigParagraph;
