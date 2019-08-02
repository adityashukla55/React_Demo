import React, { Component } from "react";
import PostData from'../config.json';
import Counter from'../components/Counter';


class PostList extends Component {
  
  render() {
    return (
      <div >
      <h5>Your Levels</h5>
      <h6>Your Levels based on your blood test.</h6>
      {PostData.map((postDetail, index)=>{
      		return<div>
             <div style={{color: postDetail.color}}>{postDetail.assessment} </div>
             <Counter/>		
      		</div>
      	})
      }
      </div>
    );
  }
}

export default PostList;
