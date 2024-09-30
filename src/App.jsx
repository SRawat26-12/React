const name=["ranju","manju","sanju"]
const App=()=>{

const ans=name.map((key)=>{
  return(
    <>
    <h1>{key}</h1>
    </>
  )
})
    return(
  <>
  <h1>hello world!</h1>
  {ans}
  
  </>
     
    )
}
export default App;
