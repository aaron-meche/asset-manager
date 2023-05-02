<script>
    import Navigation from '$lib/components/Navigation.svelte'
    import ActionBar from '$lib/components/Action-Bar.svelte'

    import LinkItem from '$lib/components/Link-Item.svelte'
</script>

<!--  -->

<div class="app">
    <div class="navigate">
        <Navigation/>
        <ActionBar/>
    </div>
    
    <section>
        <div class="title">
            Important Links
            <button>+ New</button>
        </div>

        <div class="content">
            <LinkItem title='Google Search' link='https://google.com/search/Project%20Ocean'/>
            <LinkItem title='VSCode Session' link='https://code.visualstudio.com/live-share/2883-sdf-2342-gds'/>
            <LinkItem title='Dog Photo' link='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vpENuVG6_Ke79c0shGAHMQHaFn%26pid%3DApi&f=1&ipt=03df3cdf5742390d185c6ea936e1280f85807c886a15a6abc462b9c56f5e6e15&ipo=images'/>
            <LinkItem title='Presentation File' link='https://slides.google.com/uid3744/2939888327273'/>
        </div>
    </section>
    
    <section>
        <div class="title">
            Sources
            <button>+ New</button>
        </div>

        <div class="content">
            <LinkItem title='Department of Health' link='https://usa.gov/health'/>
            <LinkItem title='Department of Transporation' link='https://usa.gov/health'/>
            <LinkItem title='White House' link='https://usa.gov/health'/>
            <LinkItem title='CDC Guidlines' link='https://usa.gov/health'/>
            <LinkItem title='Life of the Pet Article' link='https://usa.gov/health'/>
            <LinkItem title='Truth of the Heart Article' link='https://usa.gov/health'/>
            <LinkItem title='Speak your Artery PDF' link='https://usa.gov/health'/>
            <LinkItem title='Veins, Bones, and Everything Else PDF' link='https://usa.gov/health.pdf'/>
        </div>
    </section>
</div>

<!--  -->

<style>
    .app{
        display: grid;
        row-gap: 25px;
        padding: 10px;
    }

    .navigate{
        display: grid;
        row-gap: 10px;
    }

    section{
        display: grid;
        row-gap: 15px;
        padding: 25px;
        border-radius: 10px;
    }

    section > .title{
        font-size: 15pt;
        font-weight: 600;
        padding-bottom: 5px;
        border-bottom: solid 2px gray;
    }

    section > .title > button{
        font-size: 12pt;
        font-weight: 400;
        text-transform: uppercase;
        color: var(--accent);
        margin-left: 5px;
    }

    section > .title > button:hover{
        border-bottom: solid 1px var(--accent);
    }

    section > .content{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 15px;
    }
</style>