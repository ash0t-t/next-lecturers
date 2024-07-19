import { handleUpdate } from "@/app/lib/actions/lecturer-actions";
import { getLecturerById, updateLecturer } from "@/app/lib/api";
import { ImagePicker } from "@/app/lib/components/image-picker";
import Image from "next/image";

interface IProps {
  params: { id: number };
}

export default function Page({ params }: IProps) {
  const lecturer = getLecturerById(params.id);
  return (
    <>
      <p className="is-size-3">Edit Lecturer No. {params.id}</p>
      <div className="columns">
        <div className="column  is-two-fifths my-4">
          <form className="box" action={handleUpdate.bind(null, params.id)}>
            <div className="field my-4">
              <input
                type="text"
                className="input is-primary"
                name="name"
                placeholder="Enter a name"
                defaultValue={lecturer.name}
              />
            </div>
            <div className="field my-4">
              <input
                type="text"
                className="input is-primary"
                name="surname"
                placeholder="Enter a surname"
                defaultValue={lecturer.surname}
              />
            </div>
            <div className="field my-4">
              <input
                type="text"
                className="input is-primary"
                name="age"
                placeholder="Enter an age"
                defaultValue={lecturer.age}
              />
            </div>
            <div className="field my-4">
              <Image
                src={"/" + lecturer.photo}
                width={150}
                height={150}
                alt="Lecturer photo"
              />
            </div>
            <div className="field my-4">
              <ImagePicker />
            </div>
            <div className="field my-4">
              <button className="button is-info">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
