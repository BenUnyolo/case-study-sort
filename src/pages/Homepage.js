import { useState, useEffect } from "react";
import axios from "axios";

import CaseStudyCard from "../components/CaseStudyCard";

import "./Homepage.scss";

function Homepage() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchCaseStudies();
    fetchCategories();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/case-studies`
      );
      console.log(res);
      setCaseStudies(res.data["case-studies"]);
    } catch (err) {
      // TODO add error
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
      // TODO add error
      console.log(err.response.data);
    }
  };

  return (
    <div className="container">
      <h1>Work</h1>
      <div className="category-menu-container">
        <div className="category-menu">
          {/* all button */}
          <div className="category-menu__btn-container">
            <button
              className={`category-menu__btn ${
                selectedCategory === null ? "category-menu__btn--selected" : ""
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

      {caseStudies.map((item) => {
        return (
          <div key={item.id}>
            <CaseStudyCard caseStudy={item} />
          </div>
        );
      })}
    </div>
  );
}

export default Homepage;
