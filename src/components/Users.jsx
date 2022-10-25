import axios from "axios";
import { useState, useEffect } from "react";

import { FaMale } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiAges } from "react-icons/gi";
import Table from "react-bootstrap/Table";

const Users = ({ target }) => {
  const [veri, setVeri] = useState([]);
  const [icons, setIcons] = useState({});

  const url = "https://randomuser.me/api/";

  const getUser = async () => {
    try {
      const infos = await axios(url);

      const { data } = infos;

      const { results } = data;

      setVeri(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container mt-4 text-center">
      {veri?.map((item, index) => {
        const {
          gender,
          picture: { large },
          email,
          location: { country },
          name: { first, last },
          dob: { age },
          phone,
        } = item;
        console.log(large);

        return (
          <div key={index}>
            <img src={large} alt="" className="fluid mt-4 rounded-circle" />
            <p className="display-4">USER INFO</p>
            <div className="tablediv">
              <Table striped bordered hover variant="dark" className="w-300">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Location</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{first}</td>
                    <td>{last}</td>
                    <td>{age}</td>
                    <td>{country}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div>
              <span>
                <FaMale type="button" className="mx-4" />
              </span>
              <span>
                <AiTwotoneMail className="mx-4 " id="mail" />
              </span>
              <span>
                <GiAges id="age" />
              </span>
              <span>
                <GrMapLocation type="button" className="mx-4" id="location" />
              </span>
              <span>
                <BsFillTelephoneFill className="mx-4" id="phone" />
              </span>
            </div>
          </div>
        );
      })}

      <button
        className="btn btn-primary px-4 my-4  text-center"
        onClick={getUser}
      >
        USERS
      </button>
    </div>
  );
};

export default Users;
