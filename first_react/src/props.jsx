// import {Forth} from './Forth'
export function Props(props){
return(
 <>

 <p>
    My name is : {props.name}
  </p>
  <p>
    I am  years Old : {props.Age}
  </p>
  <p>
    I have sibling : {props.siblings}
  </p>
  <p>
    I'm learning  : {props.studying }
  </p> 
   
    {/* <Forth>
        <ul>
            <li>
                asfjdasldkj
            </li>
            <li>
                hweheheh
            </li>
            <li>
                jasfhashd
            </li>
        </ul>
    </Forth> */}
   </>
)
}