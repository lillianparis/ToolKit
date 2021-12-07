import React from "react";
import M from "materialize-css";
import { useEffect } from "react";


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
      <div class="section white">
        <div class="row container">
          <h2 class="header">Parallax</h2>
          <p class="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
        </div>
      </div>
      <div class="parallax-container">
        <div class="parallax"><img alt="Image-of-tree" src="https://images.unsplash.com/photo-1638729330060-b9bafd5f9eb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/></div>
      </div>
        </>
    )

    

}

export default Landing;