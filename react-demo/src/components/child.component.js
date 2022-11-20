export const ChildComponent = (props) => {

    return (
    <div>
        <button onClick={() => props.greetHandler('Nipuna')}>Greet Parent</button>
    </div>
)
}