<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArticelController extends Controller
{
    public function index()
    {
        return view('articel.index');
    }
}