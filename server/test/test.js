const jwt = require("../tools/jwtTool");

let token = "fghggg"
    if (token) {
        jwt.verify(token,  (err, decodedToken) => {
            if (err) {
                console.log("err.message");
                console.log(err.message);
            } else {
                console.log(decodedToken);

            }
        });
    } else {
        console.log("declines");

    }

