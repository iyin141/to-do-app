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

export async function verify(token:string) {
  const response = await fetch('/api/Verify', { 
    method: 'POST',
    headers: {
      'Content-type':'application/json',
    },
    body: JSON.stringify({token}),
  })

  const result = response.json()
  return result
  
}

export async function NewTask(data:Formdata) {
  const response = await fetch('/api/NewTask', { 
    method: 'POST',
    headers: {
      'Content-type':'application/json',
    },
    body: JSON.stringify(data),
  })

  const result = response.json()
  return result
  
}

export async function FetchTask(uid:string) {
  const response = await fetch('/api/FetchTask', { 
    method: 'POST',
    headers: {
      'Content-type':'application/json',
    },
    body: JSON.stringify({uid}),
  })

  const result = response.json()
  return result
  
}