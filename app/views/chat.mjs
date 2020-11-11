<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Web Chat</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="css/main.css">
        <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700|Oswald' rel='stylesheet' type='text/css'>
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">
    </head>
    <body>
        <div class="alert update">Things have changed. Refresh your browser</div>
        <div class="container">
            <h1>Web Chat</h1>
            <div class="chat-container">
            </div>

            <div class="controls">
                <input type="text" id="name" placeholder="name">
                <input type="text" id="message" placeholder="message">
                <input type="button" id="send" value="send">
                <input type="button" id="notify" value="allow notifications">
            </div>
        </div>
        <div class="users-container">
            <i class="fa fa-users"></i>
            <h2>Connected</h2>
            <div class="users"></div>
        </div>

        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script src="js/main.js"></script>
        <script src="/socket.io/socket.io.js"></script>
    </body>
</html>