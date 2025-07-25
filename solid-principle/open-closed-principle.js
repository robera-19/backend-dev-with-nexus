// OCP
// Classes should be open for extension but closed for
// modification.
// violated OCP
class Footballer {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    //   case 
    //   getter and setter part
    //   getFooballRole() {
    //     switch (this.role) {
    //       case "goalkeeper":
    //         return "You are Goal Keeper";
    //       case "forward":
    //         return `You Forward ROle`;
    //       case "defender":
    //         return "You are Defender";
    //       case "Midfielder": // add other
    //         return "You are MidFielder";
    //       default:
    //         return "NO ROle";
    //     }
    //   }
}


// better implementation
// Interface
class Role {
    getRole() {
        throw new Error("Must be Implemented");
    }
}

class GoalKeeper extends Role {
    getRole() {
        //overriding
        return "Goal keeper";
    }
}

class MidFielder extends Role {
    getRole() {
        return "Mid Fielder";
    }
}

class Defender extends Role {
    getRole() {
        return "Defender";
    }
}

  //