<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDetailTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detail', function (Blueprint $table) {
            $table->id();
            $table->string('amount');
            $table->string('residual');
            $table->string('repayment');

            $table->integer('loanAmount');
            $table->integer('term');

            $table->string('vehicleMake');
            $table->string('vehicleModel');
            $table->integer('buildYear');
            $table->string('isVehicle');
            $table->string('supplier');

            $table->string('fullName');
            $table->integer('mobile');
            $table->string('occupation');
            $table->integer('telephone');
            $table->string('email');
            $table->integer('postcode');
            $table->integer('income');
            $table->string('perDuration');

            $table->string('repay');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('detail');
    }
}
