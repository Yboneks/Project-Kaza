
export function Rating({ rating }) {
  const totalStars = 5;
  const ratingValue = parseInt(rating, 10);
  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, i) =>
        i < ratingValue ? (
          <i key={i} className="fa fa-star" style={{ color: "#ff6060" }}></i>
        ) : (
          <i key={i} className="fa fa-star" style={{ color: "#e3e3e3" }}></i>
        )
      )}
    </div>
  );
}