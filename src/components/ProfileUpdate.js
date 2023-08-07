import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux'
const ProfileUpdate = ({handleClose}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [sickness, setSickness] = useState('');
  const dispatch = useDispatch()
  useEffect(() => {
    // Fetch the user's profile data from the backend
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('/users/profile');

        const { name, email, age, sex, sickness } = response.data;

        setName(name);
        setEmail(email);
        setAge(age);
        setSex(sex);
        setSickness(sickness);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put('/users/profile', {
        name,
        email,
        password,
        age,
        sex,
        sickness,
      });

      // Handle successful profile update
      console.log('Profile updated successfully');
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };
  return (
   <form onSubmit={handleSubmit} className="container rounded bg-white mt-5 mb-5">
  <div className="row">
    <div className="col-md-3 border-right">
      <div className="d-flex flex-column align-items-center text-center p-3 py-5">
        <div className="rounded-circle mt-5">
          <img
            className="profile-image"
            width="150px"
            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            alt="Profile"
          />
        </div>
        <div className="font-weight-bold">Edogaru</div>
        <div className="text-black-50">edogaru@mail.com.my</div>
        <div>
          <input
            type="file"
            accept="image/*"
            className="file-input"
          />
        </div>
        <div>
          <button className="btn btn-primary profile-button" type="submit">
            Upload Picture
          </button>
        </div>
      </div>
    </div>
    <div className="col-md-9 border-right">
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-right">Profile Settings</h4>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <label className="labels">Full Name</label>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="labels">E-mail</label>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <label className="labels">Password</label>
            <input
              type="password"
              className="form-control form-control-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="labels">Confirm Password</label>
            <input
              type="password"
              className="form-control form-control-sm"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <label className="labels">Age</label>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="labels">Sex</label>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <label className="labels">Sickness</label>
            <select
              className="form-control form-control-sm"
              value={sickness}
              onChange={(e) => setSickness(e.target.value)}
            >
              <option>Select Sickness</option>
              <option>Sickness 1</option>
              <option>Sickness 2</option>
              <option>Sickness 3</option>
              <option>Sickness 4</option>
            </select>
          </div>
        </div>
        <div className="mt-5 text-center">
          <button className="btn btn-primary profile-button" type="submit">
            Save Profile
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="close-button">
    <button onClick={handleClose}>Close</button>
  </div>
</form>

  );
};

export default ProfileUpdate;
