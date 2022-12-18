<div class="table-responsive">
    <table class="table table-bordered text-center">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">username</th>
                <th scope="col">email</th>
                <th scope="col">address</th>
                <th scope="col">image</th>
                <th scope="col">action</th>
            </tr>
        </thead>
        <tbody>
            @php
                $index = 1;
            @endphp
            @foreach ($users as $user)
                <tr class="">
                    <th scope="row">{{ $index++ }}</th>
                    <th scope="col">{{ $user->name }}</th>
                    <th scope="col">{{ $user->email }}</th>
                    <th scope="col">{{ $user->address }}</th>
                    <th scope="col"><img style="max-width: 120px; heigh:auto"
                            src="{{ asset('/') }}uploads/image.jpg" alt=""></th>
                    <th scope="col">
                        <button type="button" id="edit-user" class="btn btn-primary" data-bs-toggle="modal"
                            data-id="{{ $user->id }}" data-bs-target="#exampleModal">
                            Edit
                        </button>
                        <button data-id="{{ $user->id }}" type="submit" id="delete-user"
                            class="btn btn-warning">Delete</button>
                    </th>
                </tr>
            @endforeach
        </tbody>
    </table>
    {{ $user->links }}
</div>
