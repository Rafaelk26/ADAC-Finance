import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/services/server';

export interface outPutProps{
    id: string,
    name: string,
    description: string,
    value: number,
    date: string,
    categoryId: string,
}


export async function getOutputByCategories(categoryId: string){

    const data: outPutProps[] = []

    try{
        const q = query(collection(db, "output"), where("categoryId", "==", categoryId))
        const snapshotQuery = await getDocs(q)

        snapshotQuery.forEach((doc) => {
            const outPutData = doc.data() as outPutProps

            data.push({
                ...outPutData,
                id: doc.id,
            })
        })


        return data;
    }
    catch(err){
        console.log("Erro ao buscar saídas por categoria:", err)
        return [];
    }
}