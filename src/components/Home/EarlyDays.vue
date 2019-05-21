<template>
    <div>
        <Titles :viewport="viewport" scene="earlyTitle">
            <h1 class="title" v-if="viewport.is568">
                EarlyDays<br>
                (<span class="params">2011,2008</span>)
            </h1>
            <h1 class="title" v-else>
                EarlyDays(<span class="params">2008,2011</span>)
            </h1>

            <div class="std">
                <p class="-gray">&lt;table-yes&gt;</p>
            </div>

            <div class="clouds cloud-1"></div>

            <div class="pepe bg-head">
                <div class="blink"></div>
                <div class="keyboard"></div>
                <div class="minas"></div>
                <div class="rio">
                    <div class="particles"></div>
                    <div class="vase">
                        <div class="bg-rio_vase_foliage_3"></div>
                        <div class="bg-rio_vase_foliage_2"></div>
                        <div class="bg-rio_vase_foliage_1"></div>
                        <div class="bg-rio_vase"></div>
                    </div>
                    <div class="bg-rio_pao_cristo"></div>

                    <div class="waterfall"></div>

                    <div class="bg-rio_palmtree_1"></div>
                    <div class="bg-rio_palmtree_2"></div>
                </div>
                <div class="am-pa">
                    <div class="bg-ampa_foliage_3"></div>
                    <div class="bg-ampa_tree_2"></div>
                    <div class="bg-ampa_foliage_2"></div>
                    <div class="bg-ampa_parrot_wing"></div>
                    <div class="bg-ampa_foliage_1"></div>
                    <div class="bg-ampa_ver_o_peso"></div>
                    <div class="bg-ampa_tree_1"></div>
                    <div class="bg-ampa_oxes"></div>
                </div>
                <div class="metals">
                    <div class="bg-metals_sax"></div>
                    <div class="bg-metals_trumpet"></div>
                    <div class="bg-metals_trombone">
                        <div class="bg-metals_trombone_thing"></div>
                    </div>
                </div>

                <div class="bonfim-church"></div>
                <div class="bonfim b1"></div>

                <div class="ear bg-head-ear"></div>
            </div>

            <div class="clouds cloud-2"></div>
            <div class="clouds cloud-3"></div>

            <div class="pepe-scenery" role="img" aria-labelledby="pepeDesc">
                <p class="ariaLabel" id="pepeDesc">A floating head carrying musical instruments in the ear, foliage
                    and monuments in the hair, flies over a greenish ocean during the sunset</p>
                <div class="sky"></div>
                <div class="ocean">
                    <div class="sky-mask"></div>
                    <div class="ocean-waves w1"></div>
                    <div class="ocean-waves w2"></div>
                </div>
            </div>
        </Titles>

        <section class="scene" id="early-days">
            <div class="static-container">
                <div class="std">
                    <p>
                        Design & illustration.
                    </p>
                    <p class="-big">
                        A frontend developer<br>
                        <span class="-purple">with one foothold in arts.</span>
                    </p>
                </div>
            </div>
        </section>
        <section class="scene" id="early-days2">
            <div class="static-container">
                <div class="std">
                    <p class="-big">
                        <span class="-purple">Freelancing</span> & <span class="-purple">startuping,</span><br>
                        <span class="-purple">Inches</span> & <span class="-purple">pixels.</span>
                    </p>
                    <p>
                        Illustrating album arts, book covers, and billboards as a freelancer.
                        And designing websites, online magazines, and news portals at my first web studio.<br>
                    </p>
                </div>
            </div>
        </section>
        <section class="scene" id="early-days3">
            <div class="static-container">
                <div class="std">
                    <p>
                        We've proudly fueled the starring<br>
                        of some big Brazilian names such as
                        <span class="-big -purple"><i>Porta dos Fundos</i>, <i>Kibe Loco</i>, Fhits.tv, <i>Galo Frito</i></span>
                        among many others...
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Titles from "./Titles.vue";

    export default {
        props: {
            viewport: Object
        },
        name: 'EarlyDays',
        components: {
            Titles,
        }
    }
</script>