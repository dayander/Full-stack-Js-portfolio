import React from 'react';

class Header extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            h1: this.props.h1,
            h2: this.props.h2,
            img: this.props.img,

        }
    }


    render(){
        const h2 = <h2>{(this.state.h2)}</h2>
        return(
            <div>
                <div style={{ backgroundImage: `url(${this.state.img})`}} className='jumbotron header-image'>
                    <div className='container'>
                        <h1>{this.state.h1}</h1>
                        {(this.state.h2)?(h2):('')}

                    </div>
                </div>

            </div>
        )
    }

}


export default Header;