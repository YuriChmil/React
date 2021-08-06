import { thisExpression } from '@babel/types';
import React from 'react';
import ReactDom, { render } from 'react-dom';


class Add extends React.Component{
state ={
    value: true,
    name:"hello",
    item:0
}


render ()
{
    return(
        <div>  
            <div>   
            <textarea>
            Name
        </textarea>
        <textarea> tel</textarea>
        
        </div>  
        <div>
            <ul>
                <li>{this.state.name}</li>
                {this.setState}
            </ul>
        </div>
        </div>
 
)
}


}


export default Add ;