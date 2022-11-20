export const NameList = () =>{
    const name = ['Nipuna', 'Gayani', 'Kamal']
    return (<div>
        {
            name.map(
                    (name) => {return (<h2 key={name}>{name}</h2>)}
                    )
        }
    </div>)
}