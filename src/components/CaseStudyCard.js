import PropTypes from "prop-types";

import "./CaseStudyCard.scss";

function CaseStudyCard({ caseStudy }) {
  const { id, title, link, thumbnail, excerpt, categories } = caseStudy;
  return <div>{title}</div>;
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
