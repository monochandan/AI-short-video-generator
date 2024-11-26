import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
function SelectDuration(onUserSelect) {
  return (
    <div className='mt-7'>
    <h2 className='font-bold text-2xl text-primary'>Duration</h2>
    <p className='text-gray-500'>Select Duration for your video</p>
    <Select onValueChange={(value) => {
        // setSelectedOption(value)
        value!='Custom Prompt'&&onUserSelect('duration', value)
        }}>
        <SelectTrigger className="w-full mt-2 p-6 text-lg">
            <SelectValue placeholder="Select duration" />
        </SelectTrigger>
        <SelectContent>
           
                <SelectItem value='30 Seconds'>30 Seconds</SelectItem>
                <SelectItem value='60 Seconds'>60 Seconds</SelectItem>

            {/* <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem> */}
        </SelectContent>
    </Select>
    </div>
  )
}

export default SelectDuration