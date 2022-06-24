const userBox = document.getElementsByClassName("user-container")[0];
let users = [];
let userProfiles = [];

window.onload = async () => {
    await $.ajax({
        url: "https://randomuser.me/api/?results=20",
        dataType: "json",
        success: function ({ results }) {
            users = results;
        },
    });

    users = users.map((singleUser) => {
        return {
            name: singleUser.name.first + " " + singleUser.name.last,
            location:
                singleUser.location.city + ", " + singleUser.location.state,
            picture: singleUser.picture.large,
        };
    });

    for (let singleUser of users) {
        let newUserProfile = document.createElement("div");
        newUserProfile.classList = "user-card";

        let picture = document.createElement("img");
        picture.classList = "picture";
        picture.src = singleUser.picture;

        let userInfoContainer = document.createElement("div");
        userInfoContainer.classList = "userInfo-container";

        let nameContainer = document.createElement("div");
        nameContainer.classList = "name-container";
        nameContainer.innerHTML = singleUser.name;

        let locationContainer = document.createElement("div");
        locationContainer.classList = "location-container";
        locationContainer.innerHTML = singleUser.location;

        newUserProfile.appendChild(picture);

        userInfoContainer.appendChild(nameContainer);
        userInfoContainer.appendChild(locationContainer);

        newUserProfile.appendChild(userInfoContainer);

        userProfiles.push(newUserProfile);
    }

    for (const singleProfile of userProfiles) {
        userBox.appendChild(singleProfile);
    }
};

function filterUsers(key) {
    userBox.innerHTML = "";

    for (const singleUser of userProfiles) {
        let name =
            singleUser.getElementsByClassName("name-container")[0].innerHTML;

        let location =
            singleUser.getElementsByClassName("location-container")[0]
                .innerHTML;

        if (name.indexOf(key) != -1 || location.indexOf(key) != -1) {
            userBox.appendChild(singleUser);
        }
    }

    if (userBox.innerHTML === "") {
        let usersNotFound = document.createElement("div");
        usersNotFound.classList = "users-missing";
        usersNotFound.innerHTML = "No users found";

        userBox.appendChild(usersNotFound);
    }
}
