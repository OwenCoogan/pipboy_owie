import React  from 'react';
import ClockContainer from 'react-live-clock';
 
class Clock extends React.Component {
    
    render(){
        return(
            <ClockContainer format={'HH:mm:ss'} ticking={true} timezone={'Europe/Paris'} />
        )
    }
}

export default Clock;