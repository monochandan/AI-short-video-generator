"use client"
import React, {useState} from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';

function CreateNew() {

    const[formData, setFormData] = useState([]);
    const onHandleInputChange = (fieldName, fieldValue) => {
        console.log(fieldName, fieldValue)

        setFormData(prev=>({
            ...prev,
            [fieldName]:fieldValue
        }))
    }
  return (
    <div className='mid:px-20'>
        <h2 className='font-bold text-4xl text-primary text-center'>Create New</h2>

        <div className='mt-10 shadow-md p-10'>
            {/* select topic */}
            <SelectTopic onUserSelect={onHandleInputChange}/>

            {/* select style */}
            <SelectStyle onUserSelect={onHandleInputChange}/>

            {/* select duration */}
            <SelectDuration onUserSelect={onHandleInputChange}/>

            {/* create button */}
            <Button className='mt-10 w-full'>Create Video</Button>
        </div>
    </div>
  )
}

export default CreateNew