<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>SisCord</title>
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/> -->

</head>

<body>
    <div class="wrapper">
        <section class="chat-area">
            <header>
                <img src="assets/img/discord.png" alt="">
                <div class="details">
                    <span>Siscord</span>
                    <!-- <p>Active now</p> -->
                </div>
            </header>
            <div class="chat-box" id="chat-box">
                <p class="user-join"></p>


                <div class="chat incoming">
                    <!-- <img src="img/uhdpaper.com-824a-pc-4k.jpg" alt="">
            <div class="details"> -->
                    <!-- <span>Neni</span>
                <p class="pesan1">Halo</p>
            </div> -->
                </div>
                <div class="chat outgoing">
                    <!-- <div class="details">
                <span class="name_user"></span>
                <p class="pesan"></p>
            </div> -->
                </div>
            </div>
            <form class="typing-area" id="chatForm">
                <input type="text" placeholder="type a message here..." id="teksPesan">
                <button id='input'><i class="fab fa-telegram-plane"></i></button>
            </form>
        </section>
    </div>
    </section>
    </div>

    <script type="module" src="{{ asset('assets/js/main.js') }}"></script>
    <script src="https://cdn.socket.io/4.7.5/socket.io.min.js"></script>

</body>

</html>
