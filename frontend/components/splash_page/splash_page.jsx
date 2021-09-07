import React from 'react';

class Splash extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props);
        return(
            <main>
            <div className='splash-nav'>
                <div className='splash-nav-logo'> 
                    ThisCord 
                </div>
                <div className='splash-nav-links'>
                    <a href="https://github.com/waj919/ThisCord" id="github-logo">
                        <i className="fab fa-github"></i>
                    </a>

                </div>
               <button className='splash-login' onClick={()=> this.props.history.push('/login')}> Login </button>
            </div>

            <section className="headline">
                <p id="headline-title">IMAGINE A PLACE...</p>
                <p id="headline-content">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
            </section>
            {/* <img id="clouds" src={window.clouds} alt="clouds" /> */}
            <img id="cartoon-left" src={window.cartoon_left} alt="cartoon_left" />
            <img id="cartoon-right" src={window.cartoon_right} alt="cartoon_right" />
        </main>
        )
    }
}

export default Splash