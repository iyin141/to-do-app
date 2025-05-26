export type Formdata = {
    Firstname: string,
    Lastname:string,
  Email: string,
  Password:string
}

export async function Create(data: Formdata) {
  const response = await fetch('/api/Create', { 
    method: 'POST',
    headers: {
      'Content-type':'application/json',
    },
    body: JSON.stringify(data),
  })

  const result = response.json()
  return result
  
}