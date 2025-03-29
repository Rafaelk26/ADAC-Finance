import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/services/server';

// Export interface 
import { entryProps } from '@/functions/Entry/getEntryByCategories'

export async function getAllEntry(){
    const data: entryProps[] = []

    try{
        const q = query(collection(db, "entry"))
        const snapshotQuery = await getDocs(q)

        snapshotQuery.forEach((doc)=> {
            const entryData = doc.data() as entryProps

            data.push({
                ...entryData,
                id: doc.id
            })
        })
        
        return data;
    }
    catch(err){
        console.log('Não foi possível resgatar todas as entradas', err)
    }
}