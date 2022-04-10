import React from "react";
import Container from 'react-bootstrap/Container';
import './empty_page.css';
const EmptyPage = (props) =>{
return (
    <Container>
<div class="search-message-empty-container">
  <span class="search-message-empty-decal">
    <span class="search-message-empty-decal-eyes">:</span>
    <span>(</span>
  </span>
  <h2 class="search-message-empty-message">
   {props.errorMessage}
  </h2>
</div>
    </Container>

 )
}

export default EmptyPage;