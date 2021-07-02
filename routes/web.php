<?php

use Illuminate\Support\Facades\Route;
use \App\Mail\SendMail;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
//auth route for both
Route::group(['middleware' =>['auth']], function(){
  Route::get('/dashboard', 'App\Http\Controllers\DashboardController@index')->name('dashboard');
});
Route::get('send-mail','MailSend@mailsend');
Route::get('mypatient', 'App\Http\Controllers\MyPatientController@index')->name('mypatient');
Route::get('collegues', 'App\Http\Controllers\ColleguesController@index')->name('collegues');
Route::get('attend', 'App\Http\Controllers\AttendController@index')->name('attend');
Route::get('doctorschedulee', 'App\Http\Controllers\DoctorSchedulePatientController@index')->name('attend');

Route::resource('addpatient', 'App\Http\Controllers\AddNewPatientController' );
Route::resource('adddoctor', 'App\Http\Controllers\AddNewDoctorsController' );
Route::resource('appointment', 'App\Http\Controllers\AddNewAppointmentController' );
Route::resource('doctorschedule', 'App\Http\Controllers\DoctorScheduleController' );
Route::resource('departments', 'App\Http\Controllers\DepartmentsController' );

Route::get ('addpatient', function(){
  $plain = \DB::table('patients',)->get();
    return view ('addpatient' ,['plain' =>$plain]);
});
Route::get ('mypatient', function(){
  $arisa = \DB::table('patients',)->get();
    return view ('mypatient' ,['arisa' =>$arisa]);
});

Route::get ('adddoctor', function(){
  $weed = \DB::table('doctors')->get();
    return view ('adddoctor' ,['weed' =>$weed]);
});
Route::get ('collegues', function(){
  $kush = \DB::table('doctors')->get();
    return view ('collegues' ,['kush' =>$kush]);
});

Route::get ('appointment', function(){
  $winnie = \DB::table('appointments')->get();
    return view ('appointment' ,['winnie' =>$winnie]);
});
Route::get ('attend', function(){
  $wanjiru = \DB::table('appointments')->get();
    return view ('attend' ,['wanjiru' =>$wanjiru]);
});

Route::get ('doctorschedule', function(){
  $miski = \DB::table('doctorschedules')->get();
    return view ('doctorschedule' ,['miski' =>$miski]);
});
Route::get ('doctorschedulee', function(){
  $hassan = \DB::table('doctorschedules')->get();
    return view ('doctorschedulee' ,['hassan' =>$hassan]);
});

Route::get ('departments', function(){
  $kabui = \DB::table('departments')->get();
    return view ('departments' ,['kabui' =>$kabui]);
});
require __DIR__.'/auth.php';
