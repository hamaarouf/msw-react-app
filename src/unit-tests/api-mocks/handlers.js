import { rest } from 'msw';

const client = 
[
  {
    numeroRc: "1000", 
    description: "desc one", 
    ifu: "100",  
    ice: "789", 
    company: "mycom", 
    city: "paris"
  }
]



export const clientHandler = rest.get("http://localhost:8080/api/informationsClient", async (req, res, ctx) => {
  console.log("res = ", res);
  return res(
    ctx.status(200),
    ctx.json(client)
  )
});

export const clientHandlerException = rest.get("http://localhost:8080/api/informationsClient", async (req, res, ctx) =>
    res(ctx.status(500), ctx.json({ message: 'Deliberately broken request' }))
);

export const handlers = [clientHandler];