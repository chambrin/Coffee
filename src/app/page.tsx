import { PrismaClient } from '@prisma/client';
import { editorial } from '@/lib/font';

const prisma = new PrismaClient();

async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}

export default async function Home() {
  const users = await getUsers();

  return (
      <div >
        <h1 className={`${editorial.className}`}>Liste des utilisateurs</h1>
        {users.length > 0 ? (
            <ul>
              {users.map((user) => (
                  <li key={user.id}>{user.name} - {user.email}</li>
              ))}
            </ul>
        ) : (
            <p>Aucun utilisateur trouvé.</p>
        )}

      </div>
  );
}