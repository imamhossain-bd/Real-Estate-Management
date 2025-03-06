<?php

namespace App\Http\Controllers;


use App\Models\Property;
use Illuminate\Http\Request;

class PropertyController extends Controller
{
    //

    public function store(Request $request) {
        $validated = $request->validate([
            'property_name' => 'required|string|max:255',
            'type' => 'required|in:residential,commercial,land,rental',
            'price' => 'required|numeric|min:0',
            'status' => 'required|in:available,sold,rented',
            'bedrooms' => 'nullable|integer|min:0',
            'bathrooms' => 'nullable|integer|min:0',
            'square_foot' => 'nullable|numeric|min:0',
            'floor' => 'nullable|integer|min:0',
            'zip_code' => 'required|string|max:20',
            'city' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'property_address' => 'required|string',
            'owner_id' => 'required|exists:users,id',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
        ]);
    
        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('property_images', 'public');
        }
    
        $property = Property::create($validated);
    
        return response()->json(['message' => 'Property added successfully!', 'property' => $property], 201);
    }
    
}
