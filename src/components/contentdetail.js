import React,{Component} from 'react';
import {connect} from 'react-redux';

class ContentDetail extends Component{
    render(){ return(
        <div>{
            this.props.contentData.filter((content) => parseInt(content.id) === parseInt(this.props.match.params.id)).map((content) =>{
                return(
                    <ul className="align-items-center m-4" key={content.id}>
                        <div className="text-primary navbar-brand jumbotron col-10 m-4">{content.title}</div>
                        <div className="list-group-item col-10 m-4">{content.content}</div>
                    </ul>
                );
            })
        }</div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    contentData: state.content  
  }
}

export default connect(mapStateToProps)(ContentDetail);