"use server"
import { createWriteStream } from "fs";
import { addLecturer, InputLecturer, updateLecturer } from "../api";
import { redirect } from "next/navigation";

export const handleAdd = async (data: FormData) => {
  const photo = data.get("photo") as File;
  if (photo) {
    let extension = photo.type.split("/").at(-1);
    const filename = Date.now() + "." + extension;
    const stream = createWriteStream("public/images/" + filename);
    const bufferedImage = await photo.arrayBuffer();
    stream.write(Buffer.from(bufferedImage));
    let lecturer: InputLecturer = {
      name: data.get("name") as string,
      surname: data.get("surname") as string,
      age: +(data.get("age") as string),
      photo: "images/" + filename,
    };
    addLecturer(lecturer);
    redirect("/lecturers");
  }
};

export const handleUpdate = async (id: number, data: FormData) => {
  const lecturer: Partial<InputLecturer> = {
    name: data.get("name") as string,
    surname: data.get("surname") as string,
    age: +(data.get("age") as string),
  };
  const photo = data.get("photo") as File;
  if (photo.size > 0) {
   let extension = photo.type.split("/").at(-1);
   const filename = Date.now() + "." + extension;
   const stream = createWriteStream("public/images/" + filename);
   const bufferedImage = await photo.arrayBuffer();
   lecturer.photo = "images/" + filename;
   stream.write(Buffer.from(bufferedImage));
  }
  updateLecturer(id, lecturer);
  redirect("/lecturers");
}
