import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter, Link as RouterLink} from 'react-router-dom';
import Header from '../Common/Header';
import image from '../assets/img/portfolio/01-full.jpg';
import * as SiteActions from '../../store/actions/siteActions';
import BlogItem from '../Common/BlogItem'

class Blog extends Component {
  componentDidMount(){
    this.props.getPosts(0);
}
  render(){
    return(
      <div>
        <Header
          title="Blog"
          subtitle="Welcome! Read!"
          showButton={false}
          image={image}
        />
        {this.props.site.props ?
          this.props.site.props.length > 0 ?
            this.props.site.posts.map((post, i) => {
              return (
                <BlogItem 
                  post = {post}
                  key  ={i}
                />
              )
            })
          :null 
        :null}
      </div>
    )
  }
}

const mapStateToProps = state =>({
  site: state.site
})

const mapDispatchToProps = dispatch => ({
  getPost: (skip) => {
    dispatch(SiteActions.getPosts(skip));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
 )(withRouter(Blog));