import { useState, useEffect } from "react";
import axios from "axios";

import CaseStudyCard from "../components/CaseStudyCard";

import "./Homepage.scss";

function Homepage() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [categories, setCategories] = useState([]);

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
    <div>
      {categories.map((item) => {
        return <span>{item.title}</span>;
      })}
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
