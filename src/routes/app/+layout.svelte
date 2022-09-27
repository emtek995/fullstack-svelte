<script lang="ts">
    import Sidebar from "./sidebar.svelte";
</script>

<div class="flex">
    <div class="basis-1/5 bg-neutral flex flex-col min-h-screen">
        <Sidebar />
    </div>

    <div class="basis-4/5 flex">
        <slot />
    </div>
</div>
