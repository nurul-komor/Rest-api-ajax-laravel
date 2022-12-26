<!-- Modal -->
<div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <form method="post" id="create-user" enctype="multipart/form-data">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="username" class="form-control" id="username" aria-describedby="username"
                            placeholder="Enter username" name="username">
                    </div>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                            placeholder="Enter email" name="email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                    </div>
                    <div class="form-group">
                        <label for="gender">Gender</label>
                        <select name="gender" id="gender" class="form-select">
                            <option value="" selected>-- please select gender --</option>
                            <option value="m">Male</option>
                            <option value="f">Female</option>
                            <option value="o">Prefer not to say</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="image">Photo</label>
                        <input type="file" class="form-control" id="image" aria-describedby="image"
                            name="image">
                    </div>
                    <div class="form-group">
                        <label for="address">Address</label>
                        <textarea rows="5" class="form-control" id="address" aria-describedby="address" name="address"></textarea>
                    </div>
                </div>
                <input type="text" name="action" id="action" value="createUser">
                <input type="hidden" name="edit_id" id="edit-id">
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="sumbit" class="btn btn-primary">Sumbit</button>
                </div>
            </div>
        </div>
    </form>
</div>
