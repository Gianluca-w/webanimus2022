import Image from "next/image";
const BigParagraph = ({
  title,
  body,
  LinkTitle,
  LinkHref,
  OptionalImage,
}) => (
  <BigParagraphParent>
    <BigParagraphTitle
      Content={title} />
    <BigParagraphSubTitle
      Content={body} />
    <BigParagraphImg
      ImgSrc={OptionalImage} />
    <BigParagraphLink
      Title={LinkTitle}
      Href={LinkHref} />
  </BigParagraphParent>
);
const BigParagraphTitle = ({
  Content }) => {
  return <div className="BigParagraphTitleWrapper">
    {Content}
  </div>;
};



const BigParagraphSubTitle = ({
  Content }) => {
  return <div className="BigParagraphBodyWrapper">
    {Content}
  </div>;
};
const BigParagraphLink = ({
  Title,
  Href }) => {
  return (
    <div className="BigParagraphLinkWrapper">
      <a href={Href}>
        {Title}
      </a>
    </div>
  );
};
const BigParagraphImg = ({
  ImgSrc }) => {
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
const BigParagraphParent = ({
  children }) => {
  return (
    <div className="BigParagraphWrapper">
      <div className="BigParagraphGrid">
        {children}
      </div>
    </div>
  );
};

export default BigParagraph;
