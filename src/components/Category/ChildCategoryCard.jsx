import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";



function ChildCategoryCard({ categoryName, thumb, link }) {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate(`/category/${link.trimStart("/")}`);
  };

  return (
    <div className="_5tcj">
      <div className="_6npx">
        <div className="_2jjl">
          <div className="_8ghs">
            <a href={link} className="block" onClick={handleNavigate}>
              <img src={thumb} className="_9rtu" />
            </a>
          </div>
          <div className="_0cac">
            <div className="_9not">
              <div className="_2pzh">
                <a href={link} onClick={handleNavigate}>
                  {categoryName}
                </a>
              </div>
              <div className="_8ynm textLine-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
            <div className="_3qdw">
              <a href={link} className="button button-outline-green" onClick={handleNavigate}>
                <span>View products &nbsp;</span>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChildCategoryCard;
