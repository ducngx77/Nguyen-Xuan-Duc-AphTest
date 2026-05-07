export const mockData = {
  mockCategories: [
    {
      id: 1,
      thumb: "/images/website/market_1.png",
      categoryName: "Sustainable Products",
      link: "sustainable-products",
      shortDesc: "",
      description: "",
      parentId: 0,
      children: [
        {
          id: 11,
          thumb: "/images/website/vertical_1.png",
          categoryName: "Compostable Products",
          link: "compostable-products",
          shortDesc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          description: "Detailed description for Compostable Products.",
          parentId: 1,
          children: [],
          filterList: [
            {
                id: 1,
                categoryId: 11,
                filterName: "Color",
                type: "checkbox",
                listOption: "Red,Blue,Green"
                    
            },
            {
                id: 2,
                categoryId: 11,
                filterName: "Size",
                type: "checkbox",
                listOption: "Small,Medium,Large"
                    
            },
            {
                id: 3,
                categoryId: 11,
                filterName: "Width",
                type: "range",
                listOption: "0, 100"
                    
            },
          ],
        },
        {
          id: 12,
          thumb: "/images/website/vertical_2.png",
          categoryName: "Compostable Products",
          link: "compostable-products-2",
          shortDesc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          description: "Detailed description for Compostable Products.",
          parentId: 1,
          children: [],
          filterList: [
            {
                id: 1,
                categoryId: 11,
                filterName: "Color",
                type: "checkbox",
                listOption: "Red,Blue,Green"
                    
            },
            {
                id: 2,
                categoryId: 11,
                filterName: "Size",
                type: "checkbox",
                listOption: "Small,Medium,Large"
                    
            },
            {
                id: 3,
                categoryId: 11,
                filterName: "Width",
                type: "range",
                listOption: "0, 100"
                    
            },
          ],
        },
      ],
      filterList: [
        {
            id: 1,
            categoryId: 1,
            filterName: "Color",
            type: "checkbox",
            listOption: "Red,Blue,Green"
                
        },
        {
            id: 2,
            categoryId: 1,
            filterName: "Size",
            type: "checkbox",
            listOption: "Small,Medium,Large",
                
        },
        {
            id: 3,
            categoryId: 1,
            filterName: "Width",
            type: "range",
            listOption: "0, 100",
                
        },
        {
            id: 4,
            categoryId: 1,
            filterName: "Height",
            type: "range",
            listOption: "0, 100",    
        },
      ],
    },
    {
      id: 11,
      thumb: "/images/website/vertical_1.png",
      categoryName: "Compostable Products",
      link: "compostable-products2",
      shortDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description: "Detailed description for Compostable Products.",
      parentId: 1,
      children: [],
      filterList: [
        {
            id: 1,
            categoryId: 11,
            filterName: "Color",
            type: "checkbox",
            listOption: "Red,Blue,Green"
                
        },
        {
            id: 2,
            categoryId: 11,
            filterName: "Size",
            type: "checkbox",
            listOption: "Small,Medium,Large",
                
        },
        {
            id: 3,
            categoryId: 11,
            filterName: "Width",
            type: "range",
            listOption: "0, 100",
                
        },
        {
            id: 4,
            categoryId: 11,
            filterName: "Height",
            type: "range",
            listOption: "0, 100",    
        },
      ],
    },
    {
      id: 12,
      thumb: "/images/website/vertical_2.png",
      categoryName: "Compostable Products",
      link: "compostable-products-22",
      shortDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description: "Detailed description for Compostable Products.",
      parentId: 1,
      children: [],
      filterList: [
        {
            id: 1,
            categoryId: 12,
            filterName: "Color",
            type: "checkbox",
            listOption: "Red,Blue,Green"
                
        },
        {
            id: 2,
            categoryId: 12,
            filterName: "Size",
            type: "checkbox",
            listOption: "Small,Medium,Large",
                
        },
        {
            id: 3,
            categoryId: 12,
            filterName: "Width",
            type: "range",
            listOption: "0, 100",
                
        },
        {
            id: 4,
            categoryId: 12,
            filterName: "Height",
            type: "range",
            listOption: "0, 100",    
        },
      ],
    },
    {
      id: 2,
      thumb: "/images/website/market_2.png",
      categoryName: "Consumer Goods",
      link: "consumer-goods",
      shortDesc: "",
      description: "",
      parentId: 0,
      children: [
        {
          id: 21,
          thumb: "/images/website/consummer_1.png",
          categoryName: "Cutlery/Straws",
          link: "cutlery-straws",
          shortDesc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          description: "Detailed description for Cutlery/Straws.",
          parentId: 2,
          children: [],
          filterList: [
            {
                id: 1,
                categoryId: 21,
                filterName: "Color",
                type: "checkbox",
                listOption: "Red,Blue,Green"
            },
            {
                id: 2,
                categoryId: 21,
                filterName: "Size",
                type: "checkbox",
                listOption: "Small,Medium,Large"
            },
            {
                id: 3,
                categoryId: 21,
                filterName: "Width",
                type: "range",
                listOption: "0, 100"
            },
            {
                id: 4,
                categoryId: 21,
                filterName: "Height",
                type: "range",
                listOption: "0, 100"
            }
          ],
        },
        {
          id: 22,
          thumb: "/images/website/consummer_2.png",
          categoryName: "Cups/Lids",
          link: "cups-lids",
          shortDesc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          description: "Detailed description for Cups/Lids.",
          parentId: 2,
          children: [],
          filterList: [
            {
                id: 1,
                categoryId: 22,
                filterName: "Color",
                type: "checkbox",
                listOption: "Red,Blue,Green"
            },
            {
                id: 2,
                categoryId: 22,
                filterName: "Size",
                type: "checkbox",
                listOption: "Small,Medium,Large"
            },
            {
                id: 3,
                categoryId: 22,
                filterName: "Width",
                type: "range",
                listOption: "0, 100"
            },
            {
                id: 4,
                categoryId: 22,
                filterName: "Height",
                type: "range",
                listOption: "0, 100"
            }
          ],
        },
        {
          id: 23,
          thumb: "/images/website/consummer_3.png",
          categoryName: "Food Containers",
          link: "food-containers",
          shortDesc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          description: "Detailed description for Food Containers.",
          parentId: 2,
          children: [],
          filterList: [
            {
                id: 1,
                categoryId: 23,
                filterName: "Color",
                type: "checkbox",
                listOption: "Red,Blue,Green"
            },
            {
                id: 2,
                categoryId: 23,
                filterName: "Size",
                type: "checkbox",
                listOption: "Small,Medium,Large"
            },
            {
                id: 3,
                categoryId: 23,
                filterName: "Width",
                type: "range",
                listOption: "0, 100"
            },
            {
                id: 4,
                categoryId: 23,
                filterName: "Height",
                type: "range",
                listOption: "0, 100"
            }
          ],
        },
        {
          id: 24,
          thumb: "/images/website/consummer_4.png",
          categoryName: "Glovess",
          link: "glovess",
          shortDesc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          description: "Detailed description for Glovess.",
          parentId: 2,
          children: [],
          filterList: [
            {
                id: 1,
                categoryId: 24,
                filterName: "Color",
                type: "checkbox",
                listOption: "Red,Blue,Green"
            },
            {
                id: 2,
                categoryId: 24,
                filterName: "Size",
                type: "checkbox",
                listOption: "Small,Medium,Large"
            },
            {
                id: 3,
                categoryId: 24,
                filterName: "Width",
                type: "range",
                listOption: "0, 100"
            },
            {
                id: 4,
                categoryId: 24,
                filterName: "Height",
                type: "range",
                listOption: "0, 100"
            }
          ],
        },
      ],
      filterList: [
        {
            id: 1,
            categoryId: 2,
            filterName: "Color",
            type: "checkbox",
            listOption: "Red,Blue,Green"
                
        },
        {
            id: 2,
            categoryId: 2,
            filterName: "Size",
            type: "checkbox",
            listOption: "Small,Medium,Large",
                
        },
        {
            id: 3,
            categoryId: 2,
            filterName: "Width",
            type: "range",
            listOption: "0, 100",
                
        },
        {
            id: 4,
            categoryId: 2,
            filterName: "Height",
            type: "range",
            listOption: "0, 100",    
        },
        ],
    },
    {
      id: 21,
      thumb: "/images/website/consummer_1.png",
      categoryName: "Cutlery/Straws",
      link: "cutlery-straws",
      shortDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description: "Detailed description for Cutlery/Straws.",
      parentId: 2,
      children: [],
      filterList: [
        {
            id: 1,
            categoryId: 21,
            filterName: "Color",
            type: "checkbox",
            listOption: "Red,Blue,Green"
        },
        {
            id: 2,
            categoryId: 21,
            filterName: "Size",
            type: "checkbox",
            listOption: "Small,Medium,Large"
        },
        {
            id: 3,
            categoryId: 21,
            filterName: "Width",
            type: "range",
            listOption: "0, 100"
        },
        {
            id: 4,
            categoryId: 21,
            filterName: "Height",
            type: "range",
            listOption: "0, 100"
        }
      ],
    },
    {
      id: 22,
      thumb: "/images/website/consummer_2.png",
      categoryName: "Cups/Lids",
      link: "cups-lids",
      shortDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description: "Detailed description for Cups/Lids.",
      parentId: 2,
      children: [],
      filterList: [
        {
            id: 1,
            categoryId: 22,
            filterName: "Color",
            type: "checkbox",
            listOption: "Red,Blue,Green"
        },
        {
            id: 2,
            categoryId: 22,
            filterName: "Size",
            type: "checkbox",
            listOption: "Small,Medium,Large"
        },
        {
            id: 3,
            categoryId: 22,
            filterName: "Width",
            type: "range",
            listOption: "0, 100"
        },
        {
            id: 4,
            categoryId: 22,
            filterName: "Height",
            type: "range",
            listOption: "0, 100"
        }
      ],
    },
    {
      id: 23,
      thumb: "/images/website/consummer_3.png",
      categoryName: "Food Containers",
      link: "food-containers",
      shortDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description: "Detailed description for Food Containers.",
      parentId: 2,
      children: [],
      filterList: [
        {
            id: 1,
            categoryId: 23,
            filterName: "Color",
            type: "checkbox",
            listOption: "Red,Blue,Green"
        },
        {
            id: 2,
            categoryId: 23,
            filterName: "Size",
            type: "checkbox",
            listOption: "Small,Medium,Large"
        },
        {
            id: 3,
            categoryId: 23,
            filterName: "Width",
            type: "range",
            listOption: "0, 100"
        },
        {
            id: 4,
            categoryId: 23,
            filterName: "Height",
            type: "range",
            listOption: "0, 100"
        }
      ],
    },
    {
      id: 24,
      thumb: "/images/website/consummer_4.png",
      categoryName: "Glovess",
      link: "glovess",
      shortDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description: "Detailed description for Glovess.",
      parentId: 2,
      children: [],
      filterList: [
        {
            id: 1,
            categoryId: 24,
            filterName: "Color",
            type: "checkbox",
            listOption: "Red,Blue,Green"
        },
        {
            id: 2,
            categoryId: 24,
            filterName: "Size",
            type: "checkbox",
            listOption: "Small,Medium,Large"
        },
        {
            id: 3,
            categoryId: 24,
            filterName: "Width",
            type: "range",
            listOption: "0, 100"
        },
        {
            id: 4,
            categoryId: 24,
            filterName: "Height",
            type: "range",
            listOption: "0, 100"
        }
      ],
    },
    {
      id: 3,
      thumb: "/images/website/market_3.png",
      categoryName: "Packaging",
      link: "packaging",
      shortDesc: "",
      description: "",
      parentId: 0,
      children: [
        {
          id: 31,
          thumb: "/images/website/Packaging_1.png",
          categoryName: "Consumer Packaging",
          link: "consumer-packaging",
          shortDesc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          description: "Detailed description for Consumer Packaging.",
          parentId: 2,
          children: [],
          filterList: [
            {
              id: 1,
              categoryId: 31,
              filterName: "Color",
              type: "checkbox",
              listOption: "Red,Blue,Green"
            },
            {
              id: 2,
              categoryId: 31,
              filterName: "Size",
              type: "checkbox",
              listOption: "Small,Medium,Large"
            }
          ],
        },
        {
          id: 32,
          thumb: "/images/website/Packaging_2.png",
          categoryName: "Industrial Packaging",
          link: "industrial-packaging",
          shortDesc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          description: "Detailed description for Industrial Packaging.",
          parentId: 2,
          children: [],
          filterList: [
            {
              id: 1,
              categoryId: 32,
              filterName: "Color",
              type: "checkbox",
              listOption: "Red,Blue,Green"
            },
            {
              id: 2,
              categoryId: 32,
              filterName: "Size",
              type: "checkbox",
              listOption: "Small,Medium,Large"
            }
          ],
        },
      ],
      filterList: [
        {
          id: 1,
          categoryId: 3,
          filterName: "Color",
          type: "checkbox",
          listOption: "Red,Blue,Green"
        },
        {
          id: 2,
          categoryId: 3,
          filterName: "Size",
          type: "checkbox",
          listOption: "Small,Medium,Large"
        }
      ],
    },
    {
      id: 31,
      thumb: "/images/website/Packaging_1.png",
      categoryName: "Consumer Packaging",
      link: "consumer-packaging",
      shortDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description: "Detailed description for Consumer Packaging.",
      parentId: 2,
      children: [],
      filterList: [
        {
          id: 1,
          categoryId: 31,
          filterName: "Color",
          type: "checkbox",
          listOption: "Red,Blue,Green"
        },
        {
          id: 2,
          categoryId: 31,
          filterName: "Size",
          type: "checkbox",
          listOption: "Small,Medium,Large"
        }
      ],
    },
    {
      id: 32,
      thumb: "/images/website/Packaging_2.png",
      categoryName: "Industrial Packaging",
      link: "industrial-packaging",
      shortDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description: "Detailed description for Industrial Packaging.",
      parentId: 2,
      children: [],
      filterList: [
        {
          id: 1,
          categoryId: 32,
          filterName: "Color",
          type: "checkbox",
          listOption: "Red,Blue,Green"
        },
        {
          id: 2,
          categoryId: 32,
          filterName: "Size",
          type: "checkbox",
          listOption: "Small,Medium,Large"
        }
      ],
    },
    {
      id: 4,
      thumb: "/images/website/market_4.png",
      categoryName: "Engineering Plastics",
      link: "engineering-plastics",
      shortDesc: "",
      description: "",
      parentId: 0,
      children: [
        {
          id: 41,
          thumb: "/images/website/Engineering_1.png",
          categoryName: "Automotive/Motorbike Parts",
          link: "automotive-motorbike-parts",
          shortDesc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          description: "Detailed description for Automotive/Motorbike Parts.",
          parentId: 2,
          children: [],
          filterList: [
            {
              id: 1,
              categoryId: 41,
              filterName: "Color",
              type: "checkbox",
              listOption: "Red,Blue,Green"
            },
            {
              id: 2,
              categoryId: 41,
              filterName: "Size",
              type: "checkbox",
              listOption: "Small,Medium,Large"
            }
          ],
        },
        {
          id: 42,
          thumb: "/images/website/Engineering_2.png",
          categoryName: "Molds",
          link: "molds",
          shortDesc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          description: "Detailed description for Molds.",
          parentId: 2,
          children: [],
          filterList: [
            {
              id: 1,
              categoryId: 42,
              filterName: "Color",
              type: "checkbox",
              listOption: "Red,Blue,Green"
            },
            {
              id: 2,
              categoryId: 42,
              filterName: "Size",
              type: "checkbox",
              listOption: "Small,Medium,Large"
            }
          ],
        },
        {
          id: 43,
          thumb: "/images/website/Engineering_3.png",
          categoryName: "Household Appliances Parts",
          link: "household-appliances-parts",
          shortDesc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          description: "Detailed description for Household Appliances Parts.",
          parentId: 2,
          children: [],
          filterList: [
            {
              id: 1,
              categoryId: 43,
              filterName: "Color",
              type: "checkbox",
              listOption: "Red,Blue,Green"
            },
            {
              id: 2,
              categoryId: 43,
              filterName: "Size",
              type: "checkbox",
              listOption: "Small,Medium,Large"
            }
          ],
        },
        {
          id: 44,
          thumb: "/images/website/Engineering_4.png",
          categoryName: "Electronics Parts",
          link: "electronics-parts",
          shortDesc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          description: "Detailed description for Electronics Parts.",
          parentId: 2,
          children: [],
          filterList: [
            {
              id: 1,
              categoryId: 44,
              filterName: "Color",
              type: "checkbox",
              listOption: "Red,Blue,Green"
            },
            {
              id: 2,
              categoryId: 44,
              filterName: "Size",
              type: "checkbox",
              listOption: "Small,Medium,Large"
            }
          ],
        },
        {
          id: 45,
          thumb: "/images/website/Engineering_5.png",
          categoryName: "Pallets/Cargo Containers",
          link: "pallets-cargo-containers",
          shortDesc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          description: "Detailed description for Pallets/Cargo Containers.",
          parentId: 2,
          children: [],
          filterList: [
            {
              id: 1,
              categoryId: 45,
              filterName: "Color",
              type: "checkbox",
              listOption: "Red,Blue,Green"
            },
            {
              id: 2,
              categoryId: 45,
              filterName: "Size",
              type: "checkbox",
              listOption: "Small,Medium,Large"
            }
          ],
        },
      ],
      filterList: [
        {
          id: 1,
          categoryId: 45,
          filterName: "Color",
          type: "checkbox",
          listOption: "Red,Blue,Green"
        },
        {
          id: 2,
          categoryId: 45,
          filterName: "Size",
          type: "checkbox",
          listOption: "Small,Medium,Large"
        }
      ],
    },
    {
      id: 41,
      thumb: "/images/website/Engineering_1.png",
      categoryName: "Automotive/Motorbike Parts",
      link: "automotive-motorbike-parts",
      shortDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description: "Detailed description for Automotive/Motorbike Parts.",
      parentId: 2,
      children: [],
      filterList: [
        {
          id: 1,
          categoryId: 41,
          filterName: "Color",
          type: "checkbox",
          listOption: "Red,Blue,Green"
        },
        {
          id: 2,
          categoryId: 41,
          filterName: "Size",
          type: "checkbox",
          listOption: "Small,Medium,Large"
        }
      ],
    },
    {
      id: 42,
      thumb: "/images/website/Engineering_2.png",
      categoryName: "Molds",
      link: "molds",
      shortDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description: "Detailed description for Molds.",
      parentId: 2,
      children: [],
      filterList: [
        {
          id: 1,
          categoryId: 42,
          filterName: "Color",
          type: "checkbox",
          listOption: "Red,Blue,Green"
        },
        {
          id: 2,
          categoryId: 42,
          filterName: "Size",
          type: "checkbox",
          listOption: "Small,Medium,Large"
        }
      ],
    },
    {
      id: 43,
      thumb: "/images/website/Engineering_3.png",
      categoryName: "Household Appliances Parts",
      link: "household-appliances-parts",
      shortDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description: "Detailed description for Household Appliances Parts.",
      parentId: 2,
      children: [],
      filterList: [
        {
          id: 1,
          categoryId: 43,
          filterName: "Color",
          type: "checkbox",
          listOption: "Red,Blue,Green"
        },
        {
          id: 2,
          categoryId: 43,
          filterName: "Size",
          type: "checkbox",
          listOption: "Small,Medium,Large"
        }
      ],
    },
    {
      id: 44,
      thumb: "/images/website/Engineering_4.png",
      categoryName: "Electronics Parts",
      link: "electronics-parts",
      shortDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description: "Detailed description for Electronics Parts.",
      parentId: 2,
      children: [],
      filterList: [
        {
          id: 1,
          categoryId: 44,
          filterName: "Color",
          type: "checkbox",
          listOption: "Red,Blue,Green"
        },
        {
          id: 2,
          categoryId: 44,
          filterName: "Size",
          type: "checkbox",
          listOption: "Small,Medium,Large"
        }
      ],
    },
    {
      id: 45,
      thumb: "/images/website/Engineering_5.png",
      categoryName: "Pallets/Cargo Containers",
      link: "pallets-cargo-containers",
      shortDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description: "Detailed description for Pallets/Cargo Containers.",
      parentId: 2,
      children: [],
      filterList: [
        {
          id: 1,
          categoryId: 45,
          filterName: "Color",
          type: "checkbox",
          listOption: "Red,Blue,Green"
        },
        {
          id: 2,
          categoryId: 45,
          filterName: "Size",
          type: "checkbox",
          listOption: "Small,Medium,Large"
        }
      ],
    },
    {
      id: 5,
      thumb: "/images/website/market_5.png",
      categoryName: "Building Materials",
      link: "building-materials",
      shortDesc: "",
      description: "",
      parentId: 0,
      children: [
        {
          id: 51,
          thumb: "/images/website/Building_1.png",
          categoryName: "Interior",
          link: "interior",
          shortDesc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          description: "Detailed description for Interior.",
          parentId: 2,
          children: [],
          filterList: [
            {
              id: 1,
              categoryId: 51,
              filterName: "Color",
              type: "checkbox",
              listOption: "Red,Blue,Green"
            },
            {
              id: 2,
              categoryId: 51,
              filterName: "Size",
              type: "checkbox",
              listOption: "Small,Medium,Large"
            }
          ],
        },
        {
          id: 52,
          thumb: "/images/website/Building_2.png",
          categoryName: "Exterior",
          link: "exterior",
          shortDesc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          description: "Detailed description for Exterior.",
          parentId: 2,
          children: [],
          filterList: [
            {
              id: 1,
              categoryId: 52,
              filterName: "Color",
              type: "checkbox",
              listOption: "Red,Blue,Green"
            },
            {
              id: 2,
              categoryId: 52,
              filterName: "Size",
              type: "checkbox",
              listOption: "Small,Medium,Large"
            }
          ],
        },
      ],
      filterList: [
        {
          id: 1,
          categoryId: 5,
          filterName: "Color",
          type: "checkbox",
          listOption: "Red,Blue,Green"
        },
        {
          id: 2,
          categoryId: 5,
          filterName: "Size",
          type: "checkbox",
          listOption: "Small,Medium,Large"
        }
      ],
    },
    {
      id: 51,
      thumb: "/images/website/Building_1.png",
      categoryName: "Interior",
      link: "interior",
      shortDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description: "Detailed description for Interior.",
      parentId: 2,
      children: [],
      filterList: [
        {
          id: 1,
          categoryId: 51,
          filterName: "Color",
          type: "checkbox",
          listOption: "Red,Blue,Green"
        },
        {
          id: 2,
          categoryId: 51,
          filterName: "Size",
          type: "checkbox",
          listOption: "Small,Medium,Large"
        }
      ],
    },
    {
      id: 52,
      thumb: "/images/website/Building_2.png",
      categoryName: "Exterior",
      link: "exterior",
      shortDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description: "Detailed description for Exterior.",
      parentId: 2,
      children: [],
      filterList: [
        {
          id: 1,
          categoryId: 52,
          filterName: "Color",
          type: "checkbox",
          listOption: "Red,Blue,Green"
        },
        {
          id: 2,
          categoryId: 52,
          filterName: "Size",
          type: "checkbox",
          listOption: "Small,Medium,Large"
        }
      ],
    },
    {
      id: 6,
      thumb: "/images/website/market_6.png",
      categoryName: "Raw Materials",
      link: "raw-materials",
      shortDesc: "",
      description: "",
      parentId: 0,
      children: [
        {
          id: 61,
          thumb: "/images/website/Raw_1.png",
          categoryName: "Plastic Resins",
          link: "plastic-resins",
          shortDesc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          description: "Detailed description for Plastic Resins.",
          parentId: 2,
          children: [],
          filterList: [
            {
              id: 1,
              categoryId: 61,
              filterName: "Color",
              type: "checkbox",
              listOption: "Red,Blue,Green"
            },
            {
              id: 2,
              categoryId: 61,
              filterName: "Size",
              type: "checkbox",
              listOption: "Small,Medium,Large"
            }
          ],
        },
        {
          id: 62,
          thumb: "/images/website/Raw_2.png",
          categoryName: "Masterbatch/Compound",
          link: "masterbatch-compound",
          shortDesc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          description: "Detailed description for Masterbatch/Compound.",
          parentId: 2,
          children: [],
          filterList: [
            {
              id: 1,
              categoryId: 62,
              filterName: "Color",
              type: "checkbox",
              listOption: "Red,Blue,Green"
            },
            {
              id: 2,
              categoryId: 62,
              filterName: "Size",
              type: "checkbox",
              listOption: "Small,Medium,Large"
            }
          ],
        },
        {
          id: 63,
          thumb: "/images/website/Raw_3.png",
          categoryName: "CaCO3 Powder",
          link: "caco3-powder",
          shortDesc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          description: "Detailed description for CaCO3 Powder.",
          parentId: 2,
          children: [],
          filterList: [
            {
              id: 1,
              categoryId: 63,
              filterName: "Color",
              type: "checkbox",
              listOption: "Red,Blue,Green"
            },
            {
              id: 2,
              categoryId: 63,
              filterName: "Size",
              type: "checkbox",
              listOption: "Small,Medium,Large"
            }
          ],
        },
      ],
      filterList: [
        {
          id: 1,
          categoryId: 6,
          filterName: "Color",
          type: "checkbox",
          listOption: "Red,Blue,Green"
        },
        {
          id: 2,
          categoryId: 6,
          filterName: "Size",
          type: "checkbox",
          listOption: "Small,Medium,Large"
        }
      ],
    },
    {
      id: 61,
      thumb: "/images/website/Raw_1.png",
      categoryName: "Plastic Resins",
      link: "plastic-resins",
      shortDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description: "Detailed description for Plastic Resins.",
      parentId: 2,
      children: [],
      filterList: [
        {
          id: 1,
          categoryId: 61,
          filterName: "Color",
          type: "checkbox",
          listOption: "Red,Blue,Green"
        },
        {
          id: 2,
          categoryId: 61,
          filterName: "Size",
          type: "checkbox",
          listOption: "Small,Medium,Large"
        }
      ],
    },
    {
      id: 62,
      thumb: "/images/website/Raw_2.png",
      categoryName: "Masterbatch/Compound",
      link: "masterbatch-compound",
      shortDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description: "Detailed description for Masterbatch/Compound.",
      parentId: 2,
      children: [],
      filterList: [
        {
          id: 1,
          categoryId: 62,
          filterName: "Color",
          type: "checkbox",
          listOption: "Red,Blue,Green"
        },
        {
          id: 2,
          categoryId: 62,
          filterName: "Size",
          type: "checkbox",
          listOption: "Small,Medium,Large"
        }
      ],
    },
    {
      id: 63,
      thumb: "/images/website/Raw_3.png",
      categoryName: "CaCO3 Powder",
      link: "caco3-powder",
      shortDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description: "Detailed description for CaCO3 Powder.",
      parentId: 2,
      children: [],
      filterList: [
        {
          id: 1,
          categoryId: 63,
          filterName: "Color",
          type: "checkbox",
          listOption: "Red,Blue,Green"
        },
        {
          id: 2,
          categoryId: 63,
          filterName: "Size",
          type: "checkbox",
          listOption: "Small,Medium,Large"
        }
      ],
    },
  ],
  mockProducts: [
    {
        id: 1,
        thumb: "/images/website/product-list_1.png",
        prodName: "Food Wrap 1",
        slug: "product-1",
        sku: "036897488221-2",
        shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        description: "Detailed description for Food Wrap.",
        specification: "Specifications for Food Wrap.",
        dataSheet: "/files/datasheet.pdf",
        media: [
            { 
                id: 1,
                url: "/images/website/product_1.png",
                alt: "Product Image 1"
            },
            { 
                id: 2,
                url: "/images/website/product_2.png",
                alt: "Product Image 2"
            },
            { 
                id: 3,
                url: "/images/website/product_3.png",
                alt: "Product Image 3"
            },
        ],
    },
    {
        id: 2,
        thumb: "/images/website/product-list_2.png",
        prodName: "Overlock Jumbo bag 2",
        slug: "product-2",
        sku: "036897488221-3",
        shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        description: "Detailed description for Food Wrap.",
        specification: "Specifications for Food Wrap.",
        dataSheet: "/files/datasheet.pdf",
        media: [
            { 
                id: 1,
                url: "/images/website/product_1.png",
                alt: "Product Image 1"
            },
            { 
                id: 2,
                url: "/images/website/product_2.png",
                alt: "Product Image 2"
            },
            { 
                id: 3,
                url: "/images/website/product_3.png",
                alt: "Product Image 3"
            },
        ],
    },
    {
        id: 3,
        thumb: "/images/website/product-list_1.png",
        prodName: "Food Wrap 3",
        slug: "product-3",
        sku: "036897488221-3",
        shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        description: "Detailed description for Food Wrap.",
        specification: "Specifications for Food Wrap.",
        dataSheet: "/files/datasheet.pdf",
        media: [
            { 
                id: 1,
                url: "/images/website/product_1.png",
                alt: "Product Image 1"
            },
            { 
                id: 2,
                url: "/images/website/product_2.png",
                alt: "Product Image 2"
            },
            { 
                id: 3,
                url: "/images/website/product_3.png",
                alt: "Product Image 3"
            },
        ],
    },
    {
        id: 4,
        thumb: "/images/website/product-list_2.png",
        prodName: "Overlock Jumbo bag 4",
        slug: "product-4",
        sku: "036897488221-4",
        shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        description: "Detailed description for Food Wrap.",
        specification: "Specifications for Food Wrap.",
        dataSheet: "/files/datasheet.pdf",
        media: [
            { 
                id: 1,
                url: "/images/website/product_1.png",
                alt: "Product Image 1"
            },
            { 
                id: 2,
                url: "/images/website/product_2.png",
                alt: "Product Image 2"
            },
            { 
                id: 3,
                url: "/images/website/product_3.png",
                alt: "Product Image 3"
            },
        ],
    },
    {
        id: 5,
        thumb: "/images/website/product-list_1.png",
        prodName: "Food Wrap 5",
        slug: "product-5",
        sku: "036897488221-5",
        shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        description: "Detailed description for Food Wrap.",
        specification: "Specifications for Food Wrap.",
        dataSheet: "/files/datasheet.pdf",
        media: [
            { 
                id: 1,
                url: "/images/website/product_1.png",
                alt: "Product Image 1"
            },
            { 
                id: 2,
                url: "/images/website/product_2.png",
                alt: "Product Image 2"
            },
            { 
                id: 3,
                url: "/images/website/product_3.png",
                alt: "Product Image 3"
            },
        ],
    },
    {
        id: 6,
        thumb: "/images/website/product-list_2.png",
        prodName: "Overlock Jumbo bag 6",
        slug: "product-6",
        sku: "036897488221-6",
        shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        description: "Detailed description for Food Wrap.",
        specification: "Specifications for Food Wrap.",
        dataSheet: "/files/datasheet.pdf",
        media: [
            { 
                id: 1,
                url: "/images/website/product_1.png",
                alt: "Product Image 1"
            },
            { 
                id: 2,
                url: "/images/website/product_2.png",
                alt: "Product Image 2"
            },
            { 
                id: 3,
                url: "/images/website/product_3.png",
                alt: "Product Image 3"
            },
        ],
    },
    {
        id: 7,
        thumb: "/images/website/product-list_1.png",
        prodName: "Food Wrap 7",
        slug: "product-7",
        sku: "036897488221-7",
        shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        description: "Detailed description for Food Wrap.",
        specification: "Specifications for Food Wrap.",
        dataSheet: "/files/datasheet.pdf",
        media: [
            { 
                id: 1,
                url: "/images/website/product_1.png",
                alt: "Product Image 1"
            },
            { 
                id: 2,
                url: "/images/website/product_2.png",
                alt: "Product Image 2"
            },
            { 
                id: 3,
                url: "/images/website/product_3.png",
                alt: "Product Image 3"
            },
        ],
    },
    {
        id: 8,
        thumb: "/images/website/product-list_2.png",
        prodName: "Overlock Jumbo bag 8",
        slug: "product-8",
        sku: "036897488221-8",
        shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        description: "Detailed description for Food Wrap.",
        specification: "Specifications for Food Wrap.",
        dataSheet: "/files/datasheet.pdf",
        media: [
            { 
                id: 1,
                url: "/images/website/product_1.png",
                alt: "Product Image 1"
            },
            { 
                id: 2,
                url: "/images/website/product_2.png",
                alt: "Product Image 2"
            },
            { 
                id: 3,
                url: "/images/website/product_3.png",
                alt: "Product Image 3"
            },
        ],
    },
  ],
};

export default mockData;
