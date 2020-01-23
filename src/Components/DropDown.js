import React from 'react';


const DropDown = ({ data, handleChange }) => {
    return (
        <div className="">
        <select className="btn btn-primary btn-lg btn-block" onChange={handleChange} name="state">
            {data.map((e, key) => {
                return <option className="text-center" key={key} value={e.State}>{e.State}</option>;
            })}
        </select> 
      </div>
    );
};

export default DropDown;