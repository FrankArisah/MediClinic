<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PatientStatus extends Model
{
    use HasFactory;
    protected $table = 'patientstatus';
    protected $fillable =[
     'PatientID',
     'Name',
     'Address',
     'StartDate',
     'EndDate'];
}
