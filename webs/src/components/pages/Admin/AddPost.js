import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import * as AdminActions from '../../../store/actions/adminAction';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const styles = theme => ({
  container: {
    margin: theme.spacing.unit * 3
  },
  formControl: {
    margin: theme.spacing.unit
  }
});

class AddPost extends Component {
  render(){
    const {classes} = this.props;

    return (
      <div className={classes.container}>
        <h1> Add Post </h1>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="title">Title</InputLabel>
          <Input
            id="title"
            name="title"
          />
        </FormControl>
      </div>
    )
  }
}

const mapStateToProps = states => ({
  auth: states.auth,
  admin: states.admin
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFormik({
  mapPropsToValues: () => ({
    title: '',
    slug: '',
    createdAt: '',
    status: false,
  }),
  validationSchema: Yup.object().shape({

  }),
  handleSubmit: (value, {setSubmitting}) => {

  }
})(withStyles(styles)(AddPost)));