<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
   /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        $users = User::orderBy('id', 'desc')->get();
        if($users!=null){
            $data = [
                "status" => 1,
                "data" => $users
            ];
        }else{
            $data = [
                "status" => 0,
                "data" => "user not found"
            ];
        }
        return response()->json($data,200);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        echo "form";
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            "username" => "required",
            "email" => "required|email|unique:users",
        ]);
        if($validator->fails()){
            return response()->json($validator->messages(),400);
        }
        else{
        $user = new User;
        $user->name = $request->username;
        $user->email = $request->email;
        $user->address = $request->address;
        $user->gender = $request->gender;

        if(!empty($request->file("image"))){
            $destination = "uploads/";
            $fileName = time()."-".pathinfo($request->file('image')->getClientOriginalName(),PATHINFO_FILENAME).".".$request->file("image")->getClientOriginalExtension();
            $request->file("image")->move(public_path($destination),$fileName);
            $user->image = $fileName;
        }else{
            if($user->gender == "f"){
                $user->image = "female.png";
            }else{
                $user->image = "male.png";
            }

        }
        DB::beginTransaction();
        try{
            $user->save();
            DB::commit();
            return response()->json([
            "status"=>"successfully created new user"
        ],200) ;
        }catch(\Exception $e){
            DB::rollBack();
            return response()->json([
                "status" => $e->getMessage()
            ], 400);
        }
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = User::find($id);
        if(!is_null($user)){
            $data = $user;
            $resCode = 200;
        }else if(empty($user)){
            $data = "User not found";
            $resCode = 404;
        }
        return response()->json([
            "data"=>$data,
            "title" => "Edit user"
        ], $resCode);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        return response()->json("update",200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        echo $id;
    }
    public function trash(){
        echo "trashed data";
    }
}