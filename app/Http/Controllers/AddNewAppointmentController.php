<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Appointments;

class AddNewAppointmentController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $data = Appointments::latest()->paginate(3);
    return view('appointment',compact('data'))
    ->with('i', (request()->input('page', 1) -1) *5);

  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
      return view ('appointment.create');
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $request->validate( [
      'AppointmentID' => 'required',
      'PatientName' => 'required',
      'Age' => 'required',
      'DoctorName' => 'required',
      'Department' => 'required',
      'AppointmentDate' => 'required',
      'AppointmentTime'=>'required'
    ]);

    $input_data = array(
      'AppointmentID' => $request->AppointmentID,
      'PatientName' => $request->PatientName,
      'Age' => $request->Age,
      'DoctorName' => $request->DoctorName,
      'Department' => $request->Department,
      'AppointmentDate' => $request->AppointmentDate,
      'AppointmentTime' => $request->AppointmentTime
    );

    Appointments::create($input_data);



    return redirect('appointment')
    ->with ('success', 'Patient added successfully');
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
      //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
      //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
      //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
      //
  }
}
