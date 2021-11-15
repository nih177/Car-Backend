<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    use HasFactory;
    protected $table = 'testa';//Creating a table in database
    protected  $fillable = [
        'loanAmount',
        'term',
    ];
}
