<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\DoctorSchedules;

class DoctorScheduleController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $data = DoctorSchedules::latest()->paginate(3);
    return view('doctorschedule',compact('data'))
    ->with('i', (request()->input('page', 1) -1) *5);

  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
      return view ('doctorschedule.create');
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
      'DoctorName' => 'required',
      'Department' => 'required',
      'AvailableDays' => 'required',
      'AvailableTime' => 'required',
    ]);

    $input_data = array(
      'DoctorName' => $request->DoctorName,
      'Department' => $request->Department,
      'AvailableDays' => $request->AvailableDays,
      'AvailableTime' => $request->AvailableTime
    );

    DoctorSchedules::create($input_data);



    return redirect('doctorschedule')
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
