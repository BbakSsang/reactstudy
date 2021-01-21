import './App.css';
import React, {Component} from 'react';
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Articles from "./components/Articles";


class App extends Component{

  constructor(props){
    super(props);

    this.state={
      mode:'welcome',

      subject:{title:'WEB', sub:" World Wide Web! "},
      welcome:{title:"welcome", sub:"hello, react!!!!"},


      articles:{subject:'HTML', desc:'is Hyper Text Markup Language'},
     
      contents:[
        {id:1,title:'HTML',desc:'html is for information'},
        {id:2,title:'CSS',desc:'CSS is for design'        },
        {id:3,title:'JS',desc:'JS is for interactive'},
      ]

    } //여기까지 state constructor 변수명들을 정의하기위한 constructor
   
  }

  render(){
    var _title, _sub=null;

    if(this.state.mode==='welcome'){
    _title=this.state.welcome.title;
    _sub=this.state.welcome.sub;
    }

    else if(this.state.mode==='read'){

      _title=this.state.contents[0].title;
      _sub=this.state.contents[0].desc;
    }


    return(


    <div className="App">

      <Subject title={this.state.subject.title} 
      sub={this.state.subject.sub}
      onChangePage={function(){
      this.setState({mode:'read'});
      }.bind(this)}
      >


      </Subject>

      <TOC data={this.state.contents}></TOC>
      <Articles subject={_title} desc={_sub}></Articles>
    </div>
    );
  }
}







export default App;
