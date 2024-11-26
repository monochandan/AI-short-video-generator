import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function Header() {
  return (
    <div className='p-3 px-5 flex items-center justify-between shadow-md'>
       <div className='flex gap-3 items-center'>
        <Image src={'/logo.svg'} width={30}  height={30}/>
        <h2 className='font-bold text-xl'>AI short Video Generator</h2>
        </div>

        <div className='flex gap-3 items-center'>
            <Link href={'/dashboard'}>
            <Button>Dashboard</Button>
          </Link>
            
            <UserButton/>
        </div> 
    </div>
  )
}

export default Header