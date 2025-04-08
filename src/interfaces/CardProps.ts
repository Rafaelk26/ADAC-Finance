import { StaticImageData } from "next/dist/shared/lib/get-img-props";

export interface CardProps {
    name: string;
    photo: StaticImageData | string;
    value: React.ReactNode;
    color?: 'green' | 'red' | 'blue';
}