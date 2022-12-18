@extends('layout.main')
@section('main-section')
    <header class="row">
        <div class="col-md-9">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search user..." aria-label="Recipient's username"
                    aria-describedby="basic-addon2">
                <span class="input-group-text" id="basic-addon2"><i class="fa-solid fa-magnifying-glass"></i></span>
            </div>
        </div>
        <div class="col-md-3">
            <button type="button" id="create-user" class="btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                Create User
            </button>
            <a class="btn btn-warning " href="/user/trashes">Trashes</a>
        </div>
    </header>
    <main class="row">
        @include('layout.table')
    </main>
    <footer>
        <!-- place footer here -->
    </footer>
@endsection
