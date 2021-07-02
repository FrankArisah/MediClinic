@extends('layouts.Departments')
@section('content')
<div class="container-fluid">
    <div class="block-header">
        <div class="row">
            <div class="col-lg-6 col-md-8 col-sm-12">
                <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i class="fa fa-arrow-left"></i></a> Departments</h2>
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                    <li class="breadcrumb-item active">Departments</li>
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
                    <h2>Departments</h2>
                    <ul class="header-dropdown">
                      <div class="container-fluid">
                        <p>
                          <a href="{{route('departments.create') }}" class="btn btn-info">Add Department
                              </a>
                            </p>
                      </div>
                    </ul>
                </div>
                <div class="body">
                  <table class="table m-b-0 table-hover">
                      <thead class="thead-light">
                        <tr>
                                  <th><center>#</center></th>
                                  <th><center>Department</center></th>
                                  <th><center>Status</center></th>

                              </tr>
                            </thead>
                            @foreach($kabui as $key => $departments)
                            <tbody style="color:black; font:blod; background:#ffff">
                             <tr class="text-center">

                              <td>{{ $departments->Id }}</td>
                              <td>{{ $departments->Department }}</td>
                              <td><span class="badge badge-success">Active</span></td>

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
