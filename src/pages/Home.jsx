import React from "react";
import { Link } from "react-router-dom";

function Home() {
    const categories = [
        {
            name: "Cardboard",
            icon: "📦",
            text: "Boxes, packaging & sheets",
        },
        {
            name: "Coconut Shell",
            icon: "🥥",
            text: "Shells & natural materials",
        },
        {
            name: "Plastic",
            icon: "♻️",
            text: "Bottles, containers & plastic",
        },
        {
            name: "E-Waste",
            icon: "💻",
            text: "Electronics & components",
        },
        {
            name: "Wood",
            icon: "🪵",
            text: "Wood pieces & furniture waste",
        },
        {
            name: "Paper",
            icon: "📄",
            text: "Paper & recyclable sheets",
        },
    ];

    return (
        <main className="professional-home">

            {/* ================= HERO ================= */}

            <section className="premium-hero">

                <div className="hero-glow glow-one"></div>
                <div className="hero-glow glow-two"></div>

                <div className="hero-left">

                    <div className="eco-pill">
                        <span>●</span>
                        COMMUNITY WASTE MARKETPLACE
                    </div>

                    <h1>
                        Waste has value.
                        <br />
                        <span>Give it another life.</span>
                    </h1>

                    <p>
                        Discover reusable and recyclable materials from
                        people, businesses, hostels and communities.
                        Turn unused waste into useful resources.
                    </p>

                    <div className="hero-actions">

                        <Link
                            to="/explore"
                            className="primary-hero-btn"
                        >
                            Explore Materials
                            <span>→</span>
                        </Link>

                        <Link
                            to="/holder-login"
                            className="secondary-hero-btn"
                        >
                            List Your Waste
                        </Link>

                    </div>

                    <div className="hero-stats">

                        <div>
                            <strong>♻️</strong>
                            <span>Reusable</span>
                        </div>

                        <div>
                            <strong>🌱</strong>
                            <span>Eco-friendly</span>
                        </div>

                        <div>
                            <strong>🤝</strong>
                            <span>Community</span>
                        </div>

                    </div>

                </div>


                {/* HERO VISUAL */}

                <div className="hero-right">

                    <div className="orbit orbit-one"></div>
                    <div className="orbit orbit-two"></div>

                    <div className="main-eco-card">

                        <div className="eco-card-top">
                            <span>WASTE</span>
                            <span>→</span>
                            <span>WORTH</span>
                        </div>

                        <div className="eco-main-icon">
                            ♻️
                        </div>

                        <h3>
                            Give materials
                            <br />
                            a second purpose.
                        </h3>

                        <div className="eco-mini-row">

                            <div>📦</div>
                            <div>🥥</div>
                            <div>💻</div>
                            <div>🪵</div>

                        </div>

                    </div>


                    <div className="floating-waste waste-one">
                        📦
                        <span>Cardboard</span>
                    </div>

                    <div className="floating-waste waste-two">
                        ♻️
                        <span>Plastic</span>
                    </div>

                    <div className="floating-waste waste-three">
                        🥥
                        <span>Coconut</span>
                    </div>

                    <div className="floating-waste waste-four">
                        💻
                        <span>E-Waste</span>
                    </div>

                </div>

            </section>


            {/* ================= CATEGORY SECTION ================= */}

            <section className="professional-categories">

                <div className="professional-heading">

                    <div>
                        <span>EXPLORE MATERIALS</span>

                        <h2>
                            Find what you need
                        </h2>
                    </div>

                    <Link to="/explore">
                        View all materials →
                    </Link>

                </div>


                <div className="premium-category-grid">

                    {categories.map((category) => (

                        <Link
                            key={category.name}
                            to={`/explore/${encodeURIComponent(category.name)}`}
                            className="premium-category-card"
                        >

                            <div className="category-number">
                                0{categories.indexOf(category) + 1}
                            </div>

                            <div className="premium-category-icon">
                                {category.icon}
                            </div>

                            <h3>
                                {category.name}
                            </h3>

                            <p>
                                {category.text}
                            </p>

                            <div className="category-arrow">
                                →
                            </div>

                        </Link>

                    ))}

                </div>

            </section>


            {/* ================= VALUE SECTION ================= */}

            <section className="value-section">

                <div className="value-card">

                    <div className="value-icon">
                        ♻️
                    </div>

                    <div>

                        <span>
                            THE WASTE2WORTH IDEA
                        </span>

                        <h2>
                            One person's waste
                            <br />
                            can be another person's resource.
                        </h2>

                    </div>

                </div>


                <div className="value-points">

                    <div>
                        <strong>01</strong>
                        <h3>List</h3>
                        <p>
                            Holders list reusable or recyclable
                            materials available in their location.
                        </p>
                    </div>

                    <div>
                        <strong>02</strong>
                        <h3>Discover</h3>
                        <p>
                            Buyers explore materials by category
                            and location.
                        </p>
                    </div>

                    <div>
                        <strong>03</strong>
                        <h3>Connect</h3>
                        <p>
                            Connect with the holder and give
                            the material a new purpose.
                        </p>
                    </div>

                </div>

            </section>


            {/* ================= CTA ================= */}

            <section className="premium-cta">

                <div className="cta-decoration">
                    ♻️
                </div>

                <span>
                    BUILD A CIRCULAR COMMUNITY
                </span>

                <h2>
                    Don't throw it away.
                    <br />
                    <em>Pass it forward.</em>
                </h2>

                <p>
                    Find useful materials. List what you don't need.
                    Together, we can reduce waste.
                </p>

                <Link
                    to="/explore"
                    className="cta-button"
                >
                    Start Exploring →
                </Link>

            </section>

        </main>
    );
}

export default Home;