import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '@/services/server';

interface categoryProps{
    name: string;
}

export async function getAllCategories(){
    const data: categoryProps[] = []

    try{
        const q = query(collection(db, "category"))
        const snapshotQuery = await getDocs(q)

        snapshotQuery.forEach((doc)=> {
            const categoryData = doc.data() as categoryProps

            data.push({
                ...categoryData,
            })
        })
        
        return data;
    }
    catch(err){
        console.log('Não foi possível resgatar todas as entradas', err)
    }
}