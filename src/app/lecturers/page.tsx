import { getAllLecturers } from "../lib/api"
import { LecturerList } from "../lib/components/lecturer-list";

export default function Page() {
  const lecturers = getAllLecturers();
  return <>
    <h1 className="is-size-5">Lecturers</h1>
    <LecturerList lecturers={lecturers}/>
  </>
}