import { ListingGalleryImage } from "@/components/listing-image-gallery/utils/types";

export const PHOTOS: string[] = [
    "/images/heb/function room/_DSC5935.jpg",
    "/images/heb/function room/_DSC5893.jpg",
    "/images/heb/function room/_DSC5891.jpg",
    "/images/heb/function room/_DSC5893.jpg",
    "/images/heb/function room/_DSC5935.jpg",
];

export const imageGallery: ListingGalleryImage[] = [...PHOTOS].map(
    (item, index): ListingGalleryImage => {
        return {
            id: index,
            url: item,
        };
    }
);