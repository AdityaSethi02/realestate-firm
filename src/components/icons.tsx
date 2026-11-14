import type { SVGProps } from "react";
import type { IconType } from "react-icons";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import {
  LuApple,
  LuArrowLeft,
  LuArrowRight,
  LuBedDouble,
  LuBuilding2,
  LuCar,
  LuCheck,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuDroplets,
  LuFilter,
  LuFlower2,
  LuHeart,
  LuHouse,
  LuKeyRound,
  LuLandmark,
  LuLock,
  LuMenu,
  LuShare2,
  LuSnowflake,
  LuSparkles,
  LuStar,
  LuTrees,
  LuUtensilsCrossed,
  LuWifi,
  LuX,
} from "react-icons/lu";

/** Tandon Realty emblem (transparent; black for light headers). */
export function CompanyLogo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="130 40 440 430"
      fill="none"
      overflow="visible"
      className={className}
      role="img"
      aria-label="Tandon Realty"
      {...props}
    >
      <title>Tandon Realty Logo</title>
      <path
        d="M192 256 A165 165 0 1 1 508 256"
        fill="none"
        stroke="#000000"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path d="M262 261 L262 148 L287 128 L309 146 L309 261 Z" fill="#000000" />
      <path d="M262 148 L287 128 L287 261 L262 261 Z" fill="#333333" />
      <path d="M314 261 L314 94 L346 58 L377 94 L377 261 Z" fill="#000000" />
      <path d="M314 94 L346 58 L346 261 L314 261 Z" fill="#333333" />
      <path d="M383 261 L383 146 L406 128 L431 148 L431 261 Z" fill="#000000" />
      <path d="M383 146 L406 128 L406 261 L383 261 Z" fill="#333333" />
      <path
        d="M145 287 Q350 240 555 287 Q350 263 145 287 Z"
        fill="#000000"
      />
      <path
        d="M219 293 A158 158 0 0 0 481 293"
        fill="none"
        stroke="#000000"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <text
        x="350"
        y="326"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="57"
        fontWeight="bold"
        fill="#000000"
      >
        T
      </text>
    </svg>
  );
}

export const Icons = {
  Heart: LuHeart,
  Menu: LuMenu,
  Close: LuX,
  Check: LuCheck,
  Star: LuStar,
  ChevronDown: LuChevronDown,
  ChevronLeft: LuChevronLeft,
  ChevronRight: LuChevronRight,
  ArrowLeft: LuArrowLeft,
  ArrowRight: LuArrowRight,
  House: LuHouse,
  Key: LuKeyRound,
  Car: LuCar,
  Wifi: LuWifi,
  Kitchen: LuUtensilsCrossed,
  Flower: LuFlower2,
  Snowflake: LuSnowflake,
  Droplets: LuDroplets,
  Trees: LuTrees,
  Building: LuBuilding2,
  Bed: LuBedDouble,
  Sparkles: LuSparkles,
  Landmark: LuLandmark,
  Share: LuShare2,
  Filter: LuFilter,
  Lock: LuLock,
  Google: FaGoogle,
  Apple: LuApple,
  Instagram: FaInstagram,
  Facebook: FaFacebookF,
  Youtube: FaYoutube,
  WhatsApp: FaWhatsapp,
} as const;

export const amenityIcons: Record<string, IconType> = {
  Parking: Icons.Car,
  Lift: Icons.Building,
  "Power backup": Icons.Landmark,
  "Gated community": Icons.Lock,
  Security: Icons.Key,
  Garden: Icons.Trees,
  Balcony: Icons.Flower,
  "Air conditioning": Icons.Snowflake,
  "Modular kitchen": Icons.Kitchen,
  "Servant room": Icons.House,
  Clubhouse: Icons.Sparkles,
  "Swimming pool": Icons.Droplets,
  "Wi-Fi": Icons.Wifi,
  Furnished: Icons.Bed,
};
