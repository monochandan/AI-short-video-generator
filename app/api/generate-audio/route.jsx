//import { textToSpeech } from "@google-cloud/text-to-speech";
import { storage } from "@/configs/FirebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { NextResponse } from "next/server";
import { Result } from "postcss";

const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');

const client = new textToSpeech.TextToSpeechClient({
    apiKey:process.env.GOOGLE_API_KEY
});

export async function POST(req){

    const {text, id} = await req.json();

    // defining reference for firebase stoorage
    const storageRef = ref(storage, 'ai-short-video-files/'+id+'.mp3')

    // Construct the request
    const request = {
        input: {text: text},
        // Select the language and SSML voice gender (optional)
        voice: {languageCode: 'en-US', ssmlGender: 'Female'},
        // select the type of audio encoding
        audioConfig: {audioEncoding: 'MP3'},
  };

  // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(request);

    // Write the binary audio content to a local file -- 

    //saving in local storage
    //   const writeFile = util.promisify(fs.writeFile);
    //   await writeFile('output.mp3', response.audioContent, 'binary');

// saving in firebase
  const audioBuffer=Buffer.from(response.audioContent, 'binary');

  //in order to upload it --store the file into firebase
  await uploadBytes(storageRef, audioBuffer, {contentType:'audio/mp3'});

  // get the url of the stored file

  const downloadUrl = await getDownloadURL(storageRef);

  //console.log('Audio content written to file: output.mp3');



  //return NextResponse.json({Result:'Success'});

  console.log(downloadUrl);
  return NextResponse.json({'result':downloadUrl});

}