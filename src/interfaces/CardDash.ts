import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface CardDashProps{
    name: string,
    photo: string | StaticImport,
    value: string,
    color: string;
}