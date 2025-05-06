import { Hono } from 'hono'
import sample from '../resources/sample.json' assert { type: "json" }
import { userAnswer } from '../types.js'
export const answerRoute = new Hono()

answerRoute.post('/', async (c) => {
    const userAnswer = await c.req.json<userAnswer>()
    console.log('内容:', userAnswer);

    const json_data = sample.data;
    const question = json_data[0];
    return c.json({
        id: question.id,
        title: question.title,
        content: question.content,
        info: question.info
    });
})
