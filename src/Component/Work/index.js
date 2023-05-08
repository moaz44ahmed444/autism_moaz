import React , {Component} from "react";
import axios from 'axios';
import { WorkSection , WorkTitle , WorkPart , Icon , PartLine , PartDesc , Span , PartTitle } from './Style.js';

class Work extends Component {
  
  state = {
    works : []
  }

  componentDidMount () {
    axios.get('js/data.json').then( res => {this.setState({ works: res.data.works })})
  }

  render(){ 
    const {works} =  this.state;
    const workList = works.map((workItem) => {
      return(
        <WorkPart first={workItem.id} key={workItem.id}>
            <Icon className={workItem.icon_name}></Icon>
            <PartTitle>{workItem.title}</PartTitle>
            <PartLine/>
            <PartDesc>
                {workItem.body}
            </PartDesc>
          </WorkPart>
      )
    })
    return (
      <WorkSection>
        <div className="container">
          <WorkTitle><Span>My</Span> Work</WorkTitle>
          {workList}
          
        </div>
      </WorkSection>
    );
  }
}

export default Work;
