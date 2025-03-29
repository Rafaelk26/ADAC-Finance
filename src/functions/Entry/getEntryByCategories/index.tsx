import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/services/server';

export interface entryProps {
    id: string;
    name: string;
    description?: string;
    value: number;
    date: string;
    categoryId: string;
}

export async function getEntryByCategories(categoryId: string): Promise<entryProps[]> {
    const data: entryProps[] = [];

    try {
        const q = query(collection(db, "entry"), where("categoryId", "==", categoryId));
        const querySnapshot = await getDocs(q);

        console.log('Consultando dados para a categoria:', categoryId);

        querySnapshot.forEach((doc) => {
            const entryData = doc.data() as entryProps;

            data.push({
                ...entryData, 
                id: doc.id,
            });
        });

        return data;
    } catch (error) {
        console.error("Erro ao buscar entradas por categoria:", error);
        return [];
    }
}
