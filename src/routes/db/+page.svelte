<script>
    import { db } from '$lib/assets/main'

    let data
    db.read('users', (val) => {
        data = val
        console.log(val)
    })
</script>

{#if data}
    {JSON.stringify(data)}
{/if}