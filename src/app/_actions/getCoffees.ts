import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getCoffees() {
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