'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProjects, getHome,getOne} from '../../actions/projectsActions';

import {Jumbotron, Button, Grid, Row, Col, Well} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {Link} from 'react-router';

import PullQuote from '../pullQuote';
import ProjectLarge from '../projectLarge';

import {updateCounter} from "../../actions/headerActions";

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            header: ['an Accessibility Advocate', 'a Snowboarder', 'Determined', 'Self-Motivated', 'Anderson Day'],
            img: '/images/home1.png',
            headerText:'',
            counter: 0,
            isMounted: false,
            to: '/vim',
            to1: '/alc',
            to2: '/usa',
            projcets: [],
            vim: {getter:''},
            alc:this.props.projects.projects[1],
            p3:this.props.projects.projects[2],
            projectName: '',
            getter:'',
            bgImage:'/',

        }
    }


    componentDidMount(){



        document.title = "Anderson Day's Portfolio";



        // Set focus to the content container
        document.getElementById('app').focus();

        // Ensure the viewport returns to the top of the document window
        window.scrollTo(0, 0);


        this.props.getProjects();

       //this.interval = this.updateHeader()\



        this.setState({
            isMounted: true,
            bgImage: this.props.projects,
            vim: this.props.projects.projects[0],
        });

        this.myInterval = setInterval(this.updateHeader.bind(this), 2000)



        }
    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    findVIM(project){
        return project.projectName === 'VIM';
    }

    updateHeader(){

            if(this.state.counter<4){
                this.setState((prevState, props) => ({
                    counter: prevState.counter + 1
                }));}else{
                this.setState(()=>({
                    counter: 0
                }))
            }


    }

    shouldComponentUpdate(nextProps, nextState){
        return true;
    }



    render(){
        const homePageList = this.props.projects.projects.map((projects, i)=>{
            return(
                <ProjectLarge key={i}
                              companyName={projects.projectName}
                              projectHeading={projects.projectHeading}
                              getter={projects.getter}
                              project={projects}
                              to={projects.getter}
                              img={projects.bgImage}/>
            )
        });





        return(
            <div>


            <div  className='jumbotron header-image'>
                <div className='container'>
                    <h1>Anderson Day</h1>

                    <h2>I am {this.state.header[this.state.counter]}</h2>
                </div>
            </div>




        <PullQuote
            header={'Creating for Everyone'}
            body={'I do lots of cool things. From design, to research to coding. ' +
'If it challenges me ill do it'}
/>
                <PullQuote
                    header={"Developing From the User's Perspective"}
                    body={`Studying Experience Architecture has allowed
                     me to write code from the users perspective.
                     Writing accessibile code, and user-first code
                      allows me to write more meaningful code for you.`}
                />
                <PullQuote
                    header={'Creating for Everyone'}
                    body={'I do lots of cool things. From design, to research to coding. ' +
                    'If it challenges me ill do it'}
                />





<Well>
    <Row>
        <Col xs={12}>
                {homePageList[0]}
        </Col>
    </Row>
    <Row>
        <Col xs={12} sm={6}>
            {homePageList[1]}
        </Col>
        <Col xs={12} sm={6}>

            {homePageList[2]}

        </Col>
    </Row>


</Well>
            </div>



        )
    }

}

const mapStateToProps = (state)=>{
    return{
        counter: state.counter,
        projects: state.projects,
        vim: state.vim,
        alc: state.alc,
        getter: state.getter,

    }
};

const mapDispatchToProps= ( dispatch) =>{
    return bindActionCreators(
        {
            getProjects,
            getHome,


        }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
