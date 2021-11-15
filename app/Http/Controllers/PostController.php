<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use SebastianBergmann\Environment\Console;

class PostController extends Controller
{
    public function create()
    {
        return view('About');
    }
                                                            
    public function store(Request $request)
    {
        // dd("Hello");
        dd(request('image'));
        $data = request()->validate([
            // another-field-that-doesn't-need-validation=>[],
            
            'image'=>'required|image',
        ]);
        // dd($data);
        $image_request=request('image')->store('upload','public');//This tells that store the image in public/uploads folder.
        // echo("Hello");
        // console.log("Hello");
        // dd("Hello");
        
        return redirect('/');
        // return view('welcome');
    }
}
