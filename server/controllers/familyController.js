let family = [
  {
    id: 1,
    name: "Norrie",
    age: 10,
    gender: "Male",
    birthOrder: 5,
    notes:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    img: "http://dummyimage.com/135x230.bmp/dddddd/000000"
  },
  {
    id: 2,
    name: "Milzie",
    age: 16,
    gender: "Female",
    birthOrder: 7,
    notes: "Fusce consequat. Nulla nisl. Nunc nisl.",
    img: "http://dummyimage.com/222x234.bmp/ff4444/ffffff"
  },
  {
    id: 3,
    name: "Annemarie",
    age: 35,
    gender: "Female",
    birthOrder: 10,
    notes:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    img: "http://dummyimage.com/146x137.jpg/cc0000/ffffff"
  },
  {
    id: 4,
    name: "Carole",
    age: 23,
    gender: "Female",
    birthOrder: 4,
    notes:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    img: "http://dummyimage.com/250x200.png/5fa2dd/ffffff"
  },
  {
    id: 5,
    name: "Roxana",
    age: 14,
    gender: "Female",
    birthOrder: 8,
    notes:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    img: "http://dummyimage.com/172x240.bmp/cc0000/ffffff"
  },
  {
    id: 6,
    name: "Carina",
    age: 1,
    gender: "Female",
    birthOrder: 2,
    notes:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    img: "http://dummyimage.com/113x162.png/5fa2dd/ffffff"
  },
  {
    id: 7,
    name: "Terry",
    age: 14,
    gender: "Female",
    birthOrder: 6,
    notes:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    img: "http://dummyimage.com/151x234.png/ff4444/ffffff"
  },
  {
    id: 8,
    name: "Archambault",
    age: 46,
    gender: "Male",
    birthOrder: 4,
    notes:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    img: "http://dummyimage.com/155x122.bmp/ff4444/ffffff"
  },
  {
    id: 9,
    name: "Nonnah",
    age: 37,
    gender: "Female",
    birthOrder: 1,
    notes:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    img: "http://dummyimage.com/176x198.jpg/dddddd/000000"
  },
  {
    id: 10,
    name: "Shelbi",
    age: 16,
    gender: "Female",
    birthOrder: 10,
    notes:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    img: "http://dummyimage.com/173x117.png/ff4444/ffffff"
  }
];
let id = 11;

module.exports = {
  getFamily: (req, res) => {
    res.status(200).send(family)
  },
  postFamily: (req, res) => {
    const {name, age, gender, birthOrder, notes} = req.body
    family.unshift({id, ...req.body})
    id++
    res.status(200).send(family)
  },
  putFamily: (req, res) => {
    const {name, age, gender, birthOrder, notes} = req.body
    const {id} = req.params
    const index = family.findIndex(member => member.id === +id)
    family[index] = {id, ...req.body}
    res.status(200).send(family)
  },
  deleteFamily: (req, res) => {
    const {id} = req.params
    family = family.filter(member => member.id !== +id)
    res.status(200).send(family)
  }
}