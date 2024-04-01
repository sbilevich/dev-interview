export async function GET(request: Request) {

  return Response.json( [
    { id: 1, name: "Card1", description: 'Description1' },
    { id: 2, name: "Card2", description: 'Description2' },
    { id: 3, name: "Card3", description: 'Description3' },
    { id: 4, name: "Card4", description: 'Description4' },
    { id: 5, name: "Card5", description: 'Description5' },
] )
}