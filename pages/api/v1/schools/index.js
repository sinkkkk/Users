import { PrismaClient } from "@prisma/client"

/*
const schools = [
  {
    id: 1,
    name: "Tallinna Polütehnikum",
    address: "Pärnu mnt 57a, 10135 Tallinn",
    student_id: [1, 2],
    class_id: [5, 6]
  },
  {
    id: 2,
    name: "Gustav Adolfi Gümnaasium",
    address: "Suur-Kloostri 16, 10133 Tallinn",
    student_id: [3, 4],
    class_id: [3, 4]
  },
  {
    id: 3,
    name: "Jüri Gumnaasium",
    address: "Laste 3, Rae, 75301 Harju maakond",
    student_id: [5, 6],
    class_id: [1, 2]
  }
] */

export default async function schoolIDHandler (req, res) {
  const {
    method, id
  } = req

  const prisma = new PrismaClient()

  switch (method) {
    case "POST": {
      console.log(req.body)
      const school = await prisma.school.create({
        data: req.body.school
      })
      res.status(201).json(school)
      break
    }
    case "GET": {
      const schools = await prisma.school.findMany()
      res.status(200).json(schools)
      break
    }
    case "DELETE": {
      await prisma.school.delete({
        where: {
          id: id
        }
      })
      res.status(204)
      break
    }
  }
}
