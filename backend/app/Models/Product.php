<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ['name','price','description'];
    public function images()
    {
        return $this->morphMany('App\Models\Image', 'imageable');
    }
    public function Ratings(){
        return $this->hasMany(Rating::class);
    }
    public function attributes(){
        return $this->belongsToMany(AttributeValue::class,'product_attribute_value','product_id','attribute_value_id');
    }
    
}
