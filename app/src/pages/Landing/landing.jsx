import React from "react";
import M from "materialize-css";
import { useEffect } from "react";
import "../Landing/landing.scss";


// useEffect tells React to do something after render. 
const Landing = () => {
    useEffect(() => {
        var elems = document.querySelectorAll(".parallax");
        M.Parallax.init(elems);
      }, []);

    return (
<>
        <div class="parallax-container">
        <div class="parallax"><img alt="Organization" src="https://images.unsplash.com/photo-1611079829529-fe31a9531295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/></div>
      </div>
      <div class="section #6d4c41 brown darken-1">
        <div class="row container">
          <h2 class="header">Progressive Toolkit</h2>
          <p class="grey-text text-darken-3 lighten-3" class="color">This application features several helpful tools to make your life easier! </p>
        </div>
      </div>
      <div class="parallax-container">
        <div class="parallax"><img alt="Image-of-tree" src="https://images.unsplash.com/photo-1526635563471-a02b6aa977ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"/></div>
      </div>
      <div class="section #6d4c41 brown darken-1">
        <div class="row container">
          <h2 class="header">Login or Sign Up?</h2>
          <p class="grey-text text-darken-3 lighten-3" class="color">You can create a free account for a personalized experience. All your data will be saved. Or you can use as a guest. </p>
        </div>
        </div>
        <div class="parallax-container">
        <div class="parallax"><img alt="Image-of-tree" src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"/></div>
      </div>
      <div class="section #6d4c41 brown darken-1">
        <div class="row container">
          <h2 class="header">Applications</h2>
          <p class="grey-text text-darken-3 lighten-3" class="color">Welcome to the application picking.</p>
        </div>
        </div>
        <div class="parallax-container">
        <div class="parallax"><img alt="Image-of-tree" src="https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"/></div>
      </div>
      
      </>
  
    )

    

}

export default Landing;