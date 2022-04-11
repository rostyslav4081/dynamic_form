import React, {Component} from 'react';
import InputTextField from "../Input/InputTextField";
import TextAreaField from "../Textarea/TextareaField";
import DropdowmSelect from "../Dropdown/DropdowmSelect";

class DynamicForm extends Component {
    state = {
        fields: [
            {
                placeholder: "Purpose of loan",
                name: "name",
                input_type: "dropdown",
                id: 34,
                required: true,
                values: [
                    "Home Loan",
                    "Business Loan",
                    "Working Capital",
                    "Personal Loan",
                    "Education Loan",
                    "Loan Against Property",
                    "Others"
                ]
            },
            {
                id: 67,
                placeholder: "Name",
                name: "remaining_values",
                input_type: "big_text",
                required: true
            },
            {
                id: 89,
                placeholder: "email",
                name: "email",
                input_type: "text",
                required: true
            },
            {
                id: 76,
                placeholder: "Prefered time to call you",
                name: "contact_time",
                input_type: "text",
                required: true
            }
        ]
    }
    submitForm = event =>{
        const { fields, ...inputFields} = this.state;
        console.log(inputFields);

        event.preventDefault();
    }
    _handleChange = event =>{
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        });
    }
    render() {
        const {fields} = this.state
        return (
            <form onSubmit={this.submitForm}>
                {
                    fields.map(form => {
                        if (form.input_type === "text") {
                            return (
                                <InputTextField
                                    id={form.id}
                                    name={form.name}
                                    placeholder={form.placeholder}
                                    required={form.required}
                                    key={form.id}
                                    _handleChange={this._handleChange}
                                />
                            );
                        }
                        if(form.input_type === "big_text"){
                            return (
                                <TextAreaField
                                    id={form.id}
                                    placeholder={form.placeholder}
                                    required={form.required}
                                    key={form.id}
                                    _handleChange={this._handleChange()}
                                />
                            );
                        }
                        if(form.input_type === "dropdown"){
                            return (
                                <DropdowmSelect
                                    id={form.id}
                                    name={form.name}
                                    placeholder={form.placeholder}
                                    required={form.required}
                                    val={form.values}
                                    key={form.id}
                                    _handleChange={this._handleChange()}
                                />
                            )
                        }
                    })

                }
                <input type="submit"/>
            </form>
        );
    }
}

export default DynamicForm;