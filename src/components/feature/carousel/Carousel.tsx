import { PrismaClient } from '@prisma/client';
import Image, { StaticImageData } from 'next/image';

// Image import
import Ayla from '@public/products/Ayla-Ethiopia.png';
import Coffee from '@public/products/Coffee-Coffee-Classic.png';
import Dark from '@public/products/Dark-Coffee-Rich.png';
import Decaf from '@public/products/Decaf-Coffee.png';
import Gandula from '@public/products/Gandula-Brazil.png';
import Gishubi from '@public/products/Gishubi-Burundi.png';
import Good from '@public/products/Good-Day-Coffee-Sweet.png';
import Jamir from '@public/products/Jamir-Munoz-Colombia.png';
import Mensur from '@public/products/Mensur-Abahika-Ethiopia.png';
import Pedro from '@public/products/Pedro-Flores-Bolivia.png';
import Rogue from '@public/products/Rogue-Coffee-Complex.png';

const prisma = new PrismaClient();

async function getCoffees() {
    try {
        const coffees = await prisma.coffee.findMany();
        return coffees;
    } catch (error) {
        console.error('Failed to fetch coffees:', error);
        return [];
    } finally {
        await prisma.$disconnect();
    }
}

// Mapping between product names and imported images
const imageMapping: { [key: string]: StaticImageData } = {
    'Ayla Ethiopia': Ayla,
    'Coffee Coffee Classic': Coffee,
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

export default async function Carousel() {
    const coffees = await getCoffees();

    return (
        <div>
            {coffees.length > 0 ? (
                <div className="h-[350px] overflow-x-scroll flex">
                    {coffees.map((coffee) => {
                        const imageSrc = imageMapping[coffee.name];
                        return (
                            <div key={coffee.id} className="min-w-[300px] p-4">
                                {imageSrc ? (
                                    <Image
                                        src={imageSrc}
                                        alt={coffee.name}
                                        width={300}
                                        height={300}
                                        className="object-cover rounded-lg"
                                    />
                                ) : (
                                    <p>Image not found for {coffee.name}</p>
                                )}
                                <h3 className="text-lg font-bold mt-2">{coffee.name}</h3>
                                <p className="text-sm">{coffee.description}</p>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p>Aucun café trouvé.</p>
            )}
        </div>
    );
}