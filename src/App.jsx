import { useState } from "react";
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [registered, setRegistered] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    userType: "",
    location: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistered(true);
  };

  /* =========================
     MATERIAL HOLDER LOGIN PAGE
  ========================= */

  if (showLogin) {
    return (
      <div className="login-page">

        {/* Animated Background */}
        <div className="floating-waste waste-one">📦</div>
        <div className="floating-waste waste-two">🥥</div>
        <div className="floating-waste waste-three">♻️</div>
        <div className="floating-waste waste-four">🪵</div>
        <div className="floating-waste waste-five">📰</div>
        <div className="floating-waste waste-six">💻</div>

        {/* Back Button */}
        <button
          className="back-home"
          onClick={() => setShowLogin(false)}
        >
          ← Back to Home
        </button>

        <div className="login-container">

          {/* Left Side */}
          <div className="login-left">

            <div className="login-logo">
              ♻️ Waste2Worth
            </div>

            <p className="login-label">
              MATERIAL HOLDER
            </p>

            <h1>
              Your Waste
              <br />
              <span>Has Value.</span>
            </h1>

            <p className="login-description">
              List your unused materials and connect them
              with people, organizations and recycling teams
              who can give them a second life.
            </p>

            <div className="waste-flow">

              <div className="flow-item">
                <div className="flow-icon">📦</div>
                <span>Your Material</span>
              </div>

              <div className="flow-arrow">
                →
              </div>

              <div className="flow-item">
                <div className="flow-icon">🤖</div>
                <span>Smart Match</span>
              </div>

              <div className="flow-arrow">
                →
              </div>

              <div className="flow-item">
                <div className="flow-icon">🌱</div>
                <span>New Value</span>
              </div>

            </div>

            <div className="login-tip">
              💡 <strong>Why join?</strong>
              <br />
              Turn unused materials into useful resources
              instead of sending them to waste.
            </div>

          </div>


          {/* Right Side */}
          <div className="login-card">

            {!registered ? (
              <>
                <div className="card-heading">
                  <div className="profile-icon">
                    👤
                  </div>

                  <div>
                    <h2>Create Holder Account</h2>
                    <p>
                      Register to list your materials
                    </p>
                  </div>
                </div>


                <form onSubmit={handleSubmit}>

                  {/* Name */}
                  <div className="input-group">
                    <label>Full Name</label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>


                  {/* Phone */}
                  <div className="input-group">
                    <label>Contact Number</label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>


                  {/* Email */}
                  <div className="input-group">
                    <label>Email Address</label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>


                  {/* User Type */}
                  <div className="input-group">
                    <label>Who are you?</label>

                    <select
                      name="userType"
                      value={formData.userType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select your type
                      </option>

                      <option value="individual">
                        Individual
                      </option>

                      <option value="hostel">
                        Hostel
                      </option>

                      <option value="college">
                        College / Institution
                      </option>

                      <option value="shop">
                        Shop / Business
                      </option>

                      <option value="organization">
                        Organization
                      </option>
                    </select>
                  </div>


                  {/* Address */}
                  <div className="input-group">
                    <label>Address</label>

                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your complete address"
                      rows="2"
                      required
                    ></textarea>
                  </div>


                  {/* Location */}
                  <div className="input-group">
                    <label>Location</label>

                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City / Area"
                      required
                    />
                  </div>


                  {/* Password */}
                  <div className="input-group">
                    <label>Create Password</label>

                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a password"
                      required
                    />
                  </div>


                  <button
                    type="submit"
                    className="register-btn"
                  >
                    Create Holder Account →
                  </button>

                </form>


                <p className="privacy-text">
                  🔒 Your details are used only for
                  Waste2Worth material management.
                </p>
              </>
            ) : (

              /* SUCCESS SCREEN */

              <div className="success-screen">

                <div className="success-animation">
                  ♻️
                </div>

                <h2>
                  Welcome to Waste2Worth!
                </h2>

                <p>
                  Your Material Holder account has been
                  created successfully.
                </p>

                <div className="holder-preview">

                  <strong>
                    {formData.name}
                  </strong>

                  <span>
                    {formData.userType}
                  </span>

                  <span>
                    📍 {formData.location}
                  </span>

                </div>

                <button
                  className="dashboard-btn"
                  onClick={() => setShowLogin(false)}
                >
                  Continue to Waste2Worth →
                </button>

              </div>

            )}

          </div>

        </div>

      </div>
    );
  }


  /* =========================
     HOMEPAGE
  ========================= */

  return (
    <div className="app">

      {/* Navigation Bar */}
      <nav className="navbar">

        <div className="logo">
          ♻️ <span>Waste2Worth</span>
        </div>

        <div className="search-box">
          🔍

          <input
            type="text"
            placeholder="Search cardboard, coconut shell, plastic..."
          />
        </div>

        <div className="nav-links">

          <span>Home</span>
          <span>Explore</span>
          <span>List Waste</span>
          <span>Map</span>

          <button
            className="login-btn"
            onClick={() => setShowLogin(true)}
          >
            Holder Login
          </button>

        </div>

      </nav>


      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">

          <p className="small-title">
            ♻️ WASTE TO RESOURCE
          </p>

          <h1>
            Don't Throw It Away.
            <br />
            <span>Give It a Second Life.</span>
          </h1>

          <p className="hero-text">
            Discover nearby people, organizations and
            recycling teams who can turn unused materials
            into useful resources.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              ♻️ Find Waste Materials
            </button>

            <button
              className="secondary-btn"
              onClick={() => setShowLogin(true)}
            >
              ➕ List Your Waste
            </button>

          </div>

        </div>


        <div className="hero-card">

          <div className="circle">
            ♻️
          </div>

          <h2>
            Waste → Value
          </h2>

          <p>
            Connect unused materials with people
            who can reuse them.
          </p>

          <div className="mini-stats">

            <div>
              <strong>50 kg</strong>
              <small>Cardboard</small>
            </div>

            <div>
              <strong>2.5 km</strong>
              <small>Nearby</small>
            </div>

          </div>

        </div>

      </section>


      {/* Categories */}
      <section className="categories">

        <div className="section-heading">

          <div>

            <p className="small-title">
              EXPLORE
            </p>

            <h2>
              Waste Categories
            </h2>

          </div>

          <button className="view-btn">
            View All →
          </button>

        </div>


        <div className="category-grid">

          <div className="category-card">
            <div className="category-icon">📦</div>
            <h3>Cardboard</h3>
            <p>Packaging & reuse</p>
          </div>

          <div className="category-card">
            <div className="category-icon">🥥</div>
            <h3>Coconut Shell</h3>
            <p>Craft & products</p>
          </div>

          <div className="category-card">
            <div className="category-icon">♻️</div>
            <h3>Plastic</h3>
            <p>Reuse & recycling</p>
          </div>

          <div className="category-card">
            <div className="category-icon">💻</div>
            <h3>E-Waste</h3>
            <p>Authorized recycling</p>
          </div>

          <div className="category-card">
            <div className="category-icon">🪵</div>
            <h3>Wood</h3>
            <p>Repair & craft</p>
          </div>

          <div className="category-card">
            <div className="category-icon">📰</div>
            <h3>Paper</h3>
            <p>Reuse & recycling</p>
          </div>

        </div>

      </section>


      {/* Nearby Materials */}
      <section className="nearby">

        <div className="section-heading">

          <div>

            <p className="small-title">
              HYPERLOCAL
            </p>

            <h2>
              Materials Near You
            </h2>

          </div>

          <button className="view-btn">
            Explore All →
          </button>

        </div>


        <div className="material-grid">

          <div className="material-card">

            <div className="material-image cardboard">
              📦
            </div>

            <div className="material-info">

              <span className="tag">
                Reusable
              </span>

              <h3>
                Cardboard
              </h3>

              <p>
                50 kg available
              </p>

              <div className="location">
                📍 2.5 km away
              </div>

              <button className="request-btn">
                View Material
              </button>

            </div>

          </div>


          <div className="material-card">

            <div className="material-image coconut">
              🥥
            </div>

            <div className="material-info">

              <span className="tag">
                Free
              </span>

              <h3>
                Coconut Shells
              </h3>

              <p>
                100 pieces available
              </p>

              <div className="location">
                📍 1.2 km away
              </div>

              <button className="request-btn">
                View Material
              </button>

            </div>

          </div>


          <div className="material-card">

            <div className="material-image wood">
              🪵
            </div>

            <div className="material-info">

              <span className="tag">
                Reusable
              </span>

              <h3>
                Wood Pieces
              </h3>

              <p>
                35 kg available
              </p>

              <div className="location">
                📍 3.1 km away
              </div>

              <button className="request-btn">
                View Material
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* How It Works */}
      <section className="how-it-works">

        <p className="small-title">
          SIMPLE PROCESS
        </p>

        <h2>
          How Waste2Worth Works
        </h2>

        <div className="steps">

          <div className="step">

            <div className="step-number">
              1
            </div>

            <h3>
              List Waste
            </h3>

            <p>
              Upload your unused material with
              quantity and location.
            </p>

          </div>

          <div className="arrow">
            →
          </div>

          <div className="step">

            <div className="step-number">
              2
            </div>

            <h3>
              Smart Matching
            </h3>

            <p>
              Our system finds suitable nearby
              receivers.
            </p>

          </div>

          <div className="arrow">
            →
          </div>

          <div className="step">

            <div className="step-number">
              3
            </div>

            <h3>
              Collect & Reuse
            </h3>

            <p>
              The material is collected and
              converted into value.
            </p>

          </div>

        </div>

      </section>


      {/* Footer */}
      <footer>

        <div className="logo">
          ♻️ <span>Waste2Worth</span>
        </div>

        <p>
          Turning local waste into useful resources.
        </p>

        <p className="copyright">
          © 2026 Waste2Worth
        </p>

      </footer>

    </div>
  );
}

export default App;