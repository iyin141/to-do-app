export type Formdata = {
    Firstname: string,
    Lastname:string,
  Email: string,
  Password: string
  Task: string,
  Date: string,
  Uid: string
  id: string;
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
export async function login(data: Formdata) {
  const response = await fetch('/api/Log', { 
    method: 'POST',
    headers: {
      'Content-type':'application/json',
    },
    body: JSON.stringify(data),
  })

  const result = response.json()
  return result
  
}