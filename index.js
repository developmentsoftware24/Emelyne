function Hooks(){
    const handleClick = () => {
        console.log('Button clicked');
    }
    return (
        <>
        <h2>React Hooks</h2>
        <button onClick={handleClick}>Click me</button>
        </>
    )
}

export default Hooks;
