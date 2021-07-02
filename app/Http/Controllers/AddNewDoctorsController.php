<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Doctors;

class AddNewDoctorsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $data = Doctors::latest()->paginate(3);
      return view('adddoctor',compact('data'))
      ->with('i', (request()->input('page', 1) -1) *5);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view ('adddoctor.create');
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
        'Name' => 'required',
        'Username' => 'required',
        'Email' => 'required',
        'Specialist' => 'required',
        'Country' => 'required',
        'Phone' => 'required'
      ]);

      $input_data = array(
        'Name' => $request->Name,
        'Username' => $request->Username,
        'Email' => $request->Email,
        'Specialist' => $request->Specialist,
        'Country' => $request->Country,
        'Phone' => $request->Phone
      );

      Doctors::create($input_data);



      return redirect('adddoctor')
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
