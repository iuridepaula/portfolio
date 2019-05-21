<template>
    <div id="admin" class="wrapper">

        <div class="static-container">
            <h1 class="title">
                work<br v-if="viewport.is568">(<span class="params">'Admin Panel'</span>)
            </h1>

            <div class="std initial-fold">
                <p class="-purple -full" v-if="viewport.is568">
                    // Head of Project<br>
                    // UX/UI<br>
                    // Frontend<br>
                    // Magento v1
                </p>
                <p class="-purple -full" v-else>
                    // Head of Project, UX/UI and Frontend<br>
                    // Magento v1
                </p>

                <h2 class="subtitle">
                    The <s>clumsy</s> nice giant
                </h2>
                <p class="-gray">
                    How to turn something big, boring and confusing into something simple and comfortable? This was the challenge faced on the re-design of Biz Commerce's admin panel.<br>
                    Using Magento v1 as our core, we inherited this massive and complex panel, which was not helping our customers' day-to-day lives.
                </p>
            </div>

            <div class="project-start"></div>

            <div class="old-new" role="img" aria-labelledby="oldNewAlt">
                <p id="oldNewAlt" class="ariaLabel">A comparasion image between the default Magento admin panel, and the new design.</p>
                <div class="screen old">
                    <img src="@/assets/work/admin/admin-old.png" alt="">
                </div>
                <div class="screen new">
                    <img src="@/assets/work/admin/admin-new.png" alt="">
                </div>
            </div>

            <div class="std">
                <h3 class="-red">// Problems</h3>
                <ul>
                    <li>Too much information</li>
                    <li>Poor navigation</li>
                    <li>Being boring</li>
                    <li>Hard to read</li>
                    <li>Not responsive</li>
                    <li>How can I add a banner?</li>
                </ul>

                <h3 class="-green">// My role</h3>
                <p>
                    Design and prototype the solutions for every "buggy" view.<br>
                    Create a teleportation input. Shrink to mobile size.<br>
                    Develop a new interface builder from scratch.
                </p>

                <h2 class="subtitle">Teleportation</h2>

                <div class="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/oI8oSNDSWUQ?controls=1&rel=0&showinfo=0&modestbranding=1&color=purple" frameborder="0" allow="accelerometer; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <p>
                    One major problem with Magento’s panel - and any other big software like Photoshop - is the number of tools. There is simply too many of them. It does so many things, it is so great that actually you don’t know how to master it, and that is sad.
                </p>
                <p>
                    Unfortunately, like Photoshop, we could not just cut somethings out, (actually, we were developing more modules every week) so we needed to find a unique and easy way to navigate and locate stuff.
                </p>
                <p>
                    And there’s nothing better than start typing: “Prod...” and instantly seeing 72 menu items turning into 3, and you can choose one with your keyboard arrows.
                </p>
                <p>
                    By creating a search navigation shortcut, we actually eliminated the need to navigate through the menu, you no longer needed to remember where something is located, you could just start typing its name, and it’s there.<br>
                    And we could even tune the results by adding “tags” to menu items so you could find related functionalities as well.
                </p>

                <h2 class="subtitle">Ask me!</h2>
                <p>
                    Sometimes finding the right place to go is not everything, you may need some guidance. For those moments we added two options:
                </p>

                <ul>
                    <li>
                        <strong>Go to our wiki</strong> <span class="-gray"> // is that it?</span>
                        <p>
                            Sounds like nothing special, but you will not be pointed to our wiki’s home page, but the exact article about the module you are trying to use, in addition to related articles, FAQs and tutorials.
                        </p>
                    </li>
                    <li>
                        <strong>Talk to us</strong>
                        <p>
                            We added integration with our support system and you could open new tickets and ask for help, whenever you need.
                        </p>
                    </li>
                </ul>

                <p>
                    To do that we used a combination of the current page content to search for the best article in our wiki that could help you.<br>
                    Or, use that same data, and ease your way to ask for help on our support channel.
                </p>

                <div class="more-screens" role="img" aria-labelledby="ScreensAlt">
                    <p id="ScreensAlt" class="ariaLabel">Three smartphone screens and one desktop screen with differents pages of the application.</p>
                    <div class="m m1"></div>
                    <div class="m m2"></div>
                    <div class="m m3"></div>
                    <div class="d"></div>
                </div>

                <h2 class="subtitle">
                    Cheerful and<br>
                    simple design
                </h2>

                <p>
                    If you think about a serious e-commerce business, where everything is done right, and everybody is focused, the word “cheerful” may not be what comes to your mind. But it should.
                </p>
                <p>
                    Our clients, and their employees, use the same system every day, all day long, and that may be not only be boring, but also lead to errors, stress, and a perception that the system is the culprit when something bad happens.
                </p>
                <p>
                    So, we not only guide our UX through the content and functionalities, but through the people that use it every day. It should feel fresh, every day. It should feel cheerful, every day. Be a partner, not just a system.
                </p>
                <p>
                    Achieving this was hard, but using animations in the right place, happy colors, beautiful icons, smooth transitions, and a well-balanced structure have given this old panel a constant feeling of youthfulness. That is why our visual identity is what it is, we reflect our own team mindset and mood to inspire our clients to feel the same.
                </p>

                <img class="elephant" src="@/assets/work/admin/elephant.svg" alt="A big blue elephant, sitting and looking a little smartphone shaped door">

                <h2 class="subtitle">
                    Responsive.<br>
                    Because 2019.
                </h2>

                <p>
                    It may sound irrelevant since we already take it for granted, but when it comes down to e-commerce platforms responsiveness still somewhat new.
                </p>
                <p>
                    So we adapted this clumsy panel to work on small screens, and that demanded a lot of creativity because we did not touch the default HTML markup that came with Magento.<br>
                    No. Everything was made with vanilla CSS & JavaScript. We did it this way so we could keep updating our core without worrying about fixing the layout.
                </p>

                <div class="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Zvfm8c9A3rI?controls=1&rel=0&showinfo=0&modestbranding=1&color=purple" frameborder="0" allow="accelerometer; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <h2 class="subtitle">
                    Less peel, more stuffing
                </h2>
                <p>
                    Another common problem with large admin panels is that their tables, blocks, boxes, containers, buttons, etc. get in the way of its content. It may be because the designer didn’t have another way to express his “talent” and use all that gradient, shadows and colors all over these elements, but that is just bad.
                </p>
                <p>
                    You just wanna get to the content when you are using a panel, that's why we made a large lifting on all elements and components, especially the old TinyMCE used on Magento v1... oh lord, it was painful but worth it.
                </p>

                <h2 class="subtitle">Open interface</h2>
                <p>
                    Another big issue with Magento is that it is not that easy to customize its layout. Yes, of course, you have the freedom to do whatever you want with its interface, but that demands a tremendous amount of knowledge about its frontend system and of frontend itself. Now try to explain that to someone who just wants to add another banner to a specific category, and fails.
                </p>
                <p>
                    To solve that we created (what I believe was the only of its kind for Magento v1) a interface module to edit everything on your store frontend from the admin panel.
                </p>
                <p>
                    No, I’m not saying that we just have a couple of pre-set options to choose from, I’m saying besides a lot of pre-set options and default components you could rearrange all these elements, on every page, and edit its HTML, CSS, and JavaScript if you want too.
                </p>
                <p>
                    And you have a preview mode to edit your store on a production environment without harming your customers.<br>
                    And all this was saved as a theme, that you could reuse on another store, and even have a CSS and Javascript version control.
                </p>
                <p>
                    To do that we extended the default widget system and pushed it to its limits.  By creating a concept of components and placeholders, so you could create and edit any component you want, like your logo, a search box, a category menu, a banner, a slider, a product collection, a newsletter form, you name it, and then place it wherever you want, choosing not just the pages where it will be shown but where on that page. And even customize some behaviors like set an expiry date to a component, or multiple placement rules. For example show this header on every page at this position, and at the checkout page at that position.
                </p>
                <p>
                    All of that without touching a single XML file, or a PHTML template or anything, just some boxes and buttons on your panel.
                </p>

            </div>

            <nav class="work-nav">
                <h3>// More...</h3>
                <ul>
                    <li class="prev">
                        <router-link to="/work/confianca" title="Confiança">
                            <svg class="nav-ico -prev" viewBox="0 0 16 16"><path d="M5,1h10v10 M5.5,10.5l0.8-0.8"/></svg>
                            Confiança...
                        </router-link>
                    </li>
                    <li class="next">
                        <router-link to="/work/desbravando" title="Desbravando">
                            ...Desbravando
                            <svg class="nav-ico -next" viewBox="0 0 16 16"><path d="M5,1h10v10 M5.5,10.5l0.8-0.8"/></svg>
                        </router-link>
                    </li>
                </ul>
            </nav>

        </div>

    </div>
</template>

<script>
    // styles
    import '@/styles/work.scss'
    import '@/styles/work/admin.scss'
    // ScrollMagic
    import * as ScrollMagic from "scrollmagic";

    export default {
        name: 'admin',
        props: {
            viewport: Object,
        },
        data() {
            return {
                intro: new TimelineMax(),
                scroller: new ScrollMagic.Controller(),
            }
        },
        methods: {},
        mounted() {

            /**
             * @desc
             * Intro scene
             */
            this.intro
                .clear(true)
                .addLabel('enter', 1)
                .from('.title', 2, {
                    autoAlpha: 0,
                    rotationX: 20,
                    transformOrigin: '50% 50% -100px',
                    ease: Power3.easeOut,
                }, 'enter')
                .from('.std', 2, {
                    autoAlpha: 0,
                    x: -32,
                    ease: Power3.easeOut,
                }, 'enter+=1.5');

            /**
             * @desc
             * bg color scene
             */
            let sceneBg = new ScrollMagic.Scene({
                triggerElement: '.project-start',
                duration: document.body.offsetHeight
            })
                .addTo(this.scroller)
                .reverse(true);

            sceneBg
                .on('enter', (e) => {
                    document.body.classList.add('-admin-bg');
                })
                .on('leave', (e) => {
                    if(e.scrollDirection === 'REVERSE'){
                        document.body.classList.remove('-admin-bg');
                    }
                });

            /**
             * @desc
             * before-after scene
             */
            let tlComparison = new TimelineMax();

            tlComparison.to('.old-new .new', 4, {
                width: '100%',
                ease: Power0.easeNone
            });

            let sceneComparison = new ScrollMagic.Scene({
                triggerElement: '.old-new',
                duration: this.viewport.h/2
            })
                .setTween(tlComparison)
                .addTo(this.scroller)
                .reverse(true);

            /**
             * @desc
             * more screens scene
             */
            let tlMoreScreens = new TimelineMax();

            tlMoreScreens
                .staggerFrom('.more-screens .m, .more-screens .d', 4, {
                    xPercent: 100,
                    autoAlpha: 0,
                    ease: Power2.easeOut,
                    stagger: .5
                });

            let sceneMoreScreens = new ScrollMagic.Scene({
                triggerElement: '.more-screens',
                offset: -this.viewport.h/2,
                duration: this.viewport.h
            })
                .setTween(tlMoreScreens)
                .addTo(this.scroller)
                .reverse(true);

        },
        beforeDestroy() {

            this.scroller.destroy();

        }
    };
</script>
