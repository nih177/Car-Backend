<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTestbTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('testb', function (Blueprint $table) {
            $table->id();
            $table->string('fullName');
            $table->integer('mobile');
            $table->string('occupation');
            $table->integer('telephone');
            $table->string('email');
            $table->integer('postcode');
            $table->integer('income');
            $table->string('perDuration');
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
        Schema::dropIfExists('testb');
    }
}
