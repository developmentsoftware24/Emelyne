function Hooks(){
    const handleClick = () => {
        console.log('Button clicked');
    }
    return (
        <button onClick={handleClick}>Click me</button>
    )
}

export default Hooks;