  var alanBtnInstance = alanBtn({
    key: "4ca438b9edf3245df462d15992026ffe2e956eca572e1d8b807a3e2338fdd0dc/stage",
    onCommand: function (commandData) {
        let mycommand = Object.values(commandData)[0]
        switch(mycommand){
          case "Go to signup page":
              console.log(mycommand)
              window.location.href = '/signup'
          case "Go to login page":
              console.log(mycommand)
              window.location.href = "/"
          case "addname":
              const username = commandData.username;
              document.getElementById("name").value = username;
          case "go to home page":
              if(window.location.href === "/"){
                  window.Location.href = "/"
                  console.log("testinggggg");
              }
        }
    },
    rootEl: document.getElementById("alan-btn"),
  });
