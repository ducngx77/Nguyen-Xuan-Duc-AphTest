import { useNavigate } from "react-router-dom";

function ProductCard({ prodName, thumb, sku, slug }) {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate(`/product/${slug}`);
  };
  
  return (
    <div className="col has-hover product">
      <div className="col-inner">
        <div className="box-product has-hover">
          <div className="box-image customer-box-image-product">
            <a href="#" className="_1gqs block image-zoom" onClick={handleNavigate}>
              <img src={thumb} className="_8wjh" />
            </a>
          </div>
          <div className="box-text box-text-products text-left">
            <div className="title-wrapper">
              <h4 className="product-title">
                <a href="#" className="product_link" onClick={handleNavigate}>
                  {prodName}
                </a>
              </h4>
              <p className="sku">
                SKU: <span>{sku}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
