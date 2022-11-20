import { useState } from "react"
export const Form = () => {
    const [username, setusername] = useState('')
    const handleSubmit = (event) =>{
            event.preventDefault()
            alert(`form data is subbmited ${username}`)
    }

return (<form onSubmit={handleSubmit}>
        <div>
            <lable>User Name</lable>
            <input type='text'  value={username} onChange={(event) => setusername(event.target.value) }/>
        </div>
        <button type='submit'>Submit</button>
</form>)

}  