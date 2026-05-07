import axiosClient from "./interceptor";
import mockData from "./mockData";

const { mockCategories } = mockData;
const isMock = false;

export const categoryService = {
  getListCategory(lang) {
    if (isMock) {
      return Promise.resolve({ data: mockCategories.filter((cat) => cat.parentId === 0) });
    }

    return axiosClient.get("/Category/GetListCategory", {
      params: { lang },
    });
  },

  getCategoryByUrl(lang, url) {
    if (isMock) {
      console.log(mockCategories.find((cat) => cat.link === url));
      return Promise.resolve({ data: mockCategories.find((cat) => cat.link === url) });
    }

    return axiosClient.get("/Category/GetCategoryByUrl", {
      params: { lang, url },
    });
  },
};