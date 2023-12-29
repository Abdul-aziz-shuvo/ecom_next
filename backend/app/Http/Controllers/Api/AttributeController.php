<?php

namespace App\Http\Controllers\Api;

use App\Models\Attribute;
use Illuminate\Http\Request;
use App\Http\Custom\MyJsonResponse;
use App\Http\Controllers\Controller;
use App\Models\AttributeValue;
use Exception;

class AttributeController extends Controller
{
    public function create(Request $request){
     try{
      $attribute =   Attribute::create($request->all());
      return MyJsonResponse::success(['attribute'=>$attribute],true);
     }catch (Exception $e){
      return MyJsonResponse::Error($e);
     }
    }


    public function create_attribute_value(Request $request){
       try{     
        $value = AttributeValue::create($request->all());
        return MyJsonResponse::success(['value'=>$value],true);
       }catch (Exception $e){
        return MyJsonResponse::Error($e);
       }
    }
   
}
