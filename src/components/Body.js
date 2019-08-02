import React from "react";

export default class Body extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    
    this.setState({ person: data[0], loading: false });

  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        <div>{this.state.person.id}</div>
        <div>{this.state.person.name}</div>
        <div>{this.state.person.username}</div>
         <div>{this.state.person.address.city}</div>
         
        <div>{this.state.person.phone}</div>
        <div>{this.state.person.company.name}</div>
        
      </div>
    );
  }
}



{
             (typeof(rowdata.images)==='object')?
             <div>
            
              { 
                rowdata.images.map((subData, j)=>
                <div>
                 <img src={subData.value} alt={"subData.key"} style={{height: 30,borderRadius: 40}}/>
               
                </div>
                  )
              }
             </div>
             :
             null
            }

            {rowdata.name}

            {
             (typeof(rowdata.measurements)==='object')?
             {rowdata.measurements.map((subRowData, k)=>{subRowData.score+"/100"})
             }
             :
             null
            }



            <Button color="danger" onClick={() => this.props.removePerson(id)}>Delete</Button>

            { let { date, score} = this.props.person.measurements;
    let { key, value} = this.props.person.images; 