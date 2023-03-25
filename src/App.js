
import { useDispatch, useSelector } from "react-redux";
import './app.scss'
function App() {
  const dispatch = useDispatch()

  const name = useSelector((state)=>{
    return state.user.name
  })

  const name1 = useSelector((state)=>{
    return state.user1.name1
  })
  const color = useSelector((state)=>{
    return state.color.color
  })
  const color1 = useSelector((state)=>{
    return state.color1.color1
  })
  const color2 = useSelector((state)=>{
    return state.color2.color2
  })
  const range = useSelector((state)=>{
    return state.range.range
  })
  return (
    
    <div className="L-redux">
      <div className="L-inp">
   
      {/* <h1>{name1}</h1> */}
<div className="L-p">
      <input type="text" className="L-input" onChange={(e)=>{
        dispatch({
          type:'changeName',
          payload:{
            name: e.target.value,
          }
        })
      }}/>

<input type="text" className="L-input" onChange={(e)=>{
        dispatch({
          type:'add',
          payload:{
            name: e.target.value,
          }
        })
      }}/>

      <input type="color" onChange={(e)=>{
               dispatch({
                type:'color',
                payload:{
                  color: e.target.value,
                }
              })
      }}  className="L-color"/>
      <input type="color"  onChange={(e)=>{
               dispatch({
                type:'color1',
                payload:{
                  color: e.target.value,
                }
              })
      }} className="L-color"/>
      <input type="color"  onChange={(e)=>{
               dispatch({
                type:'color2',
                payload:{
                  color: e.target.value,
                }
              })
      }} className="L-color"/>
      <input type="range" onChange={(e)=>{
               dispatch({
                type:'range',
                payload:{
                  range: e.target.value + '%',
                }
              })
      }} className="L-range"/>
      
      </div>
      </div>
      <div className="L-right">
<div className="L-div" style={{backgroundColor:color,borderRadius:range}} >   
<h1 style={{color:color1,textAlign:'center'}}>{name}</h1>
<h1 style={{color:color2,textAlign:'center'}}>{name1}</h1>
</div>
      </div>
    </div>
  );
}

export default App;
