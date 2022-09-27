<script>
    import "../app.css";
    let dark = false;

    const changeTheme = () => {
        dark = !dark;
    };
</script>

<div class="navbar bg-base-100">
    <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl" href="/">Calendar</a>
    </div>
    <div class="flex-none">
        <span class="px-4">Theme</span>
        <input
            on:click={changeTheme}
            type="checkbox"
            class="toggle justify-end"
        />
    </div>
</div>

<slot />

<footer class="footer bottom footer-center p-10 bg-base-200 text-base-content">
    <div class="grid grid-flow-col gap-4">
        <a href="/about" class="link link-hover">About us</a>
        <a href="/contact" class="link link-hover">Contact</a>
    </div>
    <div>
        <p>Copyright © 2022 - All right reserved by Edward Way</p>
    </div>
</footer>
