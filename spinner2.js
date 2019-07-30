//Refactor the logic to remove the repeated setTimeout statements.
const circle = "\r|\r/\r-\r\\\r\|";

for (let i = 0; i < circle.length; i++) {
  setTimeout(() => {
    process.stdout.write(circle[i])
  }, i * 200)
}
