"use client"
import React, {useState} from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import CustomeLoading from './_components/CustomeLoading';

function CreateNew() {

    const[formData, setFormData] = useState([]);
    const[loading, setLoading] = useState(false);

    const[videoScript, setVideoScript] = useState();

    const onHandleInputChange = (fieldName, fieldValue) => {
        console.log(fieldName, fieldValue)

        setFormData(prev=>({
            ...prev,
            [fieldName]:fieldValue
        }))
    }

    const onCreateClickHandler=()=>{
        GetVideoScript();
    }
    // Get Video Script -- API call
    const GetVideoScript=async ()=>{
        setLoading(true)
        const prompt='Write a script to generate a '+formData.duration+' video on the topic: '+formData.topic+' along with AI image prompt in '+formData.imageStyle+' format for each scene and give me result  in JSON format with image prompt and ContentText as field'
        console.log(prompt)
        const result=await axios.post('/api/get-video-script',{
            prompt:prompt
        }).then(resp=>{
            console.log(resp.data.result)
            setVideoScript(resp.data.result);
        })
        setLoading(false)
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
            <Button className='mt-10 w-full' onClick={onCreateClickHandler}>Create Video</Button>
        </div>

        <CustomeLoading loading={loading}/>

    </div>
  )
}

export default CreateNew