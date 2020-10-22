import React, { Component } from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { requestApiData, getOrderDetailsAPI } from "../actions"
import Home from '../../../components/Home/PageComponent'

class HomeContainer extends Component {

    componentDidMount() {
        let orderId = 6;
        this.props.requestApiData(orderId);
    }

    render() {
        console.log("State----", this.state)
        return (
           <Home />
        );
    }
}

// const HomeContainer = () => {   

//     return(<Home />);
// }

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);