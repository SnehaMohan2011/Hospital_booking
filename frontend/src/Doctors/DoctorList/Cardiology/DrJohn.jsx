import React from "react";
import { useNavigate } from "react-router-dom";
import "../DoctorList.css";
import doctor1 from "../../../assets/doc12.jpeg";

const DrJohn = () => {
  const navigate = useNavigate();

  return (
    <div className="doctor-profile-container">
      {/* Header Section */}
      <div className="doctor-header">
        <h2>Doctor</h2>
        <p>
          <span className="highlight">Dr. JOHN</span>
        </p>
      </div>

      {/* Doctor Info Section */}
      <div className="doctor-info">
        {/* Left - Image & Button */}
        <div className="doctor-left">
          <img src={doctor1} alt="Dr. John" className="doctor-image" />
          <h3>Dr. JOHN</h3>
          <p>CARDIOLOGIST</p>
          <button onClick={() => navigate("/booking")} className="appointment-btn">
            BOOK APPOINTMENT
          </button>
        </div>

        {/* Right - Details Table */}
        <div className="doctor-right">
          <table className="details-table">
            <tbody>
              <tr>
                <td className="label">Qualifications</td>
                <td>MD (Cardiology)</td>
              </tr>
              <tr>
                <td className="label">Experience</td>
                <td>27 Years</td>
              </tr>
              <tr>
                <td className="label">Availability</td>
                <td>MON – SAT (08:00 AM – 4:00 PM)</td>
              </tr>
              <tr className="bio-row">
                <td colSpan="2">
                  <p>
                    Dr. John has completed her undergraduate from P.S.G. Institute of Medical Sciences & Research,
                    Coimbatore...
                  </p>
                  <p>
                    Currently, he heads the department of Cardiology at Sneharika Hospital with a team of four
                    Consultants...
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DrJohn;
