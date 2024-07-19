import Image from "next/image";
import { getAllLecturers, ILecturer } from "../api";
import Link from "next/link";

interface IProps {
  lecturers: ILecturer[]
}

export const LecturerList = ({ lecturers }: IProps) => {
  return <>
    {
      lecturers.map(lecturer => <div className="column" key={lecturer.id}>
        <Image 
          src={"/" + lecturer.photo}
          width={150}
          height={150}
          alt="Photo of lecturer"
        />
        <p>{lecturer.name}</p>
        <p>{lecturer.surname}</p>
        <p>{lecturer.age}</p>
        <Link href={"/lecturers/edit/" + lecturer.id}>
          <button>Edit</button>
        </Link>
      </div>)
    }
  </>  
};
