// import {Props} from "./props";
// export default function App() {
// return (
  
//   <>
//   <Props 
//     name = 'Hamza' 
//     Age = '22'
//     siblings = '5'
//     studying = 'React'
//   />    
//   </>

//   );
// }
import {Listitems } from './list'
export default function App(){
  return(
    <>
  <ul>
  <Listitems name= 'Apple' ispacked={true}/>
    <Listitems name= 'banana' ispacked={true} />
    <Listitems name= 'kheera' />
  </ul>

    </>
  )
}