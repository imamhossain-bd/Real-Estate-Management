<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class AuthenticationController extends Controller
{
    //
    public function register(Request $request){

        $data = $request->only('email','name','password');

        if(!isset($data['name']) || !isset($data['email']) || !isset($data['password'])){
            return response()->json(['message'=>'Missing required fields (email,name,password)'],400);
        }

        $check_exist = User::where('email','=',$data['email'])->first();

        if($check_exist){
            return response()->json(['message'=>'Email already exist'],400);
        }
            
        $user = User::create($data);

         

            return response()->json(['data'=>$user,'msg'=>'register successfully'],201);
    }

    public function login(Request $request){

        $data = $request->only('email','password');

        if(!isset($data['email']) || !isset($data['password'])){
            return response()->json(['message'=>'Missing required fields (email,name,password)'],400);
        }

        $check_exist = User::where('email','=',$data['email'])->first();

        if(!$check_exist){
            return response()->json(['message'=>'Account Not Found'],400);
        }
            // Hash library

            if(!Hash::check($data['password'],$check_exist['password'])){
            return response()->json(['message'=>'Account With Invalid Crendentials'],400);
                
            }

            if (! $token = auth()->attempt(credentials: $data)) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
 

         

            return response()->json(['msg'=>'login successfully',
            'token'=>$token
        ],200);
    }


    public function profile(Request $request){
        $user = auth()->user();

        return [
            'msg'=>'profile fetched',
            'user'=>$user
        ];

    }

}
