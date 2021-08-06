import React from 'react';
import './TodoADD.css';

class TodoADD extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [
        {id:1,text:'fire',tel:'101',favorite: true},
        {id:2,text:'police',tel:'102',favorite:true},
        {id:3,text:'Ambulance',tel:'103',favorite:true},
        {id:3,text:'Ivan',tel:'0962254885',favorite:false}

      ]};
    
      this.nameChange = this.nameChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.telChange=this.telChange.bind(this);

    }
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
         
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
             ADD contact
            </label>
            <input
              id="name"
              onChange={this.nameChange}
                value={this.state.text}
            />
            <input
              id="name"
              onChange={this.telChange}
                value={this.state.tel}
            />
            
            
            <button>
              Add Contact
            </button>
          </form>
          
          <h1>Contacts</h1>
         
       <laberl>Contacts:{this.state.items.length }</laberl>
      
          <TodoList items={this.state.items} />
        </div>
      );
    }

    nameChange(e) {
      this.setState(
          { text: e.target.value}
          );
          
    }

    telChange(e) {
      this.setState(
          { tel: e.target.value}
          );
          
    }
    
 
  
    handleSubmit(e) {
      e.preventDefault();
      if ((this.state.tel.length === 0) || (this.state.text.length === 0)) {
        return;
        
      }
      
      
      const newItem = {
        text: this.state.text,
        tel: this.state.tel,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        tel: '',
        text: '',

      }));
      
    }
    
    
  }
  
  class TodoList extends React.Component {
    render() {
      return (
        
        <ul >
          {this.props.items.map(item => (
            <li key={item.id}>Name:     <b>{item.text}</b>:tel <b>{item.tel}</b></li>
          ))}
        </ul>
        
      );
      
    }
    
  }
 

  export default TodoADD;