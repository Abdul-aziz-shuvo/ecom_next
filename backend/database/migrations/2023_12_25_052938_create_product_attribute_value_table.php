<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product_attribute_value', function (Blueprint $table) {
            $table->id();
            // $table->unsignedBigInteger('product_id');
            // $table->unsignedBigInteger('attribute_value_id');
            $table->foreignId('product_id')->constrained()->on('products');
            $table->foreignId('attribute_value_id')->constrained()->on('attribute_values');
            $table->timestamps();

            // $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
            // $table->foreign('attribute_value_id')->references('id')->on('attribute_value')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_attribute_value');
    }
};
