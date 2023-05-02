<script>
    export let title, link

    let linkType = 'url'
    if (title.toLowerCase().includes('pdf') | link.toLowerCase().includes('pdf')) linkType = 'pdf'
</script>

<!--  -->

<a href={link} class="wrapper">
    <div class="title">
        <span class='label'>{linkType.toUpperCase()}</span>
        <!-- <img src="{linkType}.png" alt="Icon"> -->
        {title}
    </div>

    <div class="content">
        {link}
    </div>
</a>

<!--  -->

<style>
    .wrapper{
        overflow: hidden;
        background: var(--fg);
        border: solid 1px gray;
        padding: 15px;
        border-radius: 10px;
    }

    .wrapper:hover{
        box-shadow: inset 0 0 0 1px gray;
    }

    .title{
        font-size: 12pt;
        font-weight: 500;
        margin-bottom: 5px;
    }

    .title .label{
        font-size: 8pt;
        background: var(--bg);
        border: solid 1pt gray;
        padding: 1px 3px;
        border-radius: 3px;
    }

    .content{
        font-size: 8pt;
        font-weight: 300;
        color: gray;
    }
</style>