
const Item = ({ isDone }) => {

 let text = "Todo";  
    
 if (isDone) {
    text = "Done";
 }
 return <div>{text}</div>
};

export default Item