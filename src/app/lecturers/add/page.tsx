import { handleAdd } from "@/app/lib/actions/lecturer-actions";
import { ImagePicker } from "@/app/lib/components/image-picker";

export default function Page() {
  return (
    <>
      <h1 className="is-size-5">Add new lecturer!</h1>
      <div className="columns">
        <div className="column  is-two-fifths my-4">
          <form className="box" action={handleAdd}>
            <div className="field my-4">
              <input
                type="text"
                className="input is-primary"
                name="name"
                placeholder="Enter a name"
              />
            </div>
            <div className="field my-4">
              <input
                type="text"
                className="input is-primary"
                name="surname"
                placeholder="Enter a surname"
              />
            </div>
            <div className="field my-4">
              <input
                type="text"
                className="input is-primary"
                name="age"
                placeholder="Enter an age"
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
