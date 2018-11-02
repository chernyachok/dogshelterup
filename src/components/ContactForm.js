import React, {Component} from 'react';

import styled from 'styled-components'
import PropTypes from 'prop-types';

const StyledP = styled.div`
  color: #524723;
  background: red;
`

class ContactForm extends Component{
  render(){
    return (
      <div className="myForm">
      <StyledP><h2>Leave your rewiew</h2></StyledP><br/><br/>
        <form>
          <input type="text" placeholder="Fullname" id="fullname"/><br/>
          <textarea value="Description" id="desc"></textarea><br/>
          <input type="submit" value="Submit" id="do_submit"/>
        </form>
      </div>
    )
  }
}

export default ContactForm
