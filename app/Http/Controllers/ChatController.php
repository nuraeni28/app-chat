<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis; 

class ChatController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function send(Request $request)
    {
        // Ambil pesan dari request
        $message = $request->input('message');

        // Terbitkan pesan ke channel 'chat'
        Redis::publish('chat', json_encode(['message' => $message]));

        return response()->json(['success' => true]);
    }
}
