import React,{Component} from 'react';


//subject라는 컴포넌트를 만들겠다
class Subject extends Component{
    render(){//render이란 함수 필수 펑션생략 자바스크립트 최신
  
  return (
    <header>
    <h1>
        <a href="">{this.props.title}</a>
        <hr></hr>
        {this.props.sub}
    </h1>
  
  </header>
  );
    }
  }

export default Subject;