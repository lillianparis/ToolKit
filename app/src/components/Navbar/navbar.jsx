import React from 'react';
import "../Navbar/navbar.scss"


function Navbar() {
    return (


      <nav class="#00695c teal darken-3">
      <div class="nav-wrapper" >
        <a href="/" class="brand-logo center" id="titlefont">Progressive Toolkit</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down" >
          <li><a class="font" href="/suggestions">Suggestions</a></li>
          <li><a class="font" href="badges.html">Contact</a></li>
          <li><a class="font" href="collapsible.html">Apps</a></li>
        </ul>
      </div>
    </nav>

)}


export default Navbar;