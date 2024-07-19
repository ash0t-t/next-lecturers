const Database = require("better-sqlite3");
const db = new Database("lecturers.db");

export interface ILecturer {
  id: number;
  name: string;
  surname: string;
  age: number;
  photo: string;
}
export type InputLecturer = Omit<ILecturer, "id">;

export const getAllLecturers = (): ILecturer[] => {
  return db.prepare("SELECT * FROM lecturers").all() as ILecturer[];
};

export const addLecturer = (lecturer: InputLecturer) => {
  db.prepare(
    `
      INSERT INTO lecturers(name, surname, age, photo)
      VALUES(@name, @surname, @age, @photo)
    `
  ).run(lecturer);
};

export const getLecturerById = (id: number) => {
  return db
    .prepare("SELECT * FROM lecturers WHERE id = ?")
    .get(id) as ILecturer;
};

export const updateLecturer = (id: number, body: Partial<InputLecturer>) => {
  if (!body.photo) {
    return db
      .prepare(
        "UPDATE lecturers set name = ?, surname = ?, age = ? WHERE id = ?"
      )
      .run(body.name, body.surname, body.age, id);
  } else {
    return db
      .prepare(
        "UPDATE lecturers set name = ?, surname = ?, age = ?, photo = ? WHERE id = ?"
      )
      .run(body.name, body.surname, body.age, body.photo, id);
  }
};
