import React from 'react';

class Header extends React.Component{

    constructor() {
        super()
            this.state = {
                count: 0,
                name: '2npm',
                tel: '222'
            }
        }
     handler = () => {
            let currenCount = this.state.count;
            currenCount="";
            this.setState({
                count: currenCount
            });
           
    }
    render (){
        return (
            <div>
                <textarea >{this.state.name}</textarea>
                <textarea >{this.state.tel}</textarea>
                <div>
                <button onClick={this.handler}>Add</button>
                </div>
                <div>
                <h1>{this.state.count}</h1>
                
                <h2>{this.state.name}</h2>
                <h2>{this.state.tel}</h2>
                </div>
              </div>
        );
    }
}
export default Header;