export function Listitems(props){
    // if(props.ispacked){
    //     return(
    //         <li>
    //             {props.name}
    //         </li>
    //     )
    // }
    // else return <li>
    //     heheh
    // </li>
    return(
        <>
            <li>
                {props.name}{props.ispacked? '✅' : ''}
            </li>
        </>
    );
}