<script>
    function bell(){
        alert("Ding Dong!");
    }
    function user(){
        alert("Qui est là?");
    }
</script>
<header class="flex flex-row justify-between space-y-4 items-center">
    <a href="/app">
        <img src="/logo.svg" alt="Logo" class="h-16 flex-none">
    </a>
    <div class="flex flex-row space-x-6 mr-8">
        <div class="fa-solid fa-bell fa-2x" on:click={()=>{bell();}}></div>
        <div class="fa-solid fa-user fa-2x" on:click={()=>{user();}}></div>
    </div>
</header>