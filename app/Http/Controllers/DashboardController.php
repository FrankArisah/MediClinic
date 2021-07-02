<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
      if (Auth::user()->hasRole('doctor')){
        return view('dashboard');
      }
      else if(Auth::user()->hasRole('patient')){
        return view('patientprofile');
      }
    }
}
