import React, {Component} from 'react';
import axios from 'axios'
class DataSource extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }
componentDidMount() {
        this.fetchData()
}

componentDidUpdate = (prevProps) => {
        if(prevProps.query!==this.props.query || prevProps.trigger!==this.props.trigger) {
            this.fetchData()
        }
}

    fetchData = async () => {
        const {endpoint, query} = this.props
        let response = await axios.get(endpoint, {params:{...query}})
        console.log(response)
        if(response.statusText ==='OK') {
            this.setState({
                data: response.data.data
            })
            console.log(this.state)
        }
    }
    addToCart = async(id) => {

        let response = await fetch(`http://localhost:3002/cart/${id}`, {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
            },
        });
        if(response.ok) {

            this.props.setrigger(!this.props.trigger)
            console.log(this.props)
            this.fetchData()
        }
    }
    removeFromCart = async(id) => {

        let response = await fetch(`http://localhost:3002/cart/${id}`, {
            method: 'delete',
            headers: {
                "Content-Type": "application/json",
            },
        });
        if(response.ok) {

            this.props.setrigger(!this.props.trigger)
            console.log(this.props)
            this.fetchData()
        }
    }
    decrementQuantity = async(id) => {

        let response = await fetch(`http://localhost:3002/cart/${id}/decrement-qty`, {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
            },
        });
        if(response.ok) {

            this.props.setrigger(!this.props.trigger)
            console.log(this.props)
            this.fetchData()
        }
    }

    render() {
        return React.cloneElement(this.props.children, {... this.state,
            addToCart:(id)=>this.addToCart(id),
            removeFromCart:(id)=>this.removeFromCart(id),
                decrementQuantity:(id)=>this.decrementQuantity(id)}

            )
    }
}

export default DataSource;