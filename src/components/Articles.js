import React, {Component} from 'react';

class Articles extends Component{
    render(){
      return(
        <article>
        <h2>
         {this.props.subject}
         </h2>
         {this.props.desc}
         </article>
      );
    }
  }
  
  

export default Articles
;