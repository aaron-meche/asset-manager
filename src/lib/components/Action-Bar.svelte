<script>
    
</script>

<!--  -->

<div class="wrapper hoz-scroll">
    <button class='item'>Rename Workspace</button>
    <button class='item'>Collaborate</button>
    <button class='item'>Project Settings</button>
    <button class='item'>Download Data</button>
    <button class='item special'>Delete Workspace</button>
</div>

<!--  -->

<style>
    .wrapper{
        padding: 0 25px;
        font-size: 0;
        border-bottom: solid 2px var(--fg);
    }

    .wrapper > *{
        display: inline-block;
        font-size: initial;
    }

    .item{
        font-size: 10pt;
        padding: 10px 0;
        margin-right: 25px;
        cursor: pointer;
    }

    .item:hover{
        box-shadow: inset 0 -1px var(--accent);
    }

    .special{
        color: orangered;
    }
</style>