@extends('layouts.PatientProfile')
@section('content')
 <div class="container-fluid">
   <div class="block-header">
        <div class="row">
            <div class="col-lg-6 col-md-8 col-sm-12">
                <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i class="fa fa-arrow-left"></i></a> Patient Profile</h2>
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                    <li class="breadcrumb-item">Patient</li>
                    <li class="breadcrumb-item active">Patient Profile</li>
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

               <!-- <div class="col-sm-5 col-6 text-right m-b-30">
                   <a href="edit-profile" class="btn btn-primary btn-rounded"><i class="fa fa-plus"></i> Edit Profile</a>
               </div> -->
               <div class="row ">
                 <div class="col-lg-4 col-md-12">
                                     <div class="card profile-header">
                                       <center>
                                         <div class="body">
                                             <div class="profile-image"> <img src="{{asset ('/assets/images/user.png')}}" class="rounded-circle" alt=""> </div>
                                             <div>
                                                 <h4 class="m-b-0"><strong>{{ Auth::user()->name }}</strong></h4>
                                                 <span>Smart Health System</span>
                                             </div>
                                             <div class="m-t-15">
                                                 <button class="btn btn-primary">Follow</button>
                                                 <button class="btn btn-outline-secondary">Message</button>
                                             </div>
                                         </div>
                                       </center>
                                     </div>
</div>



                         <div class="col-md-8">
                           <div class="card">
                             <div class="card-header">
                               <h5 class="title">Edit Profile</h5>
                             </div>
                             <div class="card-body">
                               <form>
                                 <div class="row">
                                   <div class="col-md-5 pr-1">
                                     <div class="form-group">
                                       <label>Company (disabled)</label>
                                       <input type="text" class="form-control" disabled="" placeholder="Company" value="Smart Health System.">
                                     </div>
                                   </div>
                                   <div class="col-md-3 px-1">
                                     <div class="form-group">
                                       <label>Username</label>
                                       <input type="text" class="form-control" placeholder="Username" value="Name">
                                     </div>
                                   </div>
                                   <div class="col-md-4 pl-1">
                                     <div class="form-group">
                                       <label for="exampleInputEmail1">Email address</label>
                                       <input type="email" class="form-control" placeholder="Email">
                                     </div>
                                   </div>
                                 </div>
                                 <div class="row">
                                   <div class="col-md-6 pr-1">
                                     <div class="form-group">
                                       <label>First Name</label>
                                       <input type="text" class="form-control" placeholder="Company" value="Wanjiru">
                                     </div>
                                   </div>
                                   <div class="col-md-6 pl-1">
                                     <div class="form-group">
                                       <label>Last Name</label>
                                       <input type="text" class="form-control" placeholder="Last Name" value="Kanyi">
                                     </div>
                                   </div>
                                 </div>
                                 <div class="row">
                                   <div class="col-md-12">
                                     <div class="form-group">
                                       <label>Address</label>
                                       <input type="text" class="form-control" placeholder="Home Address" value="Nairobi, Kenya">
                                     </div>
                                   </div>
                                 </div>
                                 <div class="row">
                                   <div class="col-md-4 pr-1">
                                     <div class="form-group">
                                       <label>City</label>
                                       <input type="text" class="form-control" placeholder="City" value="Nairobi">
                                     </div>
                                   </div>
                                   <div class="col-md-4 px-1">
                                     <div class="form-group">
                                       <label>Country</label>
                                       <input type="text" class="form-control" placeholder="Country" value="Kenya">
                                     </div>
                                   </div>
                                   <div class="col-md-4 pl-1">
                                     <div class="form-group">
                                       <label>Postal Code</label>
                                       <input type="number" class="form-control" placeholder="ZIP Code">
                                     </div>
                                   </div>
                                 </div>
                                 <div class="row">
                                   <div class="col-md-12">
                                     <div class="form-group">
                                       <label>About Me</label>
                                       <textarea rows="4" cols="80" class="form-control textarea">Description</textarea>
                                     </div>
                                   </div>
                                 </div>
                               </form>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>

@endsection
