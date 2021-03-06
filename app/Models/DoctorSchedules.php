<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DoctorSchedules extends Model
{
    use HasFactory;
    protected $table = 'doctorschedules';
    protected $fillable =[
     'DoctorName',
     'Department',
     'AvailableDays',
     'AvailableTime',
   ];
}
