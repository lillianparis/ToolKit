import React from "react";
import "../Footer/footer.scss";


const Footer = () => {
    return (

        <footer class="page-footer" class="#00695c teal darken-3
        ">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">Thank You</h5>
                        <p class="white-text">You have reached the bottom of the page!</p>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">See More</h5>
                        <ul>
                            <li><a class="grey-text text-lighten-3" href="#!">Linkedln</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">Website</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">Blah Blah</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">Blah Blah</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container" id="hi">
                    © 2021 Copyright Text (Lillian Paris)
                </div>
            </div>
        </footer>

    )
}

export default Footer;