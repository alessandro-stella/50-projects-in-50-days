<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title></title>
    </head>

    <body>
        <div id="main">
            <div id="output">
                <div id="titleOutput">
                    Benvenuto!
                </div>

                <?php
                    $email = $_GET['email'];
                    $password = $_GET['password'];

                    echo "<div class='outputText'>Email: $email</div>";
                    echo "<div class='outputText'>Password: $password</div>";
                ?>

                <div id="greeting">Buona Giornata!</div>
            </div>
        </div>
    </body>
</html>