const Contact = () => {

  const handleClick = (e) => {
    console.log("Excelsior! ", e.target);
  }

  return ( 
    <div className="Contact">
    <h2>Contact*****</h2>
    <button onClick={handleClick}>Click Me</button>
  </div>
   );
}
 
export default Contact;