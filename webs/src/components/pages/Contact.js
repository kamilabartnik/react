import React, { Component } from 'react';
import Field from '../Common/Field';
import {withFormik} from 'formik';

const fields = {
  sections: [
    [
      { name: 'name', elementName: 'input', type: 'text', placeholder: 'Your Name' },
      { name: 'email', elementName: 'input', type: 'email', placeholder: 'Your Email' },
      { name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your Phone Number' },
    ],
    [
      { name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Type your message' },
    ]
  ]
}




class Contact extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     name: '',
  //     email: '',
  //     phone: '',
  //     message: '',
  //   }
  // }


  render() {
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form 
                // id="contactForm" 
                name="sentMessage" 
                noValidate="noValidate"
                onSubmit={this.props.handleSubmit}>
                <div className="row">
                  
                  {fields.sections.map((section,sectionIndex) => {
                    return (
                      <div className="col-md-6" key={sectionIndex}>
                        {section.map((field, index) => {
                          return <Field 
                            {...field} 
                            key={index}
                            value={this.props.values[field.name]}
                            name={field.name}
                            onChange={this.props.handleChange}
                            onBlur={this.props.handleBlur}
                            touched={(this.props.touched[field.name])}
                            errors={this.props.errors[field.name]}
                            />
                        })}
                      </div>
                    )
                  })}

                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button 
                      id="sendMessageButton" 
                      className="btn btn-primary btn-xl text-uppercase" 
                      type="submit"
                    >Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    phone: '',
    message: '',
  }),
  validate: values => {
    const errors = {};
    
    Object.keys(values).map(v => {
      if(!values[v]){
        errors[v] = "Required";
      }
      
    })
    return errors;
  },
  handleSubmit: (values, {setSubmitting}) => {
    alert("Submitted", JSON.stringify(values));
  }
})(Contact);