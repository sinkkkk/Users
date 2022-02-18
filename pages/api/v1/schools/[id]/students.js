const studentArray = [
  {
    email: "artur.kaasik@tptlive.ee",
    firstname: "Artur",
    lastname: "Kaasik",
    school_id: 123,
    class_id: 321
  },

  {
    email: "harri.sink@tptlive.ee",
    firstname: "Harri",
    lastname: "Sink",
    school_id: 456,
    class_id: 654
  },
  {
    email: "martin.kangsepp@tptlive.ee",
    firstname: "Martin",
    lastname: "Kangsepp",
    school_id: 456,
    class_id: 654
  }
]

export default function handler (req, res) {
  const {
    query: { id },
    method
  } = req

  switch (method) {
    case "GET":
      // Filter studentArray by school ID
      // eslint-disable-next-line no-case-declarations
      const students = studentArray.filter(s => s.school_id.toString() === id)

      // Return OK status and students array
      res.status(200).json({ students, status: 200 })
      break

    default:
      res.status(405).json({ error: "Method not allowed", status: 405 })
      break
  }
}
