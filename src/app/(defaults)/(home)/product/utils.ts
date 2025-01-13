import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
// import { BASE_URL } from "../services/api"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string | number, opts: Intl.DateTimeFormatOptions = {}) {
  return "2021-10-10 00:00:00";
  // return  new Intl.DateTimeFormat("en-US", {
  //   month: opts.month ?? "long",
  //   day: opts.day ?? "numeric",
  //   year: opts.year ?? "numeric",
  //   ...opts,
  // }).format(new Date(date))
}

/**
 * Stole this from the @radix-ui/primitive
 * @see https://github.com/radix-ui/primitives/blob/main/packages/core/primitive/src/primitive.tsx
 */
export function composeEventHandlers<E>(originalEventHandler?: (event: E) => void, ourEventHandler?: (event: E) => void, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event: E) {
    originalEventHandler?.(event);

    if (checkForDefaultPrevented === false || !(event as unknown as Event).defaultPrevented) {
      return ourEventHandler?.(event);
    }
  };
}

// Enum for Upload Types
export enum UploadType {
  StoreLogo,
  StoreBackground,
  StoreCategory,
  Advertisement,
  Category,
  UserImg,
  ShopperImg,
  Review,
  Product,
  ProductGroup,
}

// Enum for Upload Type Sizes
export enum UploadTypeSize {
  Size360x360 = "360-360",
  Size960x960 = "960-960",
  Size1080x540 = "1080-540",
  Size1080x1080 = "1080-1080",
  Size1080x1350 = "1080-1350",
  Size720x720 = "720-720",
  Size160x160 = "160-160",
  Size1920x960 = "1920-960",
  Original = "original",
}
export enum UploadTypeSizeCategory {
  Size360x360 = "360-360",
  Size1080x540 = "1080-540",
  Size1920x960 = "1920-960",
  Original = "original",
}

export enum UploadTypeSizeProduct {
  Size160x160 = "160-160",
  Size360x360 = "360-360",
  Size1080x1080 = "1080-1080",
  Size1080x1350 = "1080-1350",
  Original = "original",
}

// Root Key Constant
const Roz = { RootKey: "https://s3.jamkhana.com/Jamkhana_Development" };

// Function to get S3 Bucket Directory based on UploadType
function S3BucketDirectory(type: UploadType): string {
  switch (type) {
    case UploadType.StoreLogo:
      return `${Roz.RootKey}/store/logo`;
    case UploadType.StoreBackground:
      return `${Roz.RootKey}/store/background`;
    case UploadType.StoreCategory:
      return `${Roz.RootKey}/store/category`;
    case UploadType.Advertisement:
      return `${Roz.RootKey}/system/advertisement`;
    case UploadType.Category:
      return `${Roz.RootKey}/system/category`;
    case UploadType.UserImg:
      return `${Roz.RootKey}/system/user`;
    case UploadType.ShopperImg:
      return `${Roz.RootKey}/system/shopper`;
    case UploadType.Review:
      return `${Roz.RootKey}/system/review`;
    case UploadType.Product:
    case UploadType.ProductGroup:
      return `${Roz.RootKey}/product`;
    default:
      return "";
  }
}

// Function to get sizes based on UploadType
function S3BucketSizes(type: UploadType): UploadTypeSize[] {
  switch (type) {
    case UploadType.StoreCategory:
    case UploadType.Category:
      return [UploadTypeSize.Original, UploadTypeSize.Size1920x960, UploadTypeSize.Size1080x540, UploadTypeSize.Size360x360];

    case UploadType.StoreLogo:
    case UploadType.UserImg:
    case UploadType.ShopperImg:
      return [UploadTypeSize.Original, UploadTypeSize.Size360x360, UploadTypeSize.Size960x960];

    case UploadType.Product:
    case UploadType.ProductGroup:
      return [UploadTypeSize.Original, UploadTypeSize.Size1080x1350, UploadTypeSize.Size1080x1080, UploadTypeSize.Size360x360, UploadTypeSize.Size160x160];

    case UploadType.StoreBackground:
    case UploadType.Advertisement:
      return [UploadTypeSize.Original, UploadTypeSize.Size1080x540, UploadTypeSize.Size1920x960];

    case UploadType.Review:
      return [UploadTypeSize.Original, UploadTypeSize.Size1080x1080, UploadTypeSize.Size720x720, UploadTypeSize.Size360x360];

    default:
      return [];
  }
}

// Function to get all image paths for given type and imageCode
export function getPathImages({ type, imageCode = "" }: { type: UploadType; imageCode?: string }): string[] {
  const sizes = S3BucketSizes(type);
  const paths = sizes.map((size) => {
    return `${S3BucketDirectory(type)}/${size}/${imageCode}.webp`;
  });
  return paths;
}

// Function to extract osName and device details
export function getDeviceInfo() {
  const userAgent = window.navigator.userAgent;

  // Extract OS name
  const osNameMatch = userAgent.match(/\(([^)]+)\)/); // Matches content inside parentheses
  const osName = osNameMatch ? osNameMatch[1] : "Unknown OS";

  // Extract Device Info (browser and platform details)
  const device = userAgent.split(") ")[1]?.split(" ")[0] || "Unknown Device";

  // Ensure compliance with max length of 50 characters
  const truncatedOsName = osName.length > 50 ? osName.substring(0, 50) : osName;
  const truncatedDevice = device.length > 50 ? device.substring(0, 50) : device;

  return {
    osName: truncatedOsName,
    device: truncatedDevice,
  };
}
