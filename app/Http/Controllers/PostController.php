<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    public function create()
    {
        return view('About');
    }
                                                            
    public function store()
    {
        $data = request()->validate([
            // another-field-that-doesn't-need-validation=>[],
            
            'image'=>'required|image',
        ]);
        $image_request=request('image')->store('upload','public');//This tells that store the image in public/uploads folder.
        
        
        return redirect('/');
    }
}
