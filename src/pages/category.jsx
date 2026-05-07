import { SearchOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Breadcrumb,
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Pagination,
  Row,
  Slider,
} from "antd";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { categoryService } from "../services/categoryService";
import { productService } from "../services/productService";
import ProductCard from "../components/product/ProductCard";
import { useSelector } from "react-redux";

function Category() {
  // Bỏ cmt nếu bạn sử dụng phần này
  // const { productCategory } = useSelector((state) => state.category);

  const [form] = Form.useForm();

  // const [filterList, setFilterList] = useState([]);
  const [filterData, setFilterData] = useState();
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);

  const onValuesChange = (changedValues, allValues) => {
    const hasValue = Object.values(allValues).some((value) => value);
    setFilterData(allValues); 
    setSubmitDisabled(!hasValue);
  };

  /*  Hàm nối children và filterList được trả về từ API GetCategoryByUrl phục vụ cho chức năng lọc.
      Hãy bỏ comment nếu bạn sử dụng.
  */
  // const mergeFilterLists = (tree) => {
  //   // Lấy FilterList của node hiện tại
  //   let mergedList = [...(tree.filterList || [])];

  //   // Duyệt qua từng Children và hợp nhất FilterList
  //   if (tree.children && tree.children.length > 0) {
  //     tree.children.forEach((child) => {
  //       mergedList = mergedList.concat(mergeFilterLists(child));
  //     });
  //   }

  //   return mergedList;
  // };

  const onFilter = async (values) => {
    const hasValue = Object.values(values).some((value) => value);
    if (!hasValue) {
      return;
    }

    let filters;
    Object.keys(values).forEach((key) => {
      if (
        values[key] &&
        values[key].length > 0 &&
        key !== "categories" &&
        key !== "textSearch"
      ) {
        filters = { ...filters, [key]: values[key] };
      }
    });

    /* VIẾT CODE CỦA BẠN VÀO ĐÂY */
    fetchProductsByCategory();
  };

  const [categoryUrlData, setCategoryUrlData] = useState();
  const [products, setProducts] = useState();
  const [page, setPage] = useState(1);
  const [itemPerPage] = useState(6);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedChildCategory, setSelectedChildCategory] = useState();
  const { url } = useParams();

  const { lang } = useSelector((state) => state.lang)
  async function fetchListCategoryByUrl() {
    try { 
      const categoryData = await categoryService.getCategoryByUrl(lang, url);
      setCategoryUrlData(categoryData.data);
      if (!selectedChildCategory && categoryData && categoryData.data.children && categoryData.data.children.length > 0) {
        setSelectedChildCategory(categoryData.data.children[0]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function fetchProductsByCategory() {
    try {
      if (!categoryUrlData) return;
      const productsData = await productService.getProductByCategory(lang, page, filterData?.categories);
      setProducts(productsData.data.items);
      setTotalPages(Math.ceil(productsData.data.totalCount / itemPerPage));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    fetchListCategoryByUrl();
  }, []);

  useEffect(() => {
    fetchProductsByCategory();
  }, [categoryUrlData, page, itemPerPage]);

  const clearFilters = () => {
    form.resetFields();
    setFilterData();
    setSubmitDisabled(true);
  };

  return (
    <div id="content" className="content-area">
      <section className="heath-lek section">
        <div className="section-bg fill">
          <div className="video-overlay no-click fill"></div>
          <video
            className="video-bg fill"
            preload="true"
            playsInline
            autoPlay
            muted
            loop
          >
            <source
              src="images/website/video_category_product.mp4"
              type="video/mp4"
            />
          </video>
          <div className="section-bg-overlay absolute fill"></div>
        </div>
        <div className="section-content relative">
          <div className="_4csl">
            <Row gutter={30}>
              <Col span={12} className="_9trw RemovePaddingBottom">
                <div className="_4yvp">
                  <Breadcrumb
                    items={[
                      {
                        title: (
                          <a href="/" className="item-bread">
                            Home
                          </a>
                        ),
                      },
                      {
                        title: (
                          <Link to="/all-product" className="item-bread">
                            All Products
                          </Link>
                        ),
                      },
                      {
                        title: <span className="active-bread">{categoryUrlData?.categoryName}</span>,
                      },
                    ]}
                    id="breadcrumb"
                  />

                  <h2 className="_5xfq _1kly">{categoryUrlData?.categoryName}</h2>
                  <div className="_7vyg">
                    <p>
                      {categoryUrlData?.description}
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <section className="penury-gym section">
        <div className="section-content relative">
          <div className="category-page-row">
            <Row gutter={24} className="product_sidebar_cate">
              <Col span={6}>
                <div className="product_sidebar_cate">
                  <Form
                    layout="vertical"
                    form={form}
                    onValuesChange={onValuesChange}
                    onFinish={onFilter}
                  >
                    <div className="_4get">
                      <div className="_4yee">
                        <div className="_5tyu">Filters</div>
                        <div className="_2wzq">
                          <Button
                            type="link"
                            size="small"
                            id="clear-filter"
                            onClick={clearFilters}
                            disabled={!filterData}
                          >
                            Clear Filters
                          </Button>
                        </div>
                      </div>
                      <Form.Item name="textSearch" className="_7pia">
                        <Input
                          placeholder="Search Products"
                          className="_8jji"
                          suffix={<SearchOutlined />}
                        />
                      </Form.Item>
                    </div>

                    <Form.Item
                      label="Categories"
                      name="categories"
                      className="widget_product_categories"
                    >
                      <Checkbox.Group className="form-group">
                        {categoryUrlData?.children && categoryUrlData.children.map((child) => (
                          <Checkbox key={child.id} value={child.id}>{child.categoryName}</Checkbox>
                        ))}
                        {/* <Checkbox value={1}>Consumer Packaging</Checkbox>
                        <Checkbox value={2}>Industrial Packaging</Checkbox> */}
                      </Checkbox.Group>
                    </Form.Item>
                    {categoryUrlData?.filterList &&
                        categoryUrlData?.filterList.map((filter) => (
                          <Form.Item
                            key={filter.id}
                            label={filter.filterName}
                            name={["filters", filter.id]}
                            className="widget_product_categories"
                          >
                            {filter.type === "checkbox" && (
                              <Checkbox.Group className="form-group">
                                {filter.listOption.split(",").map((option) => (
                                  <Checkbox key={option} value={option}>
                                    {option}
                                  </Checkbox>
                                ))}
                              </Checkbox.Group>
                            )}
                            {filter.type === "range" && (
                              <Slider
                                min={parseInt(filter.listOption.split(",")[0])}
                                max={parseInt(filter.listOption.split(",")[1])}
                                range
                              />
                            )}
                          </Form.Item>
                        ))}
                    {/* <Form.Item
                      label="Type of"
                      className="widget_product_categories"
                    >
                      <Checkbox.Group className="form-group">
                        {/* {categoryUrlData?.filterList && categoryUrlData.filterList.map((filter, index) => (
                          <Checkbox key={index} value={filter.name}>
                            {filter}
                          </Checkbox>
                        ))} */}
                        {/* <Checkbox value={3}>Food Storage</Checkbox>
                        <Checkbox value={4}>Trash Bags</Checkbox>
                        <Checkbox value={5}>
                          Knife – Case – Storage Box
                        </Checkbox>
                        <Checkbox value={6}>Containers</Checkbox>
                        <Checkbox value={7}>Gloves</Checkbox> */}
                      {/* </Checkbox.Group>
                    </Form.Item> */}

                    {/* <Form.Item
                      label="Width (cm)"
                      className="widget_product_categories"
                    >
                      <Slider min={10} max={60} range />
                    </Form.Item>

                    <Form.Item
                      label="Length (cm)"
                      className="widget_product_categories"
                    >
                      <Slider min={20} max={120} range />
                    </Form.Item>

                    <Form.Item
                      label="Recycle"
                      className="widget_product_categories"
                    >
                      <Checkbox.Group className="form-group">
                        <Checkbox value="Yes">Yes</Checkbox>
                        <Checkbox value="No">No</Checkbox>
                      </Checkbox.Group>
                    </Form.Item> */}

                    {!isSubmitDisabled && (
                      <Button type="link" htmlType="submit" className="filter">
                        Filter
                      </Button>
                    )}
                  </Form>
                </div>
              </Col>

              <Col span={18} className="product_cate">
                <div className="_7mkr">
                  <h2 className="_3rac">{selectedChildCategory?.categoryName}</h2>
                </div>

                <Row className="products" gutter={[18, 18]}>
                  {products && products.map((product) => (
                    <Col key={product.id} span={8}>
                      <ProductCard
                        prodName={product.prodName}
                        thumb={product.thumb}
                        sku={product.sku}
                        slug={product.slug}
                      />
                    </Col>
                  ))}

                  {/* <div className="col has-hover product">
                    <div className="col-inner">
                      <div className="box-product has-hover">
                        <div className="box-image customer-box-image-product">
                          <a href="#" className="_1gqs block image-zoom">
                            <img
                              src="/images/website/product-list_1.png"
                              className="_8wjh"
                            />
                          </a>
                        </div>
                        <div className="box-text box-text-products text-left">
                          <div className="title-wrapper">
                            <h4 className="product-title">
                              <a href="#" className="product_link">
                                Food Wrap
                              </a>
                            </h4>
                            <p className="sku">
                              SKU: <span>036897488221-2</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>                  
                  <div className="col has-hover product">
                    <div className="col-inner">
                      <div className="box-product has-hover">
                        <div className="box-image customer-box-image-product">
                          <a href="#" className="_1gqs block image-zoom">
                            <img
                              src="/images/website/product-list_2.png"
                              className="_8wjh"
                            />
                          </a>
                        </div>
                        <div className="box-text box-text-products text-left">
                          <div className="title-wrapper">
                            <h4 className="product-title">
                              <a href="#" className="product_link">
                                Overlock Jumbo bag
                              </a>
                            </h4>
                            <p className="sku">
                              SKU: <span>036897488221-2</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col has-hover product">
                    <div className="col-inner">
                      <div className="box-product has-hover">
                        <div className="box-image customer-box-image-product">
                          <a href="#" className="_1gqs block image-zoom">
                            <img
                              src="/images/website/product-list_1.png"
                              className="_8wjh"
                            />
                          </a>
                        </div>
                        <div className="box-text box-text-products text-left">
                          <div className="title-wrapper">
                            <h4 className="product-title">
                              <a href="#" className="product_link">
                                Food Wrap
                              </a>
                            </h4>
                            <p className="sku">
                              SKU: <span>036897488221-2</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col has-hover product">
                    <div className="col-inner">
                      <div className="box-product has-hover">
                        <div className="box-image customer-box-image-product">
                          <a href="#" className="_1gqs block image-zoom">
                            <img
                              src="/images/website/product-list_2.png"
                              className="_8wjh"
                            />
                          </a>
                        </div>
                        <div className="box-text box-text-products text-left">
                          <div className="title-wrapper">
                            <h4 className="product-title">
                              <a href="#" className="product_link">
                                Overlock Jumbo bag
                              </a>
                            </h4>
                            <p className="sku">
                              SKU: <span>036897488221-2</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col has-hover product">
                    <div className="col-inner">
                      <div className="box-product has-hover">
                        <div className="box-image customer-box-image-product">
                          <a href="#" className="_1gqs block image-zoom">
                            <img
                              src="/images/website/product-list_2.png"
                              className="_8wjh"
                            />
                          </a>
                        </div>
                        <div className="box-text box-text-products text-left">
                          <div className="title-wrapper">
                            <h4 className="product-title">
                              <a href="#" className="product_link">
                                Overlock Jumbo bag
                              </a>
                            </h4>
                            <p className="sku">
                              SKU: <span>036897488221-2</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col has-hover product">
                    <div className="col-inner">
                      <div className="box-product has-hover">
                        <div className="box-image customer-box-image-product">
                          <a href="#" className="_1gqs block image-zoom">
                            <img
                              src="/images/website/product-list_1.png"
                              className="_8wjh"
                            />
                          </a>
                        </div>
                        <div className="box-text box-text-products text-left">
                          <div className="title-wrapper">
                            <h4 className="product-title">
                              <a href="#" className="product_link">
                                Food Wrap
                              </a>
                            </h4>
                            <p className="sku">
                              SKU: <span>036897488221-2</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col has-hover product">
                    <div className="col-inner">
                      <div className="box-product has-hover">
                        <div className="box-image customer-box-image-product">
                          <a href="#" className="_1gqs block image-zoom">
                            <img
                              src="/images/website/product-list_2.png"
                              className="_8wjh"
                            />
                          </a>
                        </div>
                        <div className="box-text box-text-products text-left">
                          <div className="title-wrapper">
                            <h4 className="product-title">
                              <a href="#" className="product_link">
                                Overlock Jumbo bag
                              </a>
                            </h4>
                            <p className="sku">
                              SKU: <span>036897488221-2</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col has-hover product">
                    <div className="col-inner">
                      <div className="box-product has-hover">
                        <div className="box-image customer-box-image-product">
                          <a href="#" className="_1gqs block image-zoom">
                            <img
                              src="/images/website/product-list_1.png"
                              className="_8wjh"
                            />
                          </a>
                        </div>
                        <div className="box-text box-text-products text-left">
                          <div className="title-wrapper">
                            <h4 className="product-title">
                              <a href="#" className="product_link">
                                Food Wrap
                              </a>
                            </h4>
                            <p className="sku">
                              SKU: <span>036897488221-2</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col has-hover product">
                    <div className="col-inner">
                      <div className="box-product has-hover">
                        <div className="box-image customer-box-image-product">
                          <a href="#" className="_1gqs block image-zoom">
                            <img
                              src="/images/website/product-list_2.png"
                              className="_8wjh"
                            />
                          </a>
                        </div>
                        <div className="box-text box-text-products text-left">
                          <div className="title-wrapper">
                            <h4 className="product-title">
                              <a href="#" className="product_link">
                                Overlock Jumbo bag
                              </a>
                            </h4>
                            <p className="sku">
                              SKU: <span>036897488221-2</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </Row>

                <Pagination
                  defaultCurrent={page}
                  onChange={(page) => setPage(page)}
                  total={totalPages * itemPerPage}
                  defaultPageSize={itemPerPage}
                  className="pagination-cntt"
                />
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className="lichen-gel section">
        <div className="section-content relative">
          <div className="_2gia">
            <Row gutter={60}>
              <Col span={12}>
                <div className="text-box_image">
                  <p className="_0kce">Our catalog</p>
                  <h3 className="_8mak">Explore Our Catalogs</h3>
                  <p className="_8fet">
                    Through a journey of establishment and continuous
                    development, An Phat Holdings has emerged as the leading
                    high-tech, environmentally friendly plastics group in
                    Southeast Asia. With over 20 years of experience, we are
                    dedicated to delivering high-quality, sustainable products
                    across a wide range of industries. As the region’s foremost
                    innovator in eco-friendly plastic solutions, we have built a
                    strong reputation and successfully expanded our presence
                    into key global markets, including Europe, the Americas, the
                    UAE, Japan, Korea, Singapore, Taiwan, and the Philippines.
                    Driven by ongoing research, innovation, and creativity, we
                    are committed to creating enduring value for our customers,
                    investors, and employees.
                  </p>
                  <div className="_3qdw">
                    <a className="button button-outline-green" href="/catalog">
                      <span>Our Catalogs</span>
                      <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div className="image-box_image">
                  <img src="/images/website/explore.png" className="_6ikc" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Category;
