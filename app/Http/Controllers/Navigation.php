<?php

namespace App\Http\Controllers;

use App\Models\Test;
use Illuminate\Http\Request;

class Navigation extends Controller
{
    public function valid(Request $request)
    {
        // $data = request('image');
        // dd($data);
        // $data = request()->validate([
        //     // another-field-that-doesn't-need-validation=>[], 
        //     'loanAmount'=>'int',
        // ]);
        // $image_request=request('image')->store('upload','public');//This tells that store the image in public/uploads folder.
        // // // dd($request);
        // $data = $request->input('loanAmount');
        // return redirect('/');
        $test = new Test;
        $test->loanAmount = $request->input('loanAmount');
        $test->term = $request->input('term');
        $test->save();
        return ("Worked");
    }
}
