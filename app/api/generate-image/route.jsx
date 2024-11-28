import Replicate from "replicate";
import { writeFile } from "node:fs/promises";
import { NextResponse } from "next/server";

export async function POST(req){
    const {prompt} = await req.json();
    
    try{

        const replicate = new Replicate({
            auth:process.env.REPLICATE_API_TOKEN
        });

        const input = {
            // pass the prompt
            prompt:prompt,
            height:1280,
            width:1024,
            num_outputs:1
        };

        const output = await replicate.run("bytedance/sdxl-lightning-4step:5599ed30703defd1d160a25a63321b4dec97101d98b4674bcc56e41f62f35637", { input });
        console.log(output);
        return NextResponse.json({'result':output[0]});
        
        // for (const [index, item] of Object.entries(output)) {
        // await writeFile(`output_${index}.png`, item);
        // }
        // //=> output_0.png written to disk

    }catch(e)
    {
        return NextResponse.json({'Error:':e})
    }
}