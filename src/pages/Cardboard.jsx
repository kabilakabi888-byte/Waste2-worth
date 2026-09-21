import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5000/api/products";

function Cardboard() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error("Failed to load products");
                }

                const data = await response.json();

                const cardboardProducts = data.filter(
                    (product) =>
                        product.category?.toLowerCase() === "cardboard"
                );

                setProducts(cardboardProducts);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    return (
        <main className="cardboard-page">

            {/* =========================
          HERO
      ========================= */}

            <section className="cardboard-hero">

                <div className="cardboard-bg-glow glow-one"></div>
                <div className="cardboard-bg-glow glow-two"></div>

                {/* floating materials */}

                <div className="cardboard-float float-one">
                    📦
                </div>

                <div className="cardboard-float float-two">
                    ♻️
                </div>

                <div className="cardboard-float float-three">
                    📄
                </div>

                <div className="cardboard-hero-left">

                    <div className="cardboard-breadcrumb">
                        <Link to="/">Home</Link>
                        <span>›</span>
                        <Link to="/explore">Explore</Link>
                        <span>›</span>
                        <strong>Cardboard</strong>
                    </div>

                    <div className="cardboard-pill">
                        <span>●</span>
                        WASTE MARKETPLACE
                    </div>

                    <h1>
                        Cardboard
                        <br />
                        <span>can have another life.</span>
                    </h1>

                    <p>
                        Discover reusable cardboard boxes, packaging
                        materials and sheets shared by people,
                        businesses and communities.
                    </p>

                    <div className="cardboard-actions">

                        <a
                            href="#cardboard-listings"
                            className="cardboard-primary-btn"
                        >
                            Explore Listings
                            <span>→</span>
                        </a>

                        <Link
                            to="/list-waste"
                            className="cardboard-secondary-btn"
                        >
                            List Cardboard
                        </Link>

                    </div>

                    <div className="cardboard-stats">

                        <div>
                            <strong>{products.length}</strong>
                            <span>Listings</span>
                        </div>

                        <div>
                            <strong>♻️</strong>
                            <span>Reusable</span>
                        </div>

                        <div>
                            <strong>🌱</strong>
                            <span>Eco-friendly</span>
                        </div>

                    </div>

                </div>


                {/* =========================
            HERO VISUAL
        ========================= */}

                <div className="cardboard-hero-right">

                    <div className="cardboard-orbit orbit-one"></div>
                    <div className="cardboard-orbit orbit-two"></div>

                    <div className="cardboard-main-card">

                        <div className="cardboard-card-top">
                            <span>WASTE</span>
                            <span>→</span>
                            <span>WORTH</span>
                        </div>

                        <div className="cardboard-icon-box">
                            📦
                        </div>

                        <h2>
                            Cardboard
                            <br />
                            Marketplace
                        </h2>

                        <p>
                            Reuse • Repurpose • Recycle
                        </p>

                        <div className="cardboard-mini-icons">
                            <span>📦</span>
                            <span>📄</span>
                            <span>♻️</span>
                            <span>🌱</span>
                        </div>

                    </div>

                </div>

            </section>


            {/* =========================
          CATEGORY NAVIGATION
      ========================= */}

            <section className="cardboard-category-area">

                <div className="cardboard-category-bar">

                    <Link to="/explore">
                        All
                    </Link>

                    <Link
                        to="/explore/Cardboard"
                        className="active"
                    >
                        📦 Cardboard
                    </Link>

                    <Link to="/explore/Coconut%20Shell">
                        🥥 Coconut Shell
                    </Link>

                    <Link to="/explore/Plastic">
                        ♻️ Plastic
                    </Link>

                    <Link to="/explore/E-Waste">
                        💻 E-Waste
                    </Link>

                    <Link to="/explore/Wood">
                        🪵 Wood
                    </Link>

                    <Link to="/explore/Paper">
                        📄 Paper
                    </Link>

                    <Link to="/explore/Metal">
                        🔩 Metal
                    </Link>

                    <Link to="/explore/Glass">
                        🫙 Glass
                    </Link>

                </div>

            </section>


            {/* =========================
          LISTINGS
      ========================= */}

            <section
                id="cardboard-listings"
                className="cardboard-listings"
            >

                <div className="cardboard-section-heading">

                    <div>
                        <span>
                            COMMUNITY MATERIALS
                        </span>

                        <h2>
                            Cardboard Materials
                        </h2>

                        <p>
                            Real listings from the Waste2Worth community.
                        </p>
                    </div>

                    <div className="cardboard-count">
                        {products.length}{" "}
                        {products.length === 1
                            ? "listing"
                            : "listings"}
                    </div>

                </div>


                {/* LOADING */}

                {loading && (

                    <div className="cardboard-loading">

                        <div className="loading-circle">
                            ♻️
                        </div>

                        <h3>
                            Finding cardboard...
                        </h3>

                        <p>
                            Loading materials from Waste2Worth
                        </p>

                    </div>

                )}


                {/* EMPTY */}

                {!loading && products.length === 0 && (

                    <div className="cardboard-empty">

                        <div className="empty-cardboard-icon">
                            📦
                        </div>

                        <span>
                            NO LISTINGS YET
                        </span>

                        <h2>
                            No cardboard listed yet
                        </h2>

                        <p>
                            There are currently no cardboard materials
                            available in the marketplace.
                        </p>

                        <Link to="/list-waste">
                            List Your Cardboard →
                        </Link>

                    </div>

                )}


                {/* REAL PRODUCTS */}

                {!loading && products.length > 0 && (

                    <div className="cardboard-products-grid">

                        {products.map((product, index) => (

                            <Link
                                key={product._id}
                                to={`/product/${product._id}`}
                                className="cardboard-product-card"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                }}
                            >

                                <div className="cardboard-product-image">

                                    {product.image ? (

                                        <img
                                            src={product.image}
                                            alt={product.productName}
                                        />

                                    ) : (

                                        <span>📦</span>

                                    )}

                                    <div className="reusable-badge">
                                        ♻️ Reusable
                                    </div>

                                </div>


                                <div className="cardboard-product-content">

                                    <span className="material-label">
                                        {product.category}
                                    </span>

                                    <h3>
                                        {product.productName}
                                    </h3>

                                    <p>
                                        {product.description}
                                    </p>

                                    <div className="cardboard-product-details">

                                        <span>
                                            📦 {product.quantity}{" "}
                                            {product.unit}
                                        </span>

                                        <span>
                                            📍 {product.address}
                                        </span>

                                    </div>

                                    <div className="cardboard-product-footer">

                                        <div>
                                            <small>PRICE</small>
                                            <strong>
                                                ₹{product.price}
                                            </strong>
                                        </div>

                                        <div className="cardboard-arrow">
                                            →
                                        </div>

                                    </div>

                                </div>

                            </Link>

                        ))}

                    </div>

                )}

            </section>


            {/* =========================
          BOTTOM CTA
      ========================= */}

            <section className="cardboard-bottom-cta">

                <div className="cta-leaf">
                    ♻️
                </div>

                <span>
                    GIVE MATERIALS ANOTHER LIFE
                </span>

                <h2>
                    Don't throw cardboard away.
                    <br />
                    <em>Pass it forward.</em>
                </h2>

                <p>
                    Someone nearby may be looking for exactly
                    what you no longer need.
                </p>

                <Link to="/list-waste">
                    List Your Cardboard →
                </Link>

            </section>

        </main>
    );
}

export default Cardboard;