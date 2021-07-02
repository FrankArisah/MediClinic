<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PatientProfile extends Model
{
  use HasFactory;
  protected $table = 'doctors';
  protected $fillable =[
   'Phone',
   'Email',
   'D0B',
   'Address',
   'Gender'

 ];
}
