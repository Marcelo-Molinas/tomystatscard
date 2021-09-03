import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
<Layout>
        <Seo title="Tomas Molinas Tarjeta de estadisticas" />
    
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Saira+Semi+Condensed:300,400,700" />
        <div class="wrapper">
            
            <div class="fut-player-card">

                <div class="player-card-top">
                    <div class="player-master-info">
                        <div class="player-rating"><span>88</span></div>
                        <div class="player-position"><span>P.D.</span></div>
                        <div class="player-nation"><img src="https://selimdoyranli.com/cdn/fut-player-card/img/argentina.svg" alt="Argentina" draggable="false" /></div>
                        <div class="player-club"><img src="https://github.com/marcelo3475/images/blob/main/Club_italiano_logo.png?raw=true" alt="Club Italiano" draggable="false" /></div>
                    </div>
                    <div class="player-picture"><img src="https://github.com/marcelo3475/images/blob/main/tomascuerpo_adobespark.png?raw=true" alt="Tomas Molinas" draggable="false" />
                        <div class="player-extra"><span>4*SM</span><span>4*WF</span></div>
                    </div>
                </div>
                <div class="player-card-bottom">
                    <div class="player-info">
                        
                        <div class="player-name"><span>MOLINAS</span></div>
                        <div class="player-features">
                            <div class="player-features-col"><span>
                                    <div class="player-feature-value">Rgt</div>
                                    <div class="player-feature-title">Pil.</div>
                                </span><span>
                                    <div class="player-feature-value">220</div>
                                    <div class="player-feature-title">Lb.</div>
                                </span><span>
                                    <div class="player-feature-value">178</div>
                                    <div class="player-feature-title">Hgt</div>
                                </span></div>
                            <div class="player-features-col"><span>
                                    <div class="player-feature-value">30</div>
                                    <div class="player-feature-title">Tries</div>
                                </span><span>
                                    <div class="player-feature-value">25</div>
                                    <div class="player-feature-title">Games</div>
                                </span><span>
                                    <div class="player-feature-value">15</div>
                                    <div class="player-feature-title">Wins</div>
                                </span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</Layout>
)

export default IndexPage
