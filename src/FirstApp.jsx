import PropTypes from 'prop-types';


const FirstApp = ( { title , subTitle, name} ) => {

    return(
        <>
            <h2> { title } </h2>
            <p> {subTitle} </p>  
            <p> {name} </p>
        </>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name: 'No hay name'
};

export{
    FirstApp,
};