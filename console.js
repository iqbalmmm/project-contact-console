// const names = ['Jubaedah', 'Jaenab', 'Lionel Messi']

// const showNames = names => {
//     for (let i = 0; i < names.length; i++) {
//         const name = names[i]

//         console.log(`[${i + 1}] ${name}`)
//     }
// }

// showNames(names)

// const names1 = ['Jujuj', 'Fatimah', 'Holila']

// const filterNames = (names1, minimumLength) => {
//   let newNames = []

//   for (let index = 0; index < names.length; index++) {
//     const name2 = names1[index]

//     if (name.length >= minimumLength) {
//       newNames.push(name)
//     }
//   }

//   return newNames
// }

// const filteredNames = filterNames(names1, 7)

// showNames(filteredNames)

const myContacts = [
  {
    id: 1,
    name: "Sulaiman Anderson",
    phone: "0819234567",
    Email: "yur@gamil.com",
    favorite: true,
    rating: 9,
    tags: ["popular", "cool"]
  },
  {
    id: 2,
    name: "Agus",
    phone: "08112223334",
    email: "haji@gmail.com"
  },
  {
    id: 3,
    name: "Munawaroh",
    phone: "081320022260",
    email: "gorila@gmail.com"
  }
];

const showContacts = contacts => {
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    console.log(
      `[${contact.id}] ${contact.name} (${contact.phone}) <${contact.email}>`
    );
  }
};

showContacts(myContacts)

const filterContacts = (contacts, minimumNameLength) => {
    let newContacts = []

    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i]

        if (contact.name.length >= minimumNameLength) {
            newContacts.push(contact)
        }
    } 
    return newContacts
}

const filteredContacts = filterContacts(myContacts, 12)

showContacts(filteredContacts)


