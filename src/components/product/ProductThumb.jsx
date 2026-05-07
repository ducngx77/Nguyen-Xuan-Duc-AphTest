
import { Autoplay, Mousewheel, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "antd";
import { useState } from "react";

import defaultImage from "../../public/images/website/default_image.png";
function ProductThumb() {
  return (
    <div className="product-vertical-thumbnails">
      <Swiper
        modules={[Mousewheel, Pagination, Thumbs]}
        direction={direction}
        slidesPerView="auto"
        spaceBetween={20}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        watchSlidesProgress={true}
        onSwiper={setThumbsSwiper}
        className="ThumbGallery GalleryArea"
      >
        <SwiperSlide>
          <Image
            src="/images/website/product_1.png"
            alt="Product Thumb"
            fallback={defaultImage}
            preview={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/website/product_2.png"
            alt=""
            fallback={defaultImage}
            preview={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/website/product_3.png"
            alt=""
            fallback={defaultImage}
            preview={false}
          />
        </SwiperSlide>
      </Swiper>
      <Image.PreviewGroup>
        <Swiper
          modules={[Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          className="ProductGallery GalleryArea"
        >
          <SwiperSlide>
            <Image
              src="/images/website/product_1.png"
              alt="Product Thumb"
              fallback={defaultImage}
              preview={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/website/product_2.png"
              alt=""
              fallback={defaultImage}
              preview={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/website/product_3.png"
              alt=""
              fallback={defaultImage}
              preview={false}
            />
          </SwiperSlide>
        </Swiper>
      </Image.PreviewGroup>
    </div>
  );
}
