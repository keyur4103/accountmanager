import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, changePassword } from "../store";
import "bootstrap-icons/font/bootstrap-icons.css";
import toast from "react-hot-toast";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [mobileno, setMobileno] = useState(user.mobileno);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(updateUser({ username, email, mobileno }));
    toast.success("Profile updated successfully");
    setIsEditing(false); // Disable editing mode after saving
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmNewPassword) {
      toast.error("New passwords do not match");
      return;
    }
    dispatch(changePassword({ currentPassword, newPassword }));
    toast.success("Password changed successfully");
    setShowPasswordFields(false); // Hide password fields after changing password
  };

  const handleRecoverPassword = () => {
    if (!user.password) {
      toast.error("No current password available");
    } else {
      alert(`Your current password is: ${user.password}`);
    }
  };

  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmNewPasswordVisibility = () => {
    setShowConfirmNewPassword(!showConfirmNewPassword);
  };

  const togglePasswordFields = () => {
    setShowPasswordFields(!showPasswordFields);
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center">Profile</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobileno" className="form-label">
                Mobile No
              </label>
              <input
                type="tel"
                className="form-control"
                id="mobileno"
                value={mobileno}
                onChange={(e) => setMobileno(e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <button
              type="button"
              className={`btn ${
                isEditing ? "btn-primary" : "btn-success"
              } w-100 mb-3`}
              onClick={isEditing ? handleSave : toggleEditMode}
            >
              {isEditing ? "Save" : "Edit"}
            </button>

            <button
              type="button"
              className="btn btn-secondary w-100 mb-3"
              onClick={togglePasswordFields}
            >
              {showPasswordFields ? "Hide Password Fields" : "Change Password"}
            </button>

            <button
              type="button"
              className="btn btn-info w-100 mb-3"
              onClick={handleRecoverPassword}
            >
              Recover Password
            </button>

            {showPasswordFields && (
              <>
                <h3 className="text-center">Change Password</h3>
                <div className="mb-3 position-relative">
                  <label htmlFor="currentPassword" className="form-label">
                    Current Password
                  </label>
                  <div className="input-group">
                    <input
                      type={showCurrentPassword ? "text" : "password"}
                      className="form-control"
                      id="currentPassword"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <span
                      className="input-group-text eye-icon"
                      onClick={toggleCurrentPasswordVisibility}
                    >
                      <i
                        className={`bi ${
                          showCurrentPassword ? "bi-eye-slash" : "bi-eye"
                        }`}
                      ></i>
                    </span>
                  </div>
                </div>
                <div className="mb-3 position-relative">
                  <label htmlFor="newPassword" className="form-label">
                    New Password
                  </label>
                  <div className="input-group">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      className="form-control"
                      id="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <span
                      className="input-group-text eye-icon"
                      onClick={toggleNewPasswordVisibility}
                    >
                      <i
                        className={`bi ${
                          showNewPassword ? "bi-eye-slash" : "bi-eye"
                        }`}
                      ></i>
                    </span>
                  </div>
                </div>
                <div className="mb-3 position-relative">
                  <label htmlFor="confirmNewPassword" className="form-label">
                    Confirm New Password
                  </label>
                  <div className="input-group">
                    <input
                      type={showConfirmNewPassword ? "text" : "password"}
                      className="form-control"
                      id="confirmNewPassword"
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                    <span
                      className="input-group-text eye-icon"
                      onClick={toggleConfirmNewPasswordVisibility}
                    >
                      <i
                        className={`bi ${
                          showConfirmNewPassword ? "bi-eye-slash" : "bi-eye"
                        }`}
                      ></i>
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-danger w-100"
                  onClick={handleChangePassword}
                >
                  Change Password
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
