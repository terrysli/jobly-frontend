import { useState } from "react";
/** EditProfileForm
 *
 * Props:
 *  - editProfile
 *  - user : {username, firstName, lastName, email}
 *
 */
function EditProfileForm({ editProfile, user }) {
  const [formData, setFormData] = useState({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });

  const [alert, setAlert] = useState([]);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fd) => ({
      ...fd,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await editProfile(formData);
    } catch (err) {
      setAlert(alt => ([
        ...alt,
        err
      ]));
    }
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <label htmlFor="username-input">Username</label>
      <input
        id="username-input"
        name="username"
        value={formData.username}
        onChange={handleChange}
        disabled
      />
      <label htmlFor="first-name-input">First Name</label>
      <input
        id="first-name-input"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <label htmlFor="last-name-input">Last Name</label>
      <input
        id="last-name-input"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <label htmlFor="email-input">Email</label>
      <input
        id="first-name-input"
        name="firstName"
        value={formData.email}
        onChange={handleChange}
        required
      />
      {alert && (
        <div class="alert alert-danger" role="alert">
          {alert}
        </div>
      )}
      <button>Submit</button>
    </form>
  );
}
export default EditProfileForm;
