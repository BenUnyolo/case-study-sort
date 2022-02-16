import PropTypes from "prop-types";

import "./CaseStudyCard.scss";

function CaseStudyCard({ caseStudy }) {
  const { title, link, thumbnail, excerpt, categories } = caseStudy;
  return (
    <div className="case-study-card">
      {/* image */}
      {thumbnail && (
        <div className="case-study-card__image-container">
          <img src={thumbnail} className="case-study-card__image" alt=""></img>
        </div>
      )}
      <div
        className={`case-study-card__info ${
          !thumbnail ? "case-study-card__info--no-img" : ""
        }`}
      >
        {/* category */}
        <div className="case-study-card__category">
          {categories[0]["title"]}
        </div>
        {/* title */}
        <h2 className="case-study-card__title">{title}</h2>
        <p className="case-study-card__excerpt">{excerpt}</p>
        {link && (
          <div className="case-study-card__button-container">
            <a
              href={link}
              className="btn-1"
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
              >
                <path
                  d="M0.5 3H0V4H0.5V3ZM21.5 3.5L16.5 0.613249V6.38675L21.5 3.5ZM0.5 4H17V3H0.5V4Z"
                  fill="#EEECEC"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

CaseStudyCard.propTypes = {
  caseStudy: {
    id: PropTypes.number,
    title: PropTypes.string,
    link: PropTypes.string,
    thumbnail: PropTypes.string,
    excerpt: PropTypes.string,
    categories: PropTypes.array,
  },
};

export default CaseStudyCard;
