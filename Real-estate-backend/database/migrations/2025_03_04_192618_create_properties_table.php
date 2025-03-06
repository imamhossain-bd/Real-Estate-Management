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
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->string('property_name');
            $table->enum('type', ['residential', 'commercial', 'land', 'rental']);
            $table->decimal('price', 10, 2);
            $table->enum('status', ['available', 'sold', 'rented']);
            $table->integer('bedrooms')->nullable();
            $table->integer('bathrooms')->nullable();
            $table->integer('square_foot')->nullable();
            $table->integer('floor')->nullable();
            $table->string('zip_code')->nullable();
            $table->string('city');
            $table->string('country');
            $table->string('property_address');
            $table->string('image')->nullable(); // Property image field
            $table->integer('owner_id')->constrained('owners')->onDelete('cascade'); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};
