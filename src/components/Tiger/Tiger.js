import React from 'react';

const Tiger = () => {
    return (
        <div className="tiger-container">
            <div className="tiger">
                <div className="tiger-head">
                  <div className="ear"></div>
                  <div className="ear"></div>
                  <div className="face">
                    <div className="eye"></div>
                    <div className="eye"></div>
                    <div className="nose"></div>
                    <div className="mouth"></div>
                  </div>
                </div>
                <div className="tiger-body">
                  <div className="stripe"></div>
                  <div className="stripe"></div>
                  <div className="stripe"></div>
                  <div className="stripe"></div>
                  <div className="stripe"></div>
                </div>
                <div className="tiger-tail"></div>
            </div>
        </div>
    );
}

export default Tiger;
