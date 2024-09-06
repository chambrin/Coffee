import React from 'react';
import Image, { StaticImageData } from "next/image";
import { editorial } from "@/lib/font";

interface ContentProps {
    imagePosition: 'left' | 'right';
    title: string;
    content: string;
    imageSrc: string | StaticImageData;
    isFirst?: boolean;
}

export default function Content({ imagePosition = 'left', title, content, imageSrc, isFirst = false }: ContentProps) {
    const isImageLeft = imagePosition === 'left';

    return (
        <div className={`flex flex-col md:flex-row ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="w-full md:w-1/2 order-2 md:order-none">
                <Image
                    src={imageSrc}
                    alt="Content image"
                    className="w-full h-auto object-cover rounded-3xl"
                    width={500}
                    height={500}
                />
            </div>
            <div className={`w-full md:w-1/2 flex flex-col justify-center p-8 ${isImageLeft ? 'md:p-32' : 'md:pl-0 md:pr-32' } order-1 md:order-none`}>
                <h2 className={`mb-2 ${editorial.className} ${isFirst ? 'text-7xl md:text-9xl ' : 'text-4xl md:text-8xl'}`}>
                    {title}
                </h2>
                {!isFirst && <p className="text-lg md:text-xl mt-4 md:mt-9">{content}</p>}
            </div>
        </div>
    );
}