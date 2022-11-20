import { useState } from "react"

export const PostForm = () => {
    const [userId, setUserId] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const submithandler = (event) =>{
        event.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                title: title,
                body: body,
                userId: userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    return (
    <form onSubmit={submithandler}>
        <div>
            <input 
            type='text' 
            placeholder='User Id' 
            value={userId}
            onChange={(e) => setUserId(e.target.value) }/>
        </div>
        <div>
            <input 
            type='text' 
            placeholder='Title' 
            value={title}
            onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div>
            <input 
            type='text' 
            placeholder='Body' 
            value={body}
            onChange={(e) => setBody(e.target.value)} />
        </div>
        <button type='submit'>Submit</button>
    </form>)
  }