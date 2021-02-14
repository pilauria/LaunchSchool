let greetingMessage = "Good Morning!";
console.log(greetingMessage);

function greetPeople() {
  console.log(greetingMessage);
}

function newGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

newGreetingMessage(Hi!);
greetPeople();
