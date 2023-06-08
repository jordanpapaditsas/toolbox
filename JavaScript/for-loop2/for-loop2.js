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
user.phone = "210962121356";



for (information in user) {
  console.log(information, user[information]);
}
