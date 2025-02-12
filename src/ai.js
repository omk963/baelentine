import { HfInference } from '@huggingface/inference'
import env from 'react-dotenv'

const SYSTEM_PROMPT = `
You are a cupid trying to get the user to fall in love with creater of this web page. You will be prompted for valentine's related jokes. Do not repeat jokes, keep it friendly and sweet. Each button press leads to a new joke. Format your response in markdown to make it easier to render to a web page.
`

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN)

export async function getJokeFromMistral(jokes) {
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `Please give a new Valentine's day joke to get the user to fall in love with me. Give a new joke given the following has already been said ${jokes}.` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}