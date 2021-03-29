import React from 'react'

import './Footer.css';



export default function Footer() {
    return (
        <>
            <footer id="footerpad">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-lg-8 mx-auto">
                            <ul class="list-inline text-center">
                                <li class="list-inline-item"><a href="#"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-facebook fa-stack-1x fa-inverse"></i></span></a></li>
                                <li class="list-inline-item"><a href="#"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-twitter fa-stack-1x fa-inverse"></i></span></a></li>
                                <li class="list-inline-item"><a href="#"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-instagram fa-stack-1x fa-inverse"></i></span></a></li>
                                <li class="list-inline-item"><a href="#"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-linkedin fa-stack-1x fa-inverse"></i></span></a></li>
                            </ul>
                            <p class="copyright text-muted text-center">Copyright © AutoManiacs 2021 | Web Design by Stavrev</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
