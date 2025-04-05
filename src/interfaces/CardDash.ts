import { StaticImageData } from "next/dist/shared/lib/get-img-props";

export interface CardDashProps {
    name: string;
    photo: StaticImageData | string;
    value: React.ReactNode;
    color: 'green' | 'red' | 'blue';
}