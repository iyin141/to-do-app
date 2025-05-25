type Formdata = {
    Firstname: string,
    Lastname:string,
  Email: string,
  Password:string
}

export async function Create(data:Formdata) {
    console.log(data)
}