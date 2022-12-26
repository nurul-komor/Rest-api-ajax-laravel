$(document).ready(function () {
    let modal = $("#userModal");
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    function getRow(index, data, gender, url) {
        let user = "";

        user = `<tr class="">
                    <th scope="row">${index}</th>
                    <th scope="col">${data.name}</th>
                    <th scope="col">${data.email}</th>
                    <th scope="col">${data.address}</th>
                    <th scope="col">${gender}</th>
                    <th scope="col"><img loading="lazy" style="max-width: 120px; heigh:auto"
                            src="${url}/uploads/${data.image}" alt=""></th>
                    <th scope="col">
                        <button type="button"  class="btn btn-primary edit-user" data-bs-toggle="modal"
                            data-id="${data.id}" data-bs-target="#userModal">
                            Edit
                        </button>
                        <button data-id="${data.id}" type="submit" id="delete-user"
                            class="btn btn-warning delete-user-btn">Delete</button>
                    </th>
                </tr>`
        return user
    }
    function getAllRow() {
        $.ajax({
            url: "api/users",
            method: "get",
            dataType: "json",
            success: function (data, response) {
                let userList = "";
                let id = 1;
                const url = $('meta[name="url"]').attr('content');
                $.each(data.data, function (index, data) {
                    if (data.gender == "m") {
                        gender = "Male";
                    } else if (data.gender == "f") {
                        gender = "Female";
                    } else {
                        gender = "Prefer not to say";
                    }
                    userList += getRow(id, data, gender, url);
                    id++;
                });
                $("#user-table tbody").html(userList)
            },
            error: function (request, error) {
                console.log(error + "Internal server error");
                // console.log(request)
            }

        })
    }
    getAllRow()
    $(document).on("click", "#create-user-btn", function () {
        modal.find(".modal-title").html("Create User");
        $("#create-user")[0].reset();
    })
    $(document).on('submit', "#create-user", function (e) {
        e.preventDefault();
        if ($("#action").val() == "createUser") {
            $.ajax({
                url: "api/users",
                method: "post",
                dataType: "json",
                data: new FormData(this),
                processData: false,
                contentType: false,
                success: function (response, data) {
                    console.log(response)
                    $("#create-user")[0].reset();
                    $("#userModal").modal('hide')
                    getAllRow()
                    alert("created new user")
                },
                error: function (request, error) {
                    console.log(error);
                    console.log(request)
                }
            })
        }
    })
    $(document).on('click', ".edit-user", function () {
        let id = $(this).data("id");
        $("#edit-id").val(id)
        $.ajax({
            url: "api/users/" + id + "/edit",
            method: "get",
            success: function (response, index) {
                modal.find("#username").val(response.data.name);
                modal.find("#email").val(response.data.email);
                modal.find("#gender").val(response.data.gender);
                modal.find("#address").val(response.data.address);
                modal.find(".modal-title").html(response.title);
                modal.find("#action").val("editUser")
            }, error: function (error, request) {
                console.log(error)
                console.log(request)
            }
        });

    });
    $(document).on('submit', "#create-user", function (e) {
        e.preventDefault();
        id = $("#edit-id").val();
        if ($("#action").val() == "editUser") {
            let data = new FormData(this);
            data.append('_method', 'PATCH');
            $.ajax({
                url: '/api/users/' + id,
                method: "post",
                data: data,
                dataType: "json",
                processData: false,
                contentType: false,
                beforeSend: function () {

                },
                success: function (response) {
                    if (response.status == 1) {
                        console.log(response.data);
                        $("#create-user")[0].reset();
                        $("#userModal").modal('hide')
                        getAllRow()
                    }
                    else {
                        // console.log()
                        if (typeof (response) == "object") {
                            $.each(response.data, function (index, field) {
                                if (index != "") {
                                    alert(field)
                                }
                            })
                        } else {
                            alert(response)
                        }
                    }

                },
                error: function (request, error) {
                    console.log(request);
                    // console.log(error);
                    alert(request)

                }
            })


        }
    })
    $(document).on("click", ".delete-user-btn", function () {
        id = $(this).data("id")
        $.ajax({
            url: "api/users/" + id,
            method: "DELETE",
            success: function (response) {
                getAllRow()
                console.log(response)
            }, error: function (request, err) {
                console.log(request)
            }
        })
    })

});

