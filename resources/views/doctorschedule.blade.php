@extends('layouts.DoctorSchedule')
@section('content')
<div class="container-fluid">
    <div class="block-header">
        <div class="row">
            <div class="col-lg-6 col-md-8 col-sm-12">
                <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i class="fa fa-arrow-left"></i></a> Appointments</h2>
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                    <li class="breadcrumb-item active">Appointments</li>
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

    <div class="row clearfix">
        <div class="col-md-12">
            <div class="card patients-list">
                <div class="header">
                    <h2>Doctor Schedule</h2>
                    <ul class="header-dropdown">
                      <div class="container-fluid">
                        <p>
                          <a href="{{route('doctorschedule.create') }}" class="btn btn-info">Doctor Schedule
                              </a>
                            </p>
                      </div>
                    </ul>
                </div>
                <div class="body">
                  <table class="table m-b-0 table-hover">
                      <thead class="thead-light">
                        <tr>

                                  <th><center>Doctor Name</center></th>
                                  <th><center>Department</center></th>
                                  <th><center>Available Days</center></th>
                                  <th><center>Available Time</center></th>
                                  <th><center>Status</center></th>

                              </tr>
                            </thead>
                            @foreach($miski as $key => $doctorshedules)
                            <tbody style="color:black; font:blod; background:#ffff">
                             <tr class="text-center">

                              <td>{{ $doctorshedules->DoctorName }}</td>
                              <td>{{ $doctorshedules->Department }}</td>
                              <td>{{ $doctorshedules->AvailableDays }}</td>
                              <td>{{ $doctorshedules->AvailableTime }}</td>
                              <td><span class="badge badge-success">Available</span></td>


                              <!-- here is the button action side where you can edit . view and delete the employee record -->
                              <!-- <form action="{{route('appointment.destroy', '$winnie->data') }}" method="post">

	                                <a href="{{route ('appointment.edit', '$winnie->id')}}" class="btn btn-sm btn-info"><span class="fa fa-edit"></span> Edit</a>

                           	@csrf
                           	@method('DELETE')
                           	<button type="submit" class="btn btn-sm btn-danger"><span class="fa fa-trash"></span> Delete</button>
                           	</form> -->
                                           <!-- ends here -->
                              </td>
                             </tr>
                             </tbody>
                            @endforeach
                           </table>

                          </table>
            </div>
        </div>
    </div>
</div>
@endsection
