//api/post



const basURL = "/api/posts"

export default async function getPost(id){
    const res = await fetch(`${basURL}`)
    const posts = await res.json()

    if(id){
        return posts.find(value => value.id === id)
    }

    return posts;
}