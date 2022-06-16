import PropTypes from 'prop-types'
const CounterApp = ( { value } ) => {
    return(
            <div id="counterContainer" className="row">
                <div className="col">
                    <h1 id='counter-title'> CounterApp </h1>
                    <h2 id="counter">{ value }</h2>
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