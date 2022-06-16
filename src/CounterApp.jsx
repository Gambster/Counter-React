import { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ( { value } ) => {

    const [ count, setCounter  ] = useState( value );

    const add = (e) => {

        setCounter( count + 1 );
        
    };
    
    const subtract = (e) => {
        
        setCounter( count > 0 ? count - 1 : count );
        
    };

    const reset = (e) => {

        setCounter( value );
        
    };

    return(
            <div id="counterContainer" className="row">
                <div className="col">
                    <h1 id='counter-title'> CounterApp </h1>
                    <h2 id="counter">{ count }</h2>
                    <div className="col-6">
                    <button onClick={ add }> +1 </button>
                    <button onClick={ subtract }> -1 </button>
                    <button onClick={ reset }> Reset </button>
                </div>
                </div>
            </div>
    );
    
};




CounterApp.propTypes = {
    value : PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
    value : 0,
};

export{
    CounterApp
};