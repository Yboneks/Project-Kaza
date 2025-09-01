
export function Banner({ image, text }) {
  return (
    <div className="bannerContainer">
      <img src={image} alt="bannière" className="bannerImage" />
      {text && (
        <p className="bannerText">
          {text}
        </p>
      )}
    </div>
  );
}