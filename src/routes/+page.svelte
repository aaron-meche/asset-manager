<script>
    import { db } from '$lib/assets/main'

    function launch() {
        window.open('/app', '_self')
    }
</script>

<!--  -->

<div class="card">
    <div class="title">Welcome, fellow human!</div>
    <div class="caption">Do you already have an account? If, so login with your existing account... if not, create a new account!</div>
    <div class="buttons">
        <button on:click={db.signInWithGoogle}>Login with Google</button>
        <button on:click={launch}>Continue as Guest</button>
    </div>
</div>

<!--  -->

<style>
    .card{
        width: clamp(25vw, 500px, calc(100vw - 100px));
        background: var(--fg);
        border: solid 1px gray;
        padding: 25px;
        margin: 25px auto;
        border-radius: 10px;
        display: grid;
        row-gap: 12.5px;
    }

    .title{
        font-size: 15pt;
        font-weight: 600;
        text-align: center;
    }

    .caption{
        font-weight: 300;
    }

    .buttons{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 12.5px;
        row-gap: 12.5px;
    }

    button{
        text-align: center;
        padding: 10px;
        border-radius: 10px;
        background: var(--bg);
        border: solid 1px var(--accent);
    }

    button:hover{
        text-decoration: underline;
        text-underline-offset: 2px;
        box-shadow: inset 0 0 0 1px var(--accent);
    }
</style>