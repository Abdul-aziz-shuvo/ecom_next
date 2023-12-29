<?php

namespace App\Http\Custom;

class MyJsonResponse  {
   
 
    public static function success($data,$withData=false)
    {
        if($withData) {
        return response()->json([
            'status' => true,
            'data' => $data,
            'code' => 200
        ]);
        }else{
            
            return response()->json([
                'status' => true,
                'code' => 200
            ]);
        }
    }

    public static function Error($error,$code = 405) {
        return response()->json([
            'status' => false,
            'data' => $error->getMessage(),
            'code' => $code 
        ]);
    }
}