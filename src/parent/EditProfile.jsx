import React from 'react'

function EditProfile() {
  return (
    <div className="container">
      <div className="titlebar">
        <h5>Edit Profile</h5>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-3">
          <div>
            <img src="img/profile.png" alt="img" />
          </div>
        </div>
        <div className="col-7 mb-3">
            <form>
          <div className="row mb-3">
            <label
              for="colFormLabelSm"
              className="col-sm-3 col-form-label col-form-label-sm"
            >
              Child Name
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control input-border"
                id="colFormLabelSm"
                placeholder="Child Name"
              />
            </div>
          </div>

          <div className="row mb-3">
            <label for="colFormLabel" className="col-sm-3 col-form-label">
              Child (Date of Birth)
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control input-border"
                id="colFormLabel"
                placeholder="Child (Date of Birth)"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label for="age" className="col-sm-3 col-form-label">
              Age
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control input-border"
                id="age"
                placeholder="Age"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label for="age" className="col-sm-3 col-form-label">
              Group of Study
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control input-border"
                id="age"
                placeholder="Group of Study"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <h4 className="text-green">
                Additional Information{" "}
                <span className="text-black">(Optional)</span>
              </h4>
            </div>
          </div>
          <div className="row mb-3">
            <label for="pp" className="col-sm-3 col-form-label">
              Parent Number
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control input-border"
                id="pp"
                placeholder="Parent Number"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label for="address" className="col-sm-3 col-form-label">
              Address
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control input-border"
                id="address"
                placeholder="Address"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label for="email" className="col-sm-3 col-form-label">
              Email
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control input-border"
                id="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="col-2">
            <div>
              <button className="editbtn" type='submit'>
                Edit Profile
              </button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile
