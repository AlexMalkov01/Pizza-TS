export class Data<T> {
    constructor (private url:string) {
    }

    async loadAll():Promise<T[]> {
        const res = await fetch(this.url)
        const result = res.json()
        return result
    }

    async loadOne(id:number):Promise<T> {
        const res = await fetch(`${this.url}/${id}`)

        return res.json()
    }

    async deliteOne(id:number):Promise<Response> {
        
        const res = await fetch(`${this.url}/${id}`, {
            method:"DELETE"
        })

        return res
    }

    async save(data:T):Promise<Response> {
        const res = await fetch(this.url, {
            method:"POST" ,
            body: JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        })
        return res
    }
}