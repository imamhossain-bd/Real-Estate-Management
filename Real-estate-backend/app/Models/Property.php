<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    //
    use HasFactory;

    protected $fillable = ['property_name', 'type', 'price', 'status', 'bedrooms', 'bathrooms', 'square_foot', 'floor', 'zip_code', 'city', 'country', 'property_address', 'image', 'owner_id'];

}
