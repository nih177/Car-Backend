<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TestB extends Model
{
    use HasFactory;
    protected $table = 'testb';//Creating a table in database
    protected  $fillable = [
        // Form 1
        // 'loanAmount',
        // 'term',
        // // Main page
        // 'amount',
        // 'residual',
        // 'repayment',
        // Form 2
        // 'vehicleMake',
        // 'vehicleModel',
        // 'buildYear',
        // 'isVehicle',
        // 'supplier',
        // Form 3
        'fullName',
        'mobile',
        'occupation',
        'telephone',
        'email',
        'postcode',
        'income',
        'perDuration',
        // Final Page
        // 'repay'
    ];
}
