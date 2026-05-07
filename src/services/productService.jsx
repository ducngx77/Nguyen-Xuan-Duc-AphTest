import axiosClient from "./interceptor";
import mockData from "./mockData";

const { mockCategories, mockProducts } = mockData;
const isMock = true;
const pageSize = 6;

export const productService = {
  getProductByCategory(lang, page, ids) {
    console.log(ids);
    if (isMock) {
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      return Promise.resolve({
        data: {
          items: mockProducts.slice(startIndex, endIndex),
          totalCount: mockProducts.length,
        },
      });
    }

    return axiosClient.get("/Product/GetProductByCategory", {
      params: { lang, page, ids },
    });
  },
  getProductByUrl(lang, url) {
    if (isMock) {
      return Promise.resolve({
        data: mockProducts.find((prod) => prod.slug === url),
      });
    }

    return axiosClient.get("/Product/GetProductByUrl", {
      params: { lang, url },
    });
  },
  getRelatedProducts(lang, id) {
    if (isMock) {
      return Promise.resolve({
        data: mockProducts.filter((prod) => prod.id !== id).slice(0, 4),
      });
    }

    return axiosClient.get("/Product/GetRelatedProducts", {
      params: { lang, id },
    });
  },
  
  searchProducts(lang, query) {
    if (isMock) {
      return Promise.resolve({
        data: {
          products: mockProducts.filter((prod) =>
            prod.prodName.toLowerCase().includes(query.toLowerCase()),
          ),
          categories: mockCategories.slice(0, 3),
          filters: mockCategories
            .slice(0, 3)
            .filter((cat) => cat.filterList && cat.filterList.length > 0)
            .flatMap((cat) => cat.filterList || [])
            .reduce((acc, filter) => {
              if (!acc[filter.id]) {
                acc[filter.id] = filter;
              }
              return acc;
            }, {}),
        },
      });
    }

    return axiosClient.get("/Product/SearchProducts", {
      params: { lang, query },
    });
  },

  filterSearchProduct(lang, textSearch, categories, page) {
    console.log(categories);
    if (isMock) {
      return Promise.resolve({
        data: {
          products: mockProducts.filter((prod) =>
            prod.prodName.toLowerCase().includes(textSearch?.toLowerCase())
          ).slice((page - 1) * pageSize, page * pageSize),
        },
      });
    }

    return axiosClient.get("/Product/FilterSearchProduct", {
      params: { lang, textSearch, categories, page },
    });
  },
};
