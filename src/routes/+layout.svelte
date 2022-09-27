<script>
    import "../app.css";
</script>

<div class="navbar bg-base-100">
    <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl" href="/">Calendar</a>
    </div>
    <div class="flex-none">
        <span class="px-4">Theme</span>
        <input type="checkbox" class="toggle justify-end" />
    </div>
</div>
<slot />
