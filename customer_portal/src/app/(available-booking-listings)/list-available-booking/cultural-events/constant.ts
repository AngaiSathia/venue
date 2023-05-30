import { ListingGalleryImage } from "@/components/listing-image-gallery/utils/types";

export const PHOTOS: string[] = [
    "/images/heb/dining hall/_DSC5906.jpg",
    "/images/heb/dining hall/_DSC5909.jpg",
    "/images/heb/dining hall/_DSC5914.jpg",
    "/images/heb/dining hall/_DSC5916.jpg",
    "/images/heb/dining hall/_DSC5919.jpg",
    "/images/heb/dining hall/_DSC5921.jpg",
];

export const imageGallery: ListingGalleryImage[] = [...PHOTOS].map(
    (item, index): ListingGalleryImage => {
        return {
            id: index,
            url: item,
        };
    }
);