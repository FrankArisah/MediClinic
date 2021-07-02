<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Patients extends Model
{
  use HasFactory;
    protected $table = 'patients';
    protected $primaryKey = 'PatientID';
    protected $fillable =[
     'PatientID',
     'Name',
     'DOB',
     'Address',
     'Number',
     'LastVisit'];
}
