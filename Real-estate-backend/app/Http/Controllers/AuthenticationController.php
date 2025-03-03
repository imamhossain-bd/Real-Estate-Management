<?php

namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;



class AuthenticationController extends Controller
{
    public function register(Request $request)
    {

        $data = $request->only('email','name','password');

        if(!isset($data['name']) || !isset($data['email']) || !isset($data['password'])){
            return response()->json(['error'=>'Missing required fields (name,email,password)'], 400);
        }

        $check_exist = User::where('email','=',$data['email'])->first();

        if($check_exist){
            return response()->json(['error'=>'Email already exist'], 400);
        }
            
        $user = User::create($data);

         

            return response()->json(['data'=>$user,'msg'=>'register successfully'],201);

    }

    // Login Controller
    public function login(Request $request)
{
    $data = $request->only('email', 'password');

    // Validate missing fields
    if (!isset($data['email']) || !isset($data['password'])) {
        return response()->json(['message' => 'Missing required fields (email, password)'], 400);
    }

    // Check if user exists
    $check_exist = User::where('email', '=', $data['email'])->first();
    if (!$check_exist) {
        return response()->json(['message' => 'Account Not Found'], 400);
    }

    // Validate password
    if (!Hash::check($data['password'], $check_exist->password)) {
        return response()->json(['message' => 'Account With Invalid Credentials'], 400);
    }

    // Generate Token (if using sanctum or JWT)
    // $token = $check_exist->createToken('authToken')->plainTextToken;

    return response()->json([ 'msg'=>'Login Successfully',
        'password'=>$data['password'],
        'hash'=>$check_exist['password']
    ], 200);
}

}