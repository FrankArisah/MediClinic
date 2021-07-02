<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Patients;

class AddNewPatientController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Patients::latest()->paginate(3);
        return view('addpatient',compact('data'))
        ->with('i', (request()->input('page', 1) -1) *5);


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
      return view('addpatient.create');
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
        'PatientID',
        'Name' => 'required',
        'DOB' => 'required',
        'Address' => 'required',
        'Number' => 'required',
        'LastVisit' => 'required'
      ]);

      $input_data = array(
        'PatientID' => $request->PatientID,
        'Name' => $request->Name,
        'DOB' => $request->DOB,
        'Address' => $request->Address,
        'Number' => $request->Number,
        'LastVisit' => $request->LastVisit
      );

      Patients::create($input_data);



      return redirect('addpatient')
      ->with ('success', 'Patient added successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Patients $Patients
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data =Patients::findOrFail($id);
        return view('addpatient.show', compact('data'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
      $data = Patients::findOrFail($id);
      return view('edit', compact('data'));
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
      $request->validate( [
        'PatientID',
        'Name' => 'required',
        'Age' => 'required',
        'Address' => 'required',
        'Number' => 'required',
        'LastVisit' => 'required'
      ]);

      $input_data = array(
        'PatientID' => $request->PatientID,
        'Name' => $request->Name,
        'Age' => $request->Age,
        'Address' => $request->Address,
        'Number' => $request->Number,
        'LastVisit' => $request->LastVisit
      );
      Patients::whereId($id)->update($input_data);
      return redirect ('addpatient')->with ('Success','Patient Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      $data = Patients::findOrFail($id);
      $data->delete();

    }
}
