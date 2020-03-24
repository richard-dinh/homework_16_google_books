const router = require('express').Router()
const {Book} = require('../models')

//get all books
router.get('/books', (request, response) => {
  Book.find()
  .then( books => response.json(books) )
  .catch( error => {
    console.error(error)
    response.sendStatus(400)
  })
})

//create a book
router.post('/books', (request, response) => {
  Book.create(request.body)
  .then( () => response.sendStatus(200))
  .catch( error => {
    console.error(error)
    response.sendStatus(400)
  })
})

//delete book by id
router.delete('/books/:id', (request, response) => {
  Book.findOneAndDelete(request.params.id)
  .then( () =>  response.sendStatus(200))
  .catch( error => {
    console.error(error)
    response.sendStatus(400)
  })
})

//bulk insert into database
router.post('/books/bulk', (request, response) => {
  let BookSeed = [
    {
      authors: ["Suzanne Collins"],
      description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
      image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
      title: "The Hunger Games"
    },
    {
      authors: ["J.K. Rowling"],
      description: "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
      image: "https://books.google.com/books/content?id=39iYWTb6n6cC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70RLlOgX63oAO4HM3sG_ugbG465ajCH9LvCH-XmSpkyqgeTjBjTlib7ezohH2riB5DmB3Ira9_C3hkBzv3Wgz2VqF_QxlyoUB-dL_XyytU595pDUVPtfCtZ_DG70ZP7_ps-M4Qc",
      link: "https://books.google.com/books?id=39iYWTb6n6cC&dq=harry+potter&source=gbs_book_similarbooks",
      title: "Harry Potter and the Philosopher's Stone"
    },
    {
      authors: ["J.K. Rowling"],
      description: "Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone... Dobby's sinister predictions seem to be coming true.",
      image: "https://books.google.com/books/content?id=1o7D0m_osFEC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71EdA4_-qWf74n5VtDCRevdORJCjWDDIoGDNnW38vkhFZG_QnbRT5UN7VxvEMmBAyq-jj6WLZrXHkX3v157bditQoZQeK8QZX497T5HdJbsvg1pCRsK5HHPO4tiEjajDyo2wP0l",
      link: "https://books.google.com/books?id=1o7D0m_osFEC&dq=harry%20potter&source=gbs_similarbooks",
      title: "Harry Potter and the Chamber of Secrets"
    },
    {
      authors: ["J.K. Rowling"],
      description: "When the Knight Bus crashes through the darkness and screeches to a halt in front of him, it's the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run - and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harry's tea leaves... But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul-sucking kiss...",
      image: "https://books.google.com/books/content?id=wHlDzHnt6x0C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70SpV9CiCPFkfjPxo9oxz8uPmtSNy95JJuffJIWYVdXdQhNSBAwCoYYyAo12UHR32k9kILLhMCWm3J6m9nbsNUUn4RmkfnTSzOOywpoSr9jgRyZeNiAYHFmrYxQzm8KcApmF7Ld",
      link: "https://books.google.com/books?id=wHlDzHnt6x0C&dq=harry%20potter&source=gbs_similarbooks",
      title: "Harry Potter and the Prisoner of Azkaban"
    },
    {
      authors: ["Robin Davis"],
      description: "Boba Fett-Uccine and Princess Leia Danish Dos are just the beginning when the Force is with you in the kitchen. Wookiee Cookies is your invitation to fine culinary experiences in the Star Wars frame of mind. From C-3PO Pancakes to Jedi Juice Bars, this intergalactic Star Wars cookbook features healthy snacks, delicious dishes, sweet treats, and easy main courses no Rebel can resist. The ebook includes hilarious photos and safety tips for cooking on Earth as well as in most space stations. Age is no issue when it comes to Star Wars cuisine-kids as well as adults will have a great time with this book. Whether you drove to your first Star Wars flick or just had your fifth birthday, there's no reason you can't whip up some Crazy Cantina Chili at near light speed.",
      image: "https://books.google.com/books/content?id=oEVkCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71SA3w9h4czC5cSP2bjRUaSGxW67GQHrZ_JsnhtcPp-i8oBNd6ZapwSnzd7xSe2oH78TQGGGo8ZmgI-xXIS2FIkf078TeBKXq73XIzcGZdAUy8qVF3fBcLjOry-S3yPo9LPVPX6",
      link: "https://books.google.com/books?id=oEVkCwAAQBAJ&newbks=1&newbks_redir=0&dq=star+wars&source=gbs_navlinks_s",
      title: "Wookiee Cookies: A Star Wars Cookbook"
    },
    {
      authors: ["George Lucas", "Donald F. Glut", "James Kahn"],
      description: "Presents the complete \"Star wars\" trilogy, based on the motion pictures. \"Star wars: a new hope\" recounts the adventures of Luke Skywalker as he intercepts a cryptic message from a beautiful princess and heads for a desparate encounter in the enemy battle station known as the Death Star. \"The empire strikes back\" goes on to expose Darth Vader's scheme to capture Luke and the rebels and makes the shocking revelation that Vader is Luke's father. \"Return of the Jedi\" recounts the rebels' relentless attempt to destroy the second Death Star, and Luke's ultimate confrontation with the evil emperor.",
      image: "https://books.google.com/books/content?id=Ak7TCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71-B4fcMTSmMVPP7rf38dDu8p5L0GtX6Q6ELtWLPszPFl_Qt98Mn4UWJWQ4AkgJnk412qDnYmJ8SRq0i26M_K4SIxKfd8nvZm6UrAeR9uMYIsuq0s-f3PLdjsG0u93rW2_xAQ4z",
      link: "https://books.google.com/books?id=Ak7TCwAAQBAJ&newbks=1&newbks_redir=0&dq=star+wars&source=gbs_navlinks_s",
      title: "Star Wars Trilogy"
    },
    {
      authors: ["John Ronald Reuel Tolkien"],
      description: "In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell into the hands of Bilbo Baggins, as told in THE HOBBIT. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose.",
      image: "https://books.google.com/books/content?id=H4-RfI4wiggC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71A0zGKqQzAkf-LlVcXSerexPncuDkxfRzLaLXletQTODdx2PacVfZZ9KnW18N8gSijpsI7WgOGHmR1BqikYqLontDA3-At7ph7RrJycPqmezx0X5yj6lHBENy2nnW15CbfJp87",
      link: "https://books.google.com/books?id=H4-RfI4wiggC&dq=lord%20of%20the%20rings%20trilogy&source=gbs_similarbooks",
      title: "The Lord of the Rings: The Fellowship of the Ring"
    },
    {
      authors: ["John Ronald Reuel Tolkien"],
      description: "The standard hardcover edition of the second volume of The Lord of the Rings includes a large format fold-out map. Frodo and his Companions of the Ring have been beset by danger during their quest to prevent the Ruling Ring from falling into the hands of the Dark Lord by destroying it in the Cracks of Doom. They have lost the wizard, Gandalf, in a battle in the Mines of Moria. And Boromir, seduced by the power of the Ring, tried to seize it by force. While Frodo and Sam made their escape, the rest of the company was attacked by Orcs. Now they continue the journey alone down the great River Anduin -- alone, that is, save for the mysterious creeping figure that follows wherever they go.",
      image: "https://books.google.com/books/content?id=NpL-xEJYU6kC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE721qQKWRkN6eivexXJ7oJ_02C8N2vCh4771lu2gbpxDKOruK28pbUugBCWgfXtqqauZaEqf8weKOkIozG_kUsbaHuY8hodzukg1kXbvSDgjcY43WGwzXI0cCVCNPJGMpC0UqKAs",
      link: "https://books.google.com/books?id=NpL-xEJYU6kC&dq=lord%20of%20the%20rings%20trilogy&source=gbs_similarbooks",
      title: "The Lord of the Rings: The Two Towers"
    },
    {
      authors: ["John Ronald Reuel Tolkien"],
      description: "In the epic conclusion of the Lord of the Rings trilogy, Sauron and Gandolf the Grey battle for the One Ring; Frodo makes his way through the darkness to Mordor and Mount Doom to destroy the One Ring ; Aragon learns of his destiny as the true King and the others prepare for a massive battle that will determine the fate of Middle-Earth.",
      image: "https://books.google.com/books/content?id=VzTXZyhoUSwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71gaaErnJw6y1hH9nlcM3lfpVMikXONWdh_9dbr-UVxWzWZtymEUQHdite1gWuyoTE6HxSFiRJk-RQCQJzibtFQqv-NdjYwiGbTmXXGPRvmUbV4zBTIUbJ1nBiNORrjgnXG5dCg",
      link: "https://books.google.com/books?id=VzTXZyhoUSwC&dq=lord%20of%20the%20rings%20trilogy&source=gbs_similarbooks",
      title: "The Lord of the Rings: The Return of the King "
    }
  ]

  //deletes everything in the book collection first
  Book.deleteMany({})
    .then(() => Book.collection.insertMany(BookSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    })
})


module.exports = router