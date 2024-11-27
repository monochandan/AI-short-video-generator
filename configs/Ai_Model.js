const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    // responseMimeType: "text/plain",
    responseMimeType: "application/json",
  };
  
//   async function run() {
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Write a script to generate a 30-second video on the topic: Interesting historical story along with AI image prompt in Realistic format for each scene and give me result  in JSON format with image prompt and ContentText as field"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"imagePrompt\": \"Realistic image of a bustling 1920s speakeasy, dimly lit with jazz musicians playing, people dancing and drinking, smoke filling the air. Focus on a mysterious woman in a flapper dress sitting alone at a table, looking thoughtful.\",\n    \"ContentText\": \"The year is 1923. Prohibition is in full swing, and the city hums with a secret energy.  Our story centers on a woman named Evelyn, a mysterious figure who frequented the city's most exclusive speakeasies.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic image of Evelyn, a young woman with dark hair and intense eyes, dressed in a flapper dress, secretly meeting with a sharply dressed man in a dark alleyway,  passing a small, sealed package between them. Rain is lightly falling.\",\n    \"ContentText\": \"Evelyn wasn't just enjoying the jazz. She was involved in something far more dangerous – a secret network smuggling rare books, forbidden during this era of strict censorship.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic image of a close-up on a beautifully illustrated, antique book, open to a page with intricate drawings, showing details of the book's unique binding and aged paper.  A single, strong light source illuminates it.\",\n    \"ContentText\": \"These weren't ordinary books. They contained revolutionary ideas, suppressed by the government, each one a dangerous secret waiting to be unleashed.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic image of a tense scene: Evelyn and the man are surrounded by police officers in trench coats in a smoky, dimly lit back room. One officer points a gun.\",\n    \"ContentText\": \"But their secret didn't remain hidden for long. A raid on the speakeasy exposed their operation...\"\n  },\n  {\n    \"imagePrompt\": \"Realistic image of Evelyn, looking determined yet resigned,  being led away by a police officer. Her eyes still hold a spark of defiance. \",\n    \"ContentText\": \"Evelyn was arrested.  Her story, however, became a legend whispered among the city's underworld – a testament to courage in the face of oppression.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic image of an aged, leather-bound book sitting on a dusty shelf in a library, partially obscured by shadow, hinting at the secrets it holds.\",\n    \"ContentText\": \"The books were never recovered. And to this day, Evelyn's story continues to inspire those who fight for freedom of thought and expression.\"\n  }\n]\n```\n\n**Note:**  This JSON provides the text and AI image prompts.  To create the actual video, you'll need to use a video editing software and an AI image generation tool (like Midjourney, Dall-E 2, Stable Diffusion) to generate the images from the prompts.  The video editing software would then assemble the images with the corresponding text narration, background music, and sound effects to create the 30-second video.  You'll need to adjust the timing of each scene to fit within the 30-second timeframe.  Remember to consider copyright implications when using generated images.\n"},
          ],
        },
      ],
    });
  
//     const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//     console.log(result.response.text());
//   }
  
//   run();