<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attribute extends Model
{
    use HasFactory;
    protected $fillable = ['name'];
    public function Products(){
        return $this->belongsToMany(Product::class,'product_attribute');
    }
    public function attributeValues(){
        return $this->belongsToMany(AttributeValue::class,'attribute_values');
    }

   
}
