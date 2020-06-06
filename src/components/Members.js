import React from "react";

const Members = props => {
    return (

        <div className="member-list" >
            {props.members.map(member => (
                <div className="member-card" key={member.id}>
                    <h3>Name: {member.name}</h3>
                    <p>E-Mail: {member.email}</p>
                    <p>Role: {member.role}</p>
                </div>
            ))}
        </div>
    );
};
export default Members;