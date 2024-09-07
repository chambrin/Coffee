import React from 'react';
import Image, { StaticImageData } from "next/image";
import { editorial } from "@/lib/font";

type ImagePosition = 'left' | 'right';

interface ContentProps {
    imagePosition: ImagePosition;
    title: string;
    content: string;
    imageSrc: StaticImageData;
    isFirst?: boolean;
}

export default function Content({ imagePosition, title, content, imageSrc, isFirst = false }: ContentProps) {
    const isImageLeft = imagePosition === 'left';

    return (
        <div className={`flex flex-col items-center my-5 md:flex-row ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="w-full md:w-1/2 order-2 md:order-none">
                <Image
                    src={imageSrc}
                    alt="Content image"
                    className="w-full h-4/5 object-cover rounded-3xl"
                    width={500}
                    height={500}
                />
            </div>
            <div className={`w-full md:w-1/2 flex flex-col justify-center p-8 ${isImageLeft ? 'md:p-32' : 'md:pl-0 md:pr-32' } order-1 md:order-none`}>
                <h2 className={`text-4xl md:text-8xl mb-2 ${editorial.className}`}>{title}</h2>
                {!isFirst && <p className="text-lg md:text-xl mt-4 md:mt-9">{content}</p>}
            </div>
        </div>
    );
}