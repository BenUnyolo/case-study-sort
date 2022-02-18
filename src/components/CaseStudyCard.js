import PropTypes from "prop-types";

import placeholder from "../assets/placeholder-image.jpg";

function CaseStudyCard({ caseStudy }) {
  const { title, link, thumbnail, excerpt, categories } = caseStudy;
  return (
    <div className="case-study-card">
      {/* image */}
      <div className="case-study-card__image-container">
        <img
          src={thumbnail ? thumbnail : placeholder}
          className="case-study-card__image"
          alt={thumbnail ? `image for ${title}` : "placeholder image"}
        ></img>
      </div>
      <div className="case-study-card__info">
        {/* category */}
        <div className="case-study-card__category">
          {categories[0]["title"]}
        </div>
        {/* title */}
        <h3 className="case-study-card__title">{title}</h3>
        <p className="case-study-card__excerpt">{excerpt}</p>
        {link && (
          <div className="case-study-card__button-container">
            <div className="btn-1-loop-container">
              <a
                href={link}
                className="btn-1-loop-inner"
                target="_blank"
                rel="noreferrer"
                aria-label={`View case study (opens in new tab)`}
              >
                View Case Study{" "}
                <svg
                  width="22"
                  height="7"
                  viewBox="0 0 22 7"
                  className="case-study-card__button-arrow"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M0.5 3H0V4H0.5V3ZM21.5 3.5L16.5 0.613249V6.38675L21.5 3.5ZM0.5 4H17V3H0.5V4Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

CaseStudyCard.propTypes = {
  caseStudy: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    link: PropTypes.string,
    thumbnail: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    excerpt: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    categories: PropTypes.array,
  }),
};

export default CaseStudyCard;
