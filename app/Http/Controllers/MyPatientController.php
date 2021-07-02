<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MyPatientController extends Controller
{
    public function index(){
      return view ('mypatient');
    }
}
