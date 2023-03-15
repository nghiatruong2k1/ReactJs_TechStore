import { BrandController, CategoryController, ProductController } from "~/controllers";

export const controllers =  [
    {
      value: ProductController.search.getAction(),
      text: 'Sản phẩm',
    },
    {
      value: CategoryController.search.getAction(),
      text: 'Danh mục',
    },
    {
      value: BrandController.search.getAction(),
      text: 'Thương hiệu',
    },
    // {
    //   value: PostController.search,
    //   text: 'Bài viết',
    // },
    // {
    //   value: 'topic',
    //   text: 'Chủ đề',
    // },
];