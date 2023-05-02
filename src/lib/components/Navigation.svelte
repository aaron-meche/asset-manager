<script>

</script>

<!--  -->

<div class="wrapper hoz-scroll">
    <button class='item active'>Workspace</button>
    <!-- <button class='item'>Python AI</button> -->
    <!-- <button class='item'>Baileo</button> -->
    <button class='item special'>+ New Space</button>
</div>

<!--  -->

<style>
    .wrapper{
        background: var(--fg);
        padding: 0 25px;
        border-radius: 10px;
        font-size: 0;
    }

    .wrapper > *{
        display: inline-block;
        font-size: initial;
    }

    .item{
        font-size: 12pt;
        padding: 10px 0;
        margin-right: 25px;
        cursor: pointer;
    }

    .item.active, .item:hover{
        box-shadow: inset 0 -3px var(--accent);
    }

    .special{
        color: var(--accent);
    }
</style>