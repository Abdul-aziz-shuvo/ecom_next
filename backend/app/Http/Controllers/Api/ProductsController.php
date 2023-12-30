<?php

namespace App\Http\Controllers\Api;

use Exception;


use App\Models\Product;


use Illuminate\Http\Request;

use App\Http\Custom\MyJsonResponse;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use stdClass;

class ProductsController extends Controller
{
    public function getAllProducts() {
        $products = Product::all();
        return MyJsonResponse::success($products,true);
    }
    public function productDetails($id){
        $product = Product::where('id',$id)->with('attributes')->get();
        $product = $product[0];
        $rating = $product->Ratings()->get();
        $attributesData = [];
        foreach($product->attributes as $attribute){

            $data = $attribute->value;

            //checking if key is alreay set or not - if set then value push to same  key
            if(isset($attributesData[$attribute->attribute()->first()->name])){

                //here in first array sign [key][] we are assign the keyname and second array sign  [][value] declare for the value that we are trying to assign
                $attributesData[$attribute->attribute()->first()->name][] = $data;
            }else{

                //otherwise push to in a new key
                $attributesData[$attribute->attribute()->first()->name][] = $data;
            }  
        }
       
        return MyJsonResponse::success(['product'=>$product,'attibutesData'=> (array) $attributesData, 'ratings'=> $rating],true);

    }
    public function createProduct(Request $request){
       try{
            $image = $request->image;
            $data = $request->except(['image','attribute_value_id']); //remove property those not belong to product table
            $product = Product::create($data); // storing product data to database            
            $attribute_id = explode(',', $request->attribute_value_id) ; //string to array - attribute multiple id
            $product->attributes()->attach($attribute_id); //inserting array of attribute id to pivot table
            return MyJsonResponse::success($product);
       }catch(Exception $excep){
            return MyJsonResponse::Error($excep);
       }
    }
}
