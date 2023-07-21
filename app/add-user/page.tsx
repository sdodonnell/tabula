export default function NewUser() {
  return (
    <div className="container">
      <h2 className="title is-2">New User</h2>
      <form method="post" action="http://localhost:4000/addUser">
        <div className="field">
          <label className="label" htmlFor="firstName">
            First Name
          </label>
          <div className="control">
            <input
              id="firstName"
              type="text"
              name="firstName"
              className="input"
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="lastName">
            Last Name
          </label>
          <input id="lastName" type="text" name="lastName" className="input" />
        </div>
        <div className="field">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input id="email" type="email" name="email" className="input" />
        </div>
        <div className="field">
          <label className="label" htmlFor="gender">
            Gender
          </label>
          <div className="select">
            <select id="gender" name="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="type">
            Type
          </label>
          <div className="select">
            <select id="type" name="type">
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="administrator">Administrator</option>
              <option value="parent">Parent</option>
            </select>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
}
