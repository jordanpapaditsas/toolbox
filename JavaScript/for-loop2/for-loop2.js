let user = {
  id: 1,
  firstname: "Josh",
  lastname: "Hartnett",
  address: [
    {
      road: "HighR",
      PO: 13665,
      type: "Home"
    },
    {
      road: "Denver",
      PO: 16660,
      type: "Office"
    }
  ]
}
user.phone = "2109621213";



for (information in user) {
  console.log(information, user[information]);
}
