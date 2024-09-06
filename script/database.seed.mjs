import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
    {
        name: 'Ayla Ethiopia',
        description: 'A rich and flavorful coffee from Ethiopia.',
        caracteristics: 'Fruity, Floral',
        price: 12.99,
        image: 'Ayla-Ethiopia.png',
        size: 'MEDIUM',
        grind: 'GROUND_FOR_FILTER'
    },
    {
        name: 'Coffee Coffee Classic',
        description: 'A classic coffee blend.',
        caracteristics: 'Balanced, Smooth',
        price: 10.99,
        image: 'CoffeeCoffee_Classic.png',
        size: 'MEDIUM',
        grind: 'GROUND_FOR_FILTER'
    },
    {
        name: 'Dark Coffee Rich',
        description: 'A rich and dark coffee.',
        caracteristics: 'Bold, Intense',
        price: 11.99,
        image: 'DarkCoffee_Rich.png',
        size: 'MEDIUM',
        grind: 'GROUND_FOR_ESPRESSO'
    },
    {
        name: 'Decaf Coffee',
        description: 'A smooth decaffeinated coffee.',
        caracteristics: 'Smooth, Mild',
        price: 9.99,
        image: 'DecafCoffee.png',
        size: 'MEDIUM',
        grind: 'GROUND_FOR_FILTER'
    },
    {
        name: 'Gandula Brazil',
        description: 'A coffee with a nutty flavor from Brazil.',
        caracteristics: 'Nutty, Sweet',
        price: 12.49,
        image: 'Gandula-Brazil.png',
        size: 'MEDIUM',
        grind: 'GROUND_FOR_FILTER'
    },
    {
        name: 'Gishubi Burundi',
        description: 'A coffee with a bright acidity from Burundi.',
        caracteristics: 'Bright, Citrusy',
        price: 13.99,
        image: 'Gishubi-Burundi.png',
        size: 'MEDIUM',
        grind: 'GROUND_FOR_FILTER'
    },
    {
        name: 'Good Day Coffee Sweet',
        description: 'A sweet and smooth coffee.',
        caracteristics: 'Sweet, Smooth',
        price: 10.49,
        image: 'GoodDayCoffee_Sweet.png',
        size: 'MEDIUM',
        grind: 'GROUND_FOR_FILTER'
    },
    {
        name: 'Jamir Munoz Colombia',
        description: 'A coffee with a rich flavor from Colombia.',
        caracteristics: 'Rich, Fruity',
        price: 12.99,
        image: 'JamirMunoz-Colombia.png',
        size: 'MEDIUM',
        grind: 'GROUND_FOR_FILTER'
    },
    {
        name: 'Mensur Abahika Ethiopia',
        description: 'A coffee with a floral aroma from Ethiopia.',
        caracteristics: 'Floral, Bright',
        price: 13.49,
        image: 'MensurAbahika-Ethiopia.png',
        size: 'MEDIUM',
        grind: 'GROUND_FOR_FILTER'
    },
    {
        name: 'Pedro Flores Bolivia',
        description: 'A coffee with a chocolatey flavor from Bolivia.',
        caracteristics: 'Chocolatey, Smooth',
        price: 11.99,
        image: 'PedroFlores-Bolivia.png',
        size: 'MEDIUM',
        grind: 'GROUND_FOR_FILTER'
    },
    {
        name: 'Rogue Coffee Complex',
        description: 'A complex and bold coffee.',
        caracteristics: 'Complex, Bold',
        price: 14.99,
        image: 'RogueCoffee_Complex.png',
        size: 'MEDIUM',
        grind: 'GROUND_FOR_ESPRESSO'
    }
];

async function main() {
    for (const product of products) {
        await prisma.coffee.create({
            data: product
        });
    }
    console.log('Seed data inserted successfully');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });