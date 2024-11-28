import { AssemblyAI } from 'assemblyai';
import { NextResponse } from "next/server";
export async function POST(req){

    try{

            // convert the audio file into caption of this given URL
        const {audioFileUrl} = await req.json();

        const client = new AssemblyAI({
            apiKey: process.env.CAPTION_API,
        });
        
        const FILE_URL = audioFileUrl;
        
        // You can also transcribe a local file by passing in a file path
        // const FILE_URL = './path/to/file.mp3';
        
        // Request parameters 
        const data = {
            audio: FILE_URL
        }
        
        //   const run = async () => {
        const transcript = await client.transcripts.transcribe(data);
        console.log(transcript.words);
        return NextResponse.json({'Result:':transcript.words})
        //   };
        
        //   run();
         

    }catch(e){
        return NextResponse.json({'Error:':e})
    }
    

}