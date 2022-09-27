<!-- The button to open modal -->
<label for="my-modal" class="btn modal-button">Create new</label>

<!-- Modal for creating a new event -->
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
    <div class="modal-box">
        <h3 class="font-bold text-lg">Create a new event</h3>
        <form method="POST">
            <button class="btn btn-primary">Ok</button>
            <div class="modal-action inline-block">
                <label for="my-modal" class="btn">Cancel</label>
            </div>
        </form>
    </div>
</div>
