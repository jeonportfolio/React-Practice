const Propagation = () => {
    
    const handleParent = () => alert("parent");
    const handleChild = (event) => {
        event.stopPropagation(); //이거 없애면 handleParent가 나오게 된다
        alert("child")
    };
  
    return (
    <div onClick={handleParent}>
        <button onClick={handleChild}>child</button>
    </div>
  )
}

export default Propagation