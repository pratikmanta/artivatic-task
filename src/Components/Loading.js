import React from 'react';

const Loading = (props) => {
    if(props.loading){
        return (  
            <div style={styles.loadingContainer} className="d-flex justify-content-center align-items-center">
                <h1 className="spinner-border text-primary"></h1>
            </div>
        )
    }
    return (
        <>
            {props.children}
        </>
    )
}

const styles = {
    loadingContainer: {
        height: '90vh',
    }
}



export default Loading;
