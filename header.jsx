import React from 'react';

function Header(props) {
    return (
        <>
            <div className={"bg-dark text-center text-white"}>
        <ul className={"d-flex align-items-center justify-content-center gap-5 "} style={{color:"yellow", listStyle:"none",padding:"20px",cursor:"pointer"}}>
            <li>List Notes</li>
            <li>Add Notes</li>
        </ul>
            </div>
        </>
    );
}

export default Header;