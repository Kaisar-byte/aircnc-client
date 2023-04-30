import React, { useEffect, useState } from "react";
import Spinner from "../Components/Spinner/Spinner";
import SearchForm from "../Components/Form/SearchForm";
import ExpCard from "../Components/Card/ExpCard";
import HomeCard from "../Components/Card/HomeCard";
import { Link } from "react-router-dom";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allExpData, setAllExpData] = useState([]);

  useEffect(() => {
    fetch("expdata.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllExpData(data);
      });
  }, []);
  return (
    <div className="md:flex justify-center gap-10 px-6 md:px-10 lg:px-20">
      <div>
        <SearchForm />
      </div>
      <div className="flex-1">
        <div>
          <div className="flex justify-between px-4">
            <p className="text-xl font-bold">Homes</p>
            <Link to="/coming-soon">
              <p>see all</p>
            </Link>
          </div>
          <div className="container pb-8  pt-2 mx-auto">
            <div className="flex flex-wrap">
              {[...Array(3)].map((exp, i) => (
                <HomeCard key={i} exp={exp} />
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between px-4">
            <p className="text-xl font-bold">Experience</p>
            <Link to="/coming-soon">
              <p>see all</p>
            </Link>
          </div>
          <div className="container pb-8  pt-2 mx-auto">
            <div className="flex flex-wrap">
              {allExpData.slice(0, 4).map((exp, i) => (
                <ExpCard key={i} exp={exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
