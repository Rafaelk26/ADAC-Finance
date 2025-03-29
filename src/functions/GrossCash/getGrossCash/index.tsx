import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '@/services/server';

interface grossCashProps{
    totalValue: number
}

export async function getGrossCash(){
    const data: grossCashProps[] = []

    try{
        const q = query(collection(db, "gross_cash"))
        const snapshotQuery = await getDocs(q)

        snapshotQuery.forEach((doc)=> {
            const entryData = doc.data() as grossCashProps

            data.push({
                ...entryData,
            })
        })
        
        return data;
    }
    catch(err){
        console.log('Não foi possível resgatar o valor bruto do caixa', err)
    }
}