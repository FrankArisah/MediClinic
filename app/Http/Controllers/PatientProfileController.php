<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PatientProfileController extends Controller
{
  public function index()
  {
    if (Auth::user()->hasRole('doctor') ){
      return view('dashboard');
    }
    else if(Auth::user()->hasRole('patient')){
      return view('patientprofile');
    }
  }
}
