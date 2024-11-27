import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Image from 'next/image'
  
function CustomeLoading({loading}) {
  return (
    <AlertDialog open={loading}>
        <AlertDialogContent className='bg-white'>
        <AlertDialogTitle>Process</AlertDialogTitle>
            <AlertDialogDescription>
                process ongoing.
            </AlertDialogDescription>
            <div className='bg-white flex flex-col items-center my-10 justify-center'>
                <Image src={'/loading.gif'} width={100} height={100}/>
                <h2>Hang on...request is processing (Do not refresh!!)</h2>
            </div>
        </AlertDialogContent>
    </AlertDialog>

  )
}

export default CustomeLoading