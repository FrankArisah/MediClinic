@extends('layouts.Appointment')

@section('content')

@if($errors->any())
<div class="alert alert-danger">
 <ul>
  @foreach($errors->all() as $error)
  <li>{{ $error }}</li>
  @endforeach
 </ul>
</div>
@endif
<style>
        .container{
            padding:0.5%;
        }
    </style>
<div class="container">
  <div class="block-header">
      <div class="row">
          <div class="col-lg-6 col-md-8 col-sm-12">
              <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i class="fa fa-arrow-left"></i></a> Add Patient</h2>
              <ul class="breadcrumb">
                  <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                  <li class="breadcrumb-item active">Add Patient</li>
              </ul>
          </div>
          <div class="col-lg-6 col-md-4 col-sm-12 text-right">
              <div class="bh_chart hidden-xs">
                  <div class="float-left m-r-15">
                      <small>Visitors</small>
                      <h6 class="mb-0 mt-1"><i class="icon-user"></i> 1,784</h6>
                  </div>
                  <span class="bh_visitors float-right">2,5,1,8,3,6,7,5</span>
              </div>
              <div class="bh_chart hidden-sm">
                  <div class="float-left m-r-15">
                      <small>Visits</small>
                      <h6 class="mb-0 mt-1"><i class="icon-globe"></i> 325</h6>
                  </div>
                  <span class="bh_visits float-right">10,8,9,3,5,8,5</span>
              </div>
              <div class="bh_chart hidden-sm">
                  <div class="float-left m-r-15">
                      <small>Chats</small>
                      <h6 class="mb-0 mt-1"><i class="icon-bubbles"></i> 13</h6>
                  </div>
                  <span class="bh_chats float-right">1,8,5,6,2,4,3,2</span>
              </div>
          </div>
      </div>
  </div>
</div>

<div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="card">
<form method="post" action="{{ route('appointment.store') }}" enctype="multipart/form-data">
 @csrf
<!-- Extended default form grid -->
<form>
  <!-- Grid row -->
  <div class="header">
    <h2>Basic Information <small>Description text here...</small> </h2>
        </div>
  <div class="body">
  <div class="row clearfix">
    <!-- Default input -->
    <div class="form-group col-sm-3">
      <input mdbInput type="text" class="form-control" name="AppointmentID" id="AppointmentID" placeholder="Appointment ID">
    </div>
    <!-- Default input -->
    <div class="form-group col-sm-3">
      <input mdbInput type="text" class="form-control" name="PatientName" id="PatientName" placeholder="Patient Name">
    </div>

  <!-- Default input -->
  <div class="form-group col-sm-3">
    <input mdbInput type="text" class="form-control" name="Age" id="Age" placeholder="Age">
  </div>
  <div class="form-group col-sm-3">
    <input mdbInput type="text" class="form-control" name="DoctorName" id="DoctorName" placeholder="Doctor Name">
  </div>
</div>
<div class="row clearfix">
  <!-- Default input -->
  <div class="form-group col-sm-3">
    <input mdbInput type="text" class="form-control" name="Department" id="Department" placeholder="Department">
  </div>
    <!-- Default input -->
    <div class="form-group col-sm-3">
      <input mdbInput type="text" data-provide="datepicker" data-date-autoclose="true" class="form-control" data-date-format="dd/mm/yyyy" name="AppointmentDate" id="AppointmentDate" placeholder="Appointment Date">
    </div>

    <!-- Default input -->
    <div class="form-group col-sm-3">
      <input mdbInput type="text" class="form-control" name="AppointmentTime" id="AppointmentTime" placeholder="Appointment Time">
    </div>

    <div class="form-group col-md-3">
        <input type="file" name="image" id="image" class="form-control">
    </div>
  </div>
  <!-- Grid row -->
  <div class="row clearfix">
    <div class ="col-sm-12">
      <button type="submit"  name="add" class="btn btn-primary">Submit</button>
      <a href="{{ url('appointment') }}" class="btn btn-outline-secondary">Cancel</a>
</div>
</div>

  </div>

</form>
<!-- Extended default form grid -->
</div>
 </div>

</form>
</div>
</div>
</div>

@endsection

@section('scripts')

<script>
 //---------------------Browse image----------------
 $('#browse_file').on('click',function(){
                            $('#image').click();
                        })
                        $('#image').on('change', function(e){
                            showFile(this, '#showImage');
                        })

</script>

@endsection
