<?php

namespace App\Http\Controllers\Api;

use Exception;


use App\Models\Product;


use Illuminate\Http\Request;

use App\Http\Custom\MyJsonResponse;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class ProductsController extends Controller
{
    public function getAllProducts() {
        $products = Product::all();
        return MyJsonResponse::success($products,true);
    }
    public function productDetails($id){
        $product = Product::find($id);
        $rating = $product->Ratings()->get();
        dd($product->attributes()->get());
        return MyJsonResponse::success(['product'=>$product,'ratings'=> $rating],true);

    }
    public function createProduct(Request $request){
       try{
            $image = $request->image;
            $data = $request->except(['image','attribute_value_id']); //remove property those not belong to product table
            $product = Product::create($data); // storing product data to database            
            $attribute_id = explode(',', $request->attribute_value_id) ; //string to array - attribute multiple id
            // dd($product->attributes()->get());
                $product->attributes()->attach($attribute_id); //inserting array of attribute id to pivot table
            
            return MyJsonResponse::success($product);
       }catch(Exception $excep){
            return MyJsonResponse::Error($excep);
       }
    }
}
