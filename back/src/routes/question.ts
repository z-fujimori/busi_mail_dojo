import { Hono } from 'hono'
import sample from '../resources/sample.json' with { type: "json" }
export const questionRoute = new Hono()

questionRoute.get('/', (c) => {
    const randomInt = Math.floor(Math.random() * 51);
    const json_data = sample.data;
    const question = json_data[randomInt];
    return c.json({
        id: question.id,
        title: question.title,
        content: question.content,
        info: question.info
    });
})

questionRoute.get('/:id', (c) => {
    const id = c.req.param('id')
    return c.text(`Hello Hono! ${id}`)
})
