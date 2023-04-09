import "./ImageWrap.scss";

const ImageWrap = ({ children }) => {
  return (
    <div className="ImageWrap">
      <div className="content">{children}</div>
    </div>
  );
};

export default ImageWrap;
