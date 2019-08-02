import React from "react";

export default class Counter extends React.Component {

  state = {
   
    person: null
  };
  
  async componentDidMount() {
    const url = "http://localhost:3000/markers";
    const response = await fetch(url);
    const data = await response.json();
    console.log("DataArrive",data);
    this.setState({ person: data });
  }

  render() {
    const {person} = this.state;

    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
     
      <div className="chip">
        { 
          person.map((rowdata,i)=>       
            <div className="row" key={rowdata.id}>     
            { (typeof(rowdata.images)==='object')?
             <div className="column"> 
              { 
                rowdata.images.map((subData, j)=>
                <div key={subData.value}>
                 <img src={subData.value} alt={"subData.key"} style={{width: '50px',height:'50px', borderradius:'50%'}}/>
                 {rowdata.name} 
                </div>
                  )
              }
             </div>
             :
             null
            }
            
            {
             (typeof(rowdata.measurements)==='object')?
             <div className="column">
             {rowdata.measurements.map((subRowData, k)=>
              <div key={subRowData.referenceId}>
              <div>{subRowData.score}{"/100"}</div>
              <div>{subRowData.date}</div>   
              </div>
              )
             }
             </div> 
             :
             null
            } 
            </div>
          )
        }    <hr color="black" />          
      </div>
  
    );
  }
}


