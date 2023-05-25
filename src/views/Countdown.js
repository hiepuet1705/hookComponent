import React from "react";

class CountDown extends React.Component {

    state = {
        count: 10
    }
    timer = null
    componentDidMount() {
      this.timer = setInterval(()=>{

        this.setState({
            count: this.state.count - 1,
        })
       },1000)
    }
    componentDidUpdate(prevProps,prevState){
        console.log('did update')
        if(prevState.count !==  this.state.count && this.state.count === 0 ){
            if(this.timer){
                clearInterval(this.timer);
                this.props.onTimeUp();
            }
        }
    }
    render() {
        return (<div>

            {this.state.count}
        </div>)
    }

}




export {CountDown}