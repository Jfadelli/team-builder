import React from 'react';

const Form = props => {

    const handleChanges = event => {
        props.setMember({ ...props.member, [event.target.name]: event.target.value })
    }

    const submitForm = event => {
        event.preventDefault()
        props.setMember(props.member)
        props.setMember({ name: "", email: "", role: "", })
    }
    console.log(props.member)
    return (
        <form className="form" onSubmit={submitForm}>
            <label htmlFor="name">
                Name
                <input id="name" type="text" placeholder="Enter Full Name"
                    onChange={handleChanges} value={props.member.name} name="name" />
            </label>
            <label htmlFor="email">
                email
                <input id="email" type="text" placeholder="Enter E-Mail"
                    onChange={handleChanges} value={props.member.email} name="email" />
            </label>
            <label htmlFor="role">
                role
                <input id="role" type="text" placeholder="Enter Role"
                    onChange={handleChanges} value={props.member.role} name="role" />
            </label>
            <button type="submit">Commit to List</button>
        </form>
    )
}

export default Form