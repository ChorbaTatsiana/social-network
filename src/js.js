import { ReactComponent } from "react";

class Man extends ReactComponent {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <div> 
            <div>{this.props.name}</div>
            <div>{this.props.fulName}</div>
        </div>
        )
    } 
}
let man  = new Man({name:'Dima', fulName:"Ivanov"});
let jsx = man.render();

