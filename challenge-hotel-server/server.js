const bookings = require("./bookings.json");
const maxID = Math.max(...bookings.map(booking => booking.id)); 

app.get("/", (request, response) => {
  response.send("Hotel booking server.  Ask for /bookings, etc.");
});

const listener = app.listen(7000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});


app.get("/bookings", (request, response) => {
  response.send(bookings); 
})


app.get("/booking/:id", (request, response) => {
  const id = parseInt(request.params.id); 
  console.log(id); 
  const booking = bookings.find((booking) => booking.id === id);

 

  if(!booking){
    response.status(404).send("404 Not Found");
  } else{
    response.send(booking); 
  }
})


app.post("/bookings", (request, response) => {
  let idNew = maxID + 1; 

  const newBooking ={
    id: idNew,
    title: request.body.title,
    firstName: request.body.firstName, 
    surname: request.body.surname, 
    email: request.body.email, 
    roomId: request.body.roomId, 
    checkInDate: request.body.checkInDate, 
    checkOutDate: request.body.checkOutDate
  }; 

  if (
    !newBooking.title ||
    !newBooking.firstName ||
    !newBooking.surname ||
    !newBooking.email ||
    !newBooking.roomId ||
    !newBooking.checkInDate ||
    !newBooking.checkOutDate
  ) {
    return response.status(400).send("Please fill all fields");
  } else {
  bookings.push(newBooking);
  response.send("Booking added successfully");
  }

}); 



app.delete("/booking/:id", (request, response) => {
  const id = parseInt(request.params.id);
  console.log(id);
  const bookingIndex = bookings.findIndex((booking) => booking.id === id);

 
  if (bookingIndex < 0) {
    response.status(404).send("404 Not Found");
  } else {
    bookings.splice(bookingIndex, 1);
    response.json(bookings);
  }
})