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
        if(prevProps.query!==this.props.query) {
            this.fetchData()
        }
}

    fetchData = async () => {
        const {endpoint, query, searchQuery} = this.props

        let response = await axios.get(endpoint, {params:{...query}})
        console.log(response)
        if(response.statusText ==='OK') {

            this.setState({
                data: response.data.data
            })
            console.log(this.state)
        }
    }

    render() {
        return React.cloneElement(this.props.children, {... this.state})
    }
}

export default DataSource;