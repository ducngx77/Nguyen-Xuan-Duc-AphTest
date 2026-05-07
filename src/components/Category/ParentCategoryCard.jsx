import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ParentCategoryCard({ categoryName, thumb, id }) {
  const handleScroll = (e) => {
    e.preventDefault();
    const target = document.getElementById(`child-${id}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="_3iwp">
      <div  className="_8ahh block has-hover" onClick={handleScroll}>
        {/* <a href={link}> */}
          <div className="_4rfh image-zoom">
            <img src={thumb} className="_5mgw" />
          </div>
          <div className="_1blc">
            <div className="_9wvo">{categoryName}</div>
            <div className="_4jqn">
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </div>
          </div>
        {/* </a> */}
      </div>
      
    </div>
  );
}

export default ParentCategoryCard;