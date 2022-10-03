import React, { useEffect } from 'react'
import { parseIncomingCookies, saveIncomingCookies } from '../../domain_migration/utils'
import {useRouter} from 'next/router'

const DomainMigration = () => {

    const router = useRouter();


    useEffect(()=>{

        const data = parseIncomingCookies()

        console.log(data)

        if(data.status == true)
        {
            saveIncomingCookies(data)
        }

        router.push("/")

    },[])

    return (
        <div className='w-full max-w-3xl mx-auto px-3 p-2 mt-3 bg-white border border-gray-600 rounded-xlg justify-center align-middle items-center'>Domain Migration in progress...</div>
    )
}



export default DomainMigration