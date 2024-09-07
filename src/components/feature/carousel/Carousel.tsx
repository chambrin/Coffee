// src/components/feature/carousel/Carousel.tsx
'use client'
import Image, { StaticImageData } from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface Coffee {
    id: string;
    name: string;
    // Add other properties as needed
}

// Image import
import Ayla from '@public/products/Ayla-Ethiopia.png';
import CoffeeImage from '@public/products/Coffee-Coffee-Classic.png';
import Dark from '@public/products/Dark-Coffee-Rich.png';
import Decaf from '@public/products/Decaf-Coffee.png';
import Gandula from '@public/products/Gandula-Brazil.png';
import Gishubi from '@public/products/Gishubi-Burundi.png';
import Good from '@public/products/Good-Day-Coffee-Sweet.png';
import Jamir from '@public/products/Jamir-Munoz-Colombia.png';
import Mensur from '@public/products/Mensur-Abahika-Ethiopia.png';
import Pedro from '@public/products/Pedro-Flores-Bolivia.png';
import Rogue from '@public/products/Rogue-Coffee-Complex.png';

// Mapping between product names and imported images
const imageMapping: { [key: string]: StaticImageData } = {
    'Ayla Ethiopia': Ayla,
    'Coffee Coffee Classic': CoffeeImage,
    'Dark Coffee Rich': Dark,
    'Decaf Coffee': Decaf,
    'Gandula Brazil': Gandula,
    'Gishubi Burundi': Gishubi,
    'Good Day Coffee Sweet': Good,
    'Jamir Munoz Colombia': Jamir,
    'Mensur Abahika Ethiopia': Mensur,
    'Pedro Flores Bolivia': Pedro,
    'Rogue Coffee Complex': Rogue,
};

interface CarouselProps {
    coffees: Coffee[];
    direction: 'left' | 'right';
}

export default function Carousel({ coffees, direction }: CarouselProps) {
    const controls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            while (true) {
                await controls.start({ x: direction === 'left' ? '-100%' : '100%' });
                await controls.start({ x: '0%' });
            }
        };
        sequence();
    }, [controls, direction]);

    const handleMouseEnter = () => {
        controls.stop();
    };

    const handleMouseLeave = () => {
        controls.start({ x: direction === 'left' ? '-100%' : '100%' });
    };

    return (
        <div className="overflow-hidden py-12" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {coffees.length > 0 ? (
                <motion.div
                    className="flex gap-6"
                    animate={controls}
                    initial={{ x: direction === 'left' ? '0%' : '-100%' }}
                    transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
                >
                    {coffees.map((coffee) => {
                        const imageSrc = imageMapping[coffee.name];
                        return (
                            <div key={coffee.id} className="min-w-[300px] h-52 flex flex-col items-start justify-center p-4">
                                {imageSrc ? (
                                    <Image
                                        src={imageSrc}
                                        alt={coffee.name}
                                        width={200}
                                        height={200}
                                        className="object-cover w-full p-6 h-52 bg-border rounded-3xl"
                                    />
                                ) : (
                                    <p>Image not found for {coffee.name}</p>
                                )}
                                <h3 className="text-lg mt-2 text-left">{coffee.name}</h3>
                            </div>
                        );
                    })}
                </motion.div>
            ) : (
                <p>Aucun café trouvé.</p>
            )}
        </div>
    );
}