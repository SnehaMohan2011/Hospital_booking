import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './frontpage.css';
import HomeImage from "../assets/home1.jpg";
import HomeImage1 from "../assets/home2.jpg";
import { FaArrowRight } from "react-icons/fa";

const specialties = [
    { icon: "💉", title: "Anesthesiology" },
    { icon: "❤️", title: "Cardiology" },
    { icon: "🫀", title: "Cardiovascular And Thoracic Surgery" },
    { icon: "🩸", title: "Clinical Hematology" },
    { icon: "🦷", title: "Dentistry" },
    { icon: "🧴", title: "Dermatology" },
    { icon: "🍩", title: "Diabetology And Endocrinology" },
    { icon: "🚨", title: "Emergency Care" },
];
const AppointmentSection = () => {
    const [counts, setCounts] = useState({
        staffs: 0,
        experience: 0,
        equipment: 0,
        awards: 0,
        degreeHealthcare: 0,
        beds: 0
    });

    useEffect(() => {
        const targetCounts = {
            staffs: 1400,
            experience: 49,
            equipment: 100,
            awards: 80,
            degreeHealthcare: 360,
            beds: 950
        };

        const interval = setInterval(() => {
            setCounts(prevCounts => {
                const newCounts = { ...prevCounts };
                Object.keys(newCounts).forEach(key => {
                    if (newCounts[key] < targetCounts[key]) {
                        newCounts[key] += Math.ceil(targetCounts[key] / 50);
                    }
                });
                return newCounts;
            });
        }, 50);

        setTimeout(() => clearInterval(interval), 3000);
    }, []);
}

const frontpage = () => {
    const navigate=useNavigate();

    const handleAppointmentClick=()=>{
        navigate('/booking');
    };

    return (
        <div className="homepage-container">
            {/* Header Section */}
            <header className="header">
                <div className="logo-container">
                    <img src="/assets/logo.png" alt="Sri Ramakrishna Hospital Logo" className="logo" />
                    <h1>Sri Ramakrishna Hospital</h1>
                    <p>"Expertise You Can Trust"</p>
                </div>

                <div className="contact-info">
                    <p> +91 422 350 0000 | +91 422 450 0000 | +91 7970 108 108</p>
                    <p>  395, Sarojini Naidu Rd, New Siddhapudur, Coimbatore, Tamil Nadu 641044.</p>
                </div>
            </header>

            {/* Navigation Bar */}
            <nav className="navbar">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Doctors</li>
                    <li>Facilities</li>
                    <li>Contact Us</li>
                    <li>Admin Log</li>
                </ul>
            </nav>

            {/* Main Content Section */}
            <div className="content">
                <div className="left-section">
                    <h2>Sri Ramakrishna Hospital's Stroke Center honored as a</h2>
                    <h1 className="highlight">Advanced Stroke Center</h1>
                    <p>Paving the way for faster and more comprehensive <b>stroke recovery</b>.</p>
                    <button className="cta-button">Register</button>
                </div>

                <div className="right-section">
                    <img src={HomeImage} alt="Award Ceremony" className="award-image" />
                </div>
            </div>
            {/* About Us Section */}
<div className="about-section">
    <div className="about-left">
        <img src={HomeImage1} alt="Sri Ramakrishna Hospital Building" />
    </div>

    <div className="about-right">
        <h2>About us - Who we are ?</h2>
        <h1>Best Multispeciality Hospital In Coimbatore</h1>
        <p>
            Sri Ramakrishna Hospital is the Best multispeciality hospital in Coimbatore.
            Located in the traditional textile capital of South India, attained an iconic
            reputation since its inception in 1975. Our Best Hospital in Coimbatore is
            situated on 18 acres of land right in the heart of Coimbatore city. 
        </p>
    </div>
</div>
{/* Core Values Section */}
<div className="core-values-section">
    <h3 className="core-values-title">How we work</h3>
    <h1 className="core-values-heading">Our Core Values</h1>
    <p className="core-values-subtitle">
        Our fundamental principles, beliefs and values that drive our business
    </p>

    <div className="core-values-cards">
        <div className="value-card">
            <div className="value-card-icon">🛡️</div>
            <h3>Reliability</h3>
            <p className="highlight">WE WANT TO BE KNOWN AS RELIABLE</p>
            <p>We are committed to providing our reliability by delivering the best possible care and treatment.</p>
        </div>

        <div className="value-card">
            <div className="value-card-icon">🤝</div>
            <h3>Responsibility</h3>
            <p className="highlight">WE ARE MOTIVATED BY RESPONSIBILITY</p>
            <p>We always strive to do everything in our capacity to serve our patients better.</p>
        </div>

        <div className="value-card">
            <div className="value-card-icon">🤲</div>
            <h3>Respect</h3>
            <p className="highlight">WE TREAT OTHERS AS WE EXPECT TO BE TREATED</p>
            <p>We always treat people with courtesy, politeness and kindness.</p>
        </div>

        <div className="value-card">
            <div className="value-card-icon">⚖️</div>
            <h3>Reasonable</h3>
            <p className="highlight">WE ARE GUIDED BY OUR INTENT TO BE FAIR</p>
            <p>We are committed to offering the best healthcare at the most affordable price.</p>
        </div>
    </div>
</div>
{/* Specialties Section */}
<div className="specialties-section">
                <h2>Our Specialities</h2>
                <p>We take pride in offering a comprehensive range of specialized medical services to cater to all your healthcare needs.</p>

                <div className="specialties-cards">
                    {specialties.map((specialty, index) => (
                        <div key={index} className="specialty-card">
                            <div className="specialty-icon">{specialty.icon}</div>
                            <div className="specialty-title">{specialty.title}</div>
                        </div>
                    ))}
                </div>

                <button className="know-more-btn">
                    Know More <FaArrowRight />
                </button>
            </div>
            <div className="appointment-section">
            <div className="appointment-content">
                <h3>Schedule an Appointment</h3>
                <h1>Consult our Doctors</h1>
                <p>
                    Beat The Queue To Consult A Doctor From Sri Ramakrishna
                    Hospital. You Deserve The Best Healthcare In The Comfort Of
                    Your Home!
                </p>
               <button classNmae="appointment-btn" onClick={handleAppointmentClick}>Book Appointment</button>
            </div>

            <div className="why-choose-us">
                <h2>Why choose us</h2>
                <p>We constantly strive to provide the best healthcare,
                    with such an effort we have achieved,</p>

                <div className="stats-cards">
                    <div className="stat-card"> <span>1400+</span> Qualified Staffs </div>
                    <div className="stat-card"> <span>49+</span> Years of Experience </div>
                    <div className="stat-card"> <span>100+</span> Modern Equipment </div>
                    <div className="stat-card"> <span>80+</span> Awards Won </div>
                    <div className="stat-card"> <span>360</span> Degree Healthcare </div>
                    <div className="stat-card"> <span>950+</span> Bedded Hospital </div>
                </div>
            </div>
        </div>
        
        </div>
    );
};

export default frontpage;