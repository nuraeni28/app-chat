<?php

namespace App\Listeners;

use App\Events\ChatMessage;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendMessage
{
    public function __construct()
    {
        //
    }

    public function handle(ChatMessage $event)
    {
        // emit event to Socket.IO server
        \NodeSocket::sendMessage($event->message->content);
    }
}
