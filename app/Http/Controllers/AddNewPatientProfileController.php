<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AddNewPatientProfileController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $data = PatientProfile::latest()->paginate(3);
    return view('dashboard',compact('data'))
    ->with('i', (request()->input('page', 1) -1) *5);

  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
      return view ('dashboard.create');
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
      'Phone' => 'required',
      'Email' => 'required',
      'DOB' => 'required',
      'Address' => 'required',
      'Gender' => 'required'
    ]);

    $input_data = array(
      'Phone' => $request->Phone,
      'Email' => $request->Email,
      'DOB' => $request->DOB,
      'Address' => $request->Address,
      'Gender' => $request->Gender
    );

    PatientProfile::create($input_data);



    return redirect('dashboard')
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
