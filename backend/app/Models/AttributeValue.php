<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AttributeValue extends Model
{
    use HasFactory;
    protected $table = 'attribute_values';
    protected $fillable = ['attribute_id','value'];
    public function Attribute(){
        return $this->belongsToMany(Attribute::class);
    }
    public function products(){
        return $this->belongsToMany(Product::class,'product_attribute_value','attribute_value_id','product_id');
    }
    
}
