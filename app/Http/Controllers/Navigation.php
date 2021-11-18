<?php

namespace App\Http\Controllers;

use App\Models\Test;
use App\Models\TestB;
use Illuminate\Http\Request;
use Validator;

class Navigation extends Controller
{
    // protected $redirect = '/main-page';
    // protected $redirectRoute = '/p/create';
    public function thanks()
    {
        return view('About');
    }
    public function valid(Request $request)
    {
        $validator = Validator::make($request->all(), [
            // Form 1
            'loanAmount'=>'bail|integer|required',
            'term'=>'bail|integer|required',
            // Main Page
            'amount'=>'bail|string|required',
            'residual'=>'bail|string|required',
            'repayment'=>'bail|string|required',
            //Form 2
            'vehicleMake'=>'bail|string|required',
            'vehicleModel'=>'bail|string|required',
            'buildYear'=>'bail|string|required',
            'isVehicle'=>'bail|string|required',
            'supplier'=>'bail|string|required',
            // Form 3
            'fullName'=>'bail|string|required',
            'mobile'=>'bail|string|required',
            'occupation'=>'bail|string|required',
            'telephone'=>'bail|string|required',
            'email'=>'bail|string|required',
            'postcode'=>'bail|string|required',
            'income'=>'bail|string|required',
            'perDuration'=>'bail|string|required',
            // Final Page
            'repay'=>'bail|string|required',
        ]);
        if ($validator->fails())
        {
            return (0);
        }
        else{
            return (1);
        }
        // $test = new TestB();
        // $test->loanAmount = $request->input('loanAmount');
        // $test->term = $request->input('term');
        // $test->loanAmount = $request->input('vehicleMake');
        // $test->term = $request->input('vehicleModel');
        // // Form 1
        // $test->loanAmount = $request->input('loanAmount');
        // $test->term = $request->input('term');
        // // Main Page
        // $test->amount = $request->input('amount');
        // $test->residual = $request->input('residual');
        // $test->repayment = $request->input('repayment');
        // //Form 2
        // $test->vehicleMake = $request->input('vehicleMake');
        // $test->vehicleModel = $request->input('vehicleModel');
        // $test->buildYear = $request->input('buildYear');
        // $test->isVehicle = $request->input('isVehicle');
        // $test->supplier = $request->input('supplier');
        // Form 3
        // $test->fullName = $request->input('fullName');
        // $test->mobile = $request->input('mobile');
        // $test->occupation = $request->input('occupation');
        // $test->telephone = $request->input('telephone');
        // $test->email = $request->input('email');
        // $test->postcode = $request->input('postcode');
        // $test->income = $request->input('income');
        // $test->perDuration = $request->input('perDuration');
        // dd($test);
        // if ($validator->fails())
        // {
        //     return (0);
        // }
        // else{
        //     return ($test->loanAmount);
        // }
        // $test->save();
        // Final Page
        // $test->repay = $request->input('repay');
        
        
        // return($test->save());
    }
}
