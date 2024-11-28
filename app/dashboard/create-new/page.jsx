"use client"
import React, {useState} from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import CustomeLoading from './_components/CustomeLoading';
import { v4 as uuidv4 } from 'uuid';

const ScriptData = "Ancient Egypt! Home to magnificent pyramids and powerful pharaohs. The Roman Empire, known for its impressive architecture and gladiatorial contests! The Great Wall of China, a symbol of strength and resilience, stretching thousands of miles. The Vikings, fearsome explorers who sailed across oceans in their longships. Medieval castles, fortresses of power and defense in a time of knights and chivalry! Christopher Columbus and the Age of Exploration, opening up new worlds! "
const FILEURL= 'https://firebasestorage.googleapis.com/v0/b/ai-generator-e0185.firebasestorage.app/o/ai-short-video-files%2Fcec9aaeb-7a5a-4f17-bacc-09add6bd25a8.mp3?alt=media&token=f0806da9-934d-47ea-b3bb-e66a7699155e'
const VdoScript = [
    {
      "scene": 1,
      "duration": 5,
      "ContentText": "1799: Napoleon's army discovers a mysterious stone in Egypt.  Inscriptions in three scripts – hieroglyphs, Demotic, and Ancient Greek – hint at unlocking a lost world.",
      "imagePrompt": "Realistic photo of a weathered stone slab with hieroglyphs, Demotic script, and Ancient Greek script clearly visible, partially buried in sand, bright desert sun, Napoleon's soldiers in the background,  cinematic lighting"
    },
    {
      "scene": 2,
      "duration": 7,
      "ContentText": "The Rosetta Stone was crucial because the Greek text provided a key to understanding the hieroglyphs.  Scholars spent years deciphering the symbols.",
      "imagePrompt": "Realistic illustration of a scholar hunched over the Rosetta Stone, meticulously tracing the hieroglyphs with a quill pen.  Books, candles, and antique maps surround them. Warm, inviting library setting."
    },
    // {
    //   "scene": 3,
    //   "duration": 7,
    //   "ContentText": "Jean-François Champollion's breakthrough! He successfully translated the hieroglyphs, revealing the secrets of ancient Egyptian civilization.",
    //   "imagePrompt": "Realistic portrait of Jean-François Champollion, looking triumphant, holding the Rosetta Stone.  A celebratory atmosphere, books and papers strewn around him. Soft, warm lighting."
    // },
    // {
    //   "scene": 4,
    //   "duration": 5,
    //   "ContentText": "The Rosetta Stone opened a window into ancient Egypt.  Today, it's a symbol of historical discovery and the power of language.",
    //   "imagePrompt": "Realistic wide shot of the Rosetta Stone in the British Museum, with people looking at it in awe.  Dramatic lighting, showcasing its significance.  Focus on the stone."
    // },
    // {
    //   "scene": 5,
    //   "duration": 6,
    //   "ContentText": "The story reminds us of the importance of preserving history and the enduring power of human curiosity.",
    //   "imagePrompt": "Realistic image of a sunset over the Nile River in Egypt.  Silhouetted pyramids in the distance.  Calm and reflective atmosphere."
    // }
  ]


function CreateNew() {

    const[formData, setFormData] = useState([]);
    const[loading, setLoading] = useState(false);
    const[videoScript, setVideoScript] = useState();
    const[audioFileUrl, setAudioFileUrl] = useState();
    // saving the captions, words in one state
    const[captions, setCaptions] = useState();
    const[imageList, setImageList] = useState();

    const onHandleInputChange = (fieldName, fieldValue) => {
        console.log(fieldName, fieldValue)

        setFormData(prev=>({
            ...prev,
            [fieldName]:fieldValue
        }))
    }

    const onCreateClickHandler=()=>{
        //GetVideoScript();
        //GenerateAudioFile(ScriptData);
        // GenerateAudioCaption(FILEURL);
        GenerateImage();
    }
    // Get Video Script -- API call
    const GetVideoScript=async ()=>{
        setLoading(true)
        const prompt='Write a script to generate a '+formData.duration+' video on the topic: '+formData.topic+' along with AI image prompt in '+formData.imageStyle+' format for each scene and give me result  in JSON format with image prompt and ContentText as field'
        console.log(prompt)
        const result=await axios.post('/api/get-video-script',{
            prompt:prompt
        }).then(resp=>{
            //console.log(resp.data.result)
            console.log("EXE");
            setVideoScript(resp.data.result); // once scripts is generated
            resp.data.result&&GenerateAudioFile(resp.data.result); // generate the audio file
        })
        //setLoading(false)
        //console.log(result)
    }

    const GenerateAudioFile=async(videoScriptData)=>{
        setLoading(true);
        let script= '';
        const id = uuidv4();
        videoScriptData.forEach(item=>{
            script=script+item.ContentText+' ';
        })
        await axios.post('/api/generate-audio',{
            text:script,
            // for example purpose
            //text:videoScriptData,
            id:id
        }).then(resp=>{
            //console.log(resp.data);
            setAudioFileUrl(resp.data.result);// get file url
            resp.data.result&&GenerateAudioCaption(resp.data.result)
            //setLoading(false);
        })
        // console.log(script);
        //console.log(videoScript, captions, audioFileUrl);
        
    }

    const GenerateAudioCaption=async(fileUrl)=>{

        setLoading(true);
        console.log(fileUrl)
        await axios.post('/api/generate-caption',{
            audioFileUrl:fileUrl
        }).then(resp=>{
            console.log(resp.data.result);
            setCaptions(resp?.data?.result); // generate caption
            GenerateImage();
        })
        
        console.log(videoScript, captions, audioFileUrl);
    }

    /** 
     Used to generate Ai images
    **/
    const GenerateImage=()=>{
        //setLoading(true)
        let images = [];
        // VdoScript for testing...declaired above
        VdoScript.forEach(async(element)=>{
            await axios.post('/api/generate-image',{
                prompt:element?.imagePrompt
            }).then(resp=>{
                console.log(resp.data.result);
                images.push(resp.data.result);
            })
        })
        console.log(images);
        setImageList(images);
        setLoading(false);
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