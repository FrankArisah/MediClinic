@extends('layouts.app')
@section('content')
    <div class="container-fluid">
        <div class="block-header">
            <div class="row">
                <div class="col-lg-5 col-md-8 col-sm-12">
                    <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i class="fa fa-arrow-left"></i></a> Dashboard</h2>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item">Dashboard</li>

                    </ul>
                </div>
                <div class="col-lg-7 col-md-4 col-sm-12 text-right">
                    <div class="inlineblock text-center m-r-15 m-l-15 hidden-sm">
                        <div class="sparkline text-left" data-type="line" data-width="8em" data-height="20px" data-line-Width="1" data-line-Color="#00c5dc"
                            data-fill-Color="transparent">3,5,1,6,5,4,8,3</div>
                        <span>Visitors</span>
                    </div>
                    <div class="inlineblock text-center m-r-15 m-l-15 hidden-sm">
                        <div class="sparkline text-left" data-type="line" data-width="8em" data-height="20px" data-line-Width="1" data-line-Color="#f4516c"
                            data-fill-Color="transparent">4,6,3,2,5,6,5,4</div>
                        <span>Visits</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="row clearfix">
            <div class="col-lg-3 col-md-4 col-sm-12">
                <div class="card">
                    <a href="{{url('mypatient')}}" class="folder">
                        <h6><i class="fa fa-user-o"></i> My Patients</h6>
                    </a>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-12">
                <div class="card">
                    <a href="{{url('collegues')}}" class="folder">
                      <div class="icon">  <h6><i class="fa fa-stethoscope"></i> Collegues </h6></div>
                    </a>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-12">
                <div class="card">
                    <a href="{{url('attend')}}" class="folder">
                        <h6><i class="fa fa-user-md"></i> Attend</h6>
                    </a>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-12">
                <div class="card">
                    <a href="{{url('')}}" class="folder">
                        <h6><i class="fa fa-heartbeat"></i> Pending</h6>
                    </a>
                </div>
            </div>
        </div>

        <div class="row clearfix">
            <div class="col-lg-3 col-md-5 col-sm-12">
                <div class="card">
                    <div class="body">
                        <h4>0 <i class="fa fa-server float-right"></i></h4>
                        <p class="mb-0">Total Patients <small class="text-muted float-right">of Patients</small></p>
                        <div id="progress-striped progress-xs" class="progress progress-striped mb-0">
                            <div class="progress-bar progress-bar-warning" data-transitiongoal="00" aria-valuenow="00" style="width: 00%;">0%</div>
                        </div>
                    </div>
                </div>
                <div class="card modal-open m-b-5">
                    <div class="body">
                        <h6>0</h6>
                        <p class="mb-0">New Patients <small class="text-muted float-right">of Patients</small></p>
                    </div>
                    <div class="progress progress-xs progress-transparent custom-color-blue mb-0">
                        <div class="progress-bar" data-transitiongoal="18"></div>
                    </div>
                </div>
                <div class="card modal-open m-b-5">
                    <div class="body">
                        <h6>0</h6>
                        <p class="mb-0">Treatment <small class="text-muted float-right">of Treatment</small></p>
                    </div>
                    <div class="progress progress-xs progress-transparent custom-color-purple mb-0">
                        <div class="progress-bar" data-transitiongoal="34"></div>
                    </div>
                </div>
                <div class="card modal-open">
                    <div class="body">
                        <h6>0</h6>
                        <p class="mb-0">Surgery <small class="text-muted float-right">of Surgery</small></p>
                    </div>
                    <div class="progress progress-xs progress-transparent custom-color-green mb-0">
                        <div class="progress-bar" data-transitiongoal="50"></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-9 col-md-7 col-sm-12">
                <div class="card">
                    <div class="header">
                        <h2>Patient Status</h2>
                    </div>
                <div class="body">
                    <p class="float-md-right">
                        <span class="badge badge-success"> Admit</span>
                        <span class="badge badge-default"> Discharge</span>
                    </p>
                    <div class="table-responsive table_middel">
                        <table class="table m-b-0">
                            <thead class="thead-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Priority</th>
                                    <th>Progress</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tr>
                                  <td>1</td>
                                  <td><span>Franklin Arisa</span></td>
                                  <td><span class="text-info">425-00100 Embakasi,Nairobi,Kenya</span></td>
                                  <td><span class="badge badge-warning">MEDIUM</span></td>
                                  <td><div class="progress progress-xs">
                                          <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%;"> <span class="sr-only">40% Complete</span> </div>
                                      </div>
                                  </td>
                                  <td><span class="badge badge-success">Admit</span></td>
                              </tr>

                </div>
                </div>
            </div>
        </div>

    </div>



@endsection
