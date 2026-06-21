export function housingImage(propertyType: string): string {
  switch (propertyType.toUpperCase()) {
    case "ROOM":
      return "/images/housing/room.jpg";
    case "HOUSE":
      return "/images/housing/house.jpg";
    case "COLIVING":
      return "/images/housing/coliving.jpg";
    case "APARTMENT":
    default:
      return "/images/housing/apartment.jpg";
  }
}
