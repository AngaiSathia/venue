import { ListingGalleryImage } from "@/components/listing-image-gallery/utils/types";

export const PHOTOS: string[] = [
    "/images/heb/religious lectures/satsang.jpg",
    "/images/heb/wedding/234-d3d2dbc2c1bd4083a811448b4e966681.webp",
    "/images/heb/wedding/Hyatt+Regency+Scottsdale.jpg",
    "/images/heb/wedding/south_indian_wedding_photos_livermore_temple_0034.jpg",
    "/images/heb/wedding/temple-wedding-35.jpg",
    "/images/heb/wedding/thepromeknot_cover.avif"
];

export const imageGallery: ListingGalleryImage[] = [...PHOTOS].map(
    (item, index): ListingGalleryImage => {
        return {
            id: index,
            url: item,
        };
    }
);