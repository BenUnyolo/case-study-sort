import { useState, useEffect } from "react";
import axios from "axios";

import CaseStudyCard from "../components/CaseStudyCard";

// import "./Homepage.scss";

function Homepage() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [caseStudiesError, setCaseStudiesError] = useState(false);
  const [categories, setCategories] = useState([]);
  const [sortedCaseStudies, setSortedCaseStudies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchCaseStudies();
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setSortedCaseStudies(
        caseStudies.filter((item) => {
          return item.categories[0]["slug"] === selectedCategory;
        })
      );
    } else {
      setSortedCaseStudies(caseStudies);
    }
  }, [selectedCategory, caseStudies, categories]);

  const fetchCaseStudies = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/case-studies`
      );
      setCaseStudies(res.data["case-studies"]);
    } catch (err) {
      setCaseStudiesError(true);
      console.log(err.response.data);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/categories`
      );
      setCategories(res.data["categories"]);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="homepage-container">
      <div className="container">
        <h1 className="homepage-title">Work</h1>
        {/* CATEGORIES */}
        <div className="category-menu-container">
          <div className="category-menu" aria-label="case study categories">
            {/* all button */}
            <div className="category-menu__btn-container">
              <button
                className={`category-menu__btn ${
                  selectedCategory === null
                    ? "category-menu__btn--selected"
                    : ""
                }`}
                aria-label={`show all case studies`}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </button>
            </div>
            {/* category buttons */}
            {categories.map((item) => {
              const { title, slug } = item;
              return (
                <div key={slug} className="category-menu__btn-container">
                  <button
                    className={`category-menu__btn ${
                      slug === selectedCategory
                        ? "category-menu__btn--selected"
                        : ""
                    }`}
                    aria-label={`show only ${title} case studies`}
                    onClick={() => setSelectedCategory(slug)}
                  >
                    {title}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* CASE STUDIES */}
        <div className="case-studies-container">
          {sortedCaseStudies.length > 0 && (
            <div className="case-studies">
              {sortedCaseStudies.map((item) => {
                return (
                  <div key={item.id} className="case-studies__card">
                    <CaseStudyCard caseStudy={item} />
                  </div>
                );
              })}
            </div>
          )}
          {sortedCaseStudies.length === 0 && caseStudiesError ? (
            <h2>
              Sorry, there was an error getting the case studies! Please try
              refreshing the page in a few minutes.
            </h2>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
