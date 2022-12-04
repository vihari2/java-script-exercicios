const day = "monday";
// não precisa usar o if/else
switch (day) {
  case "monday": // day === "monday", então execute;
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    console.log("Go to the gym");
    console.log("Study for the exam");
    break; // se não tiver o break, ele vai executar todos os cases abaixo
  case "tuesday":
    console.log("Go to the college");
    console.log("Go for the meeting");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default: ///como se fosse um else final do else/if
    console.log("Not a valid day!");
}

// switch evita a repetição de código, mas não é tão flexível quanto o if/else
if (day === "monday") {
} else if (day === "tuesday") {
} else if (day === "wednesday" || day === "thursday") {
} else if (day === "friday") {
} else if (day === "saturday" || day === "sunday") {
} else {
  console.log("Not a valid day!");
}
