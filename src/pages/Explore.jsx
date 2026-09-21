import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_URL = "http://localhost:5000/api/products";

function Explore() {
    const { category } = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [sortBy, setSortBy] = useState("latest");

    const categories = [
        { name: "Cardboard", icon: "📦" },
        { name: "Coconut Shell", icon: "🥥" },
        { name: "Plastic", icon: "♻️" },
        { name: "E-Waste", icon: "💻" },
        { name: "Wood", icon: "🪵" },
        { name: "Paper", icon: "📄" },
        { name: "Metal", icon: "🔩" },
        { name: "Glass", icon: "🫙" },
        { name: "Other", icon: "♻️" },
    ];

    useEffect(() => {
        const getProducts = async () => {
            try {
                setLoading(true);

                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data = await response.json();

                setProducts(data);
                setError("");
            } catch (err) {
                console.error(err);
                setError(
                    "Unable to load materials. Please check the backend."
                );
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    const currentCategory = category
        ? decodeURIComponent(category)
        : "All Materials";

    const filteredProducts = category
        ? products.filter(
            (product) =>
                product.category?.toLowerCase() ===
                currentCategory.toLowerCase()
        )
        : products;

    const sortedProducts = [...filteredProducts].sort(
        (a, b) => {
            if (sortBy === "price-low") {
                return Number(a.price) - Number(b.price);
            }

            if (sortBy === "price-high") {
                return Number(b.price) - Number(a.price);
            }

            return (
                new Date(b.createdAt) -
                new Date(a.createdAt)
            );
        }
    );

    const getIcon = (productCategory) => {
        const found = categories.find(
            (item) =>
                item.name.toLowerCase() ===
                productCategory?.toLowerCase()
        );

        return found?.icon || "♻️";
    };

    const isCardboardPage =
        currentCategory.toLowerCase() === "cardboard";

    return (
        <main
            className={
                isCardboardPage
                    ? "category-marketplace-page cardboard-page"
                    : "explore-page"
            }
        >

            {/* =================================================
          CARDboard PREMIUM HEADER
      ================================================= */}

            {isCardboardPage ? (
                <section className="cardboard-premium-header">

                    <div className="cardboard-glow cardboard-glow-one"></div>
                    <div className="cardboard-glow cardboard-glow-two"></div>

                    <div className="cardboard-floating floating-box-one">
                        📦
                    </div>

                    <div className="cardboard-floating floating-box-two">
                        ♻️
                    </div>

                    <div className="cardboard-floating floating-box-three">
                        📄
                    </div>

                    <div className="cardboard-header-content">

                        <div className="cardboard-breadcrumb">
                            <Link to="/">Home</Link>
                            <span>›</span>
                            <Link to="/explore">Explore</Link>
                            <span>›</span>
                            <strong>Cardboard</strong>
                        </div>

                        <div className="cardboard-label">
                            <span>●</span>
                            WASTE MARKETPLACE
                        </div>

                        <h1>
                            Give cardboard
                            <br />
                            <span>another purpose.</span>
                        </h1>

                        <p>
                            Discover reusable cardboard boxes, packaging
                            materials and sheets shared by the community.
                        </p>

                        <div className="cardboard-stats">

                            <div className="cardboard-stat">
                                <strong>
                                    {filteredProducts.length}
                                </strong>
                                <span>Available Listings</span>
                            </div>

                            <div className="cardboard-stat">
                                <strong>♻️</strong>
                                <span>Reusable Material</span>
                            </div>

                            <div className="cardboard-stat">
                                <strong>🌱</strong>
                                <span>Eco Friendly</span>
                            </div>

                        </div>

                    </div>


                    <div className="cardboard-visual">

                        <div className="cardboard-orbit orbit-a"></div>
                        <div className="cardboard-orbit orbit-b"></div>

                        <div className="cardboard-main-card">

                            <div className="cardboard-card-top">
                                <span>WASTE</span>
                                <span>→</span>
                                <span>WORTH</span>
                            </div>

                            <div className="cardboard-big-icon">
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

                            <div className="cardboard-mini-items">
                                <span>📦</span>
                                <span>📄</span>
                                <span>♻️</span>
                            </div>

                        </div>

                    </div>

                </section>
            ) : (

                /* =================================================
                   EXISTING NON-CARDBOARD EXPLORE HEADER
                ================================================= */

                <section className="explore-header">

                    <div>

                        <div className="breadcrumb">
                            <Link to="/">Home</Link>
                            <span>›</span>
                            <span>Explore</span>

                            {category && (
                                <>
                                    <span>›</span>
                                    <strong>{currentCategory}</strong>
                                </>
                            )}
                        </div>

                        <span className="market-label">
                            WASTE MARKETPLACE
                        </span>

                        <h1>{currentCategory}</h1>

                        <p>
                            {category
                                ? `Materials listed under ${currentCategory}`
                                : "Discover reusable and recyclable materials from the community."}
                        </p>

                    </div>

                </section>
            )}


            {/* =================================================
          CATEGORY NAVIGATION
      ================================================= */}

            <section
                className={
                    isCardboardPage
                        ? "cardboard-category-section"
                        : "category-bar"
                }
            >

                <div className="category-scroll">

                    <Link
                        to="/explore"
                        className={
                            !category
                                ? "category-filter active"
                                : "category-filter"
                        }
                    >
                        All
                    </Link>

                    {categories.map((item) => (

                        <Link
                            key={item.name}
                            to={`/explore/${encodeURIComponent(
                                item.name
                            )}`}
                            className={
                                category &&
                                    currentCategory.toLowerCase() ===
                                    item.name.toLowerCase()
                                    ? "category-filter active"
                                    : "category-filter"
                            }
                        >

                            <span>{item.icon}</span>

                            {item.name}

                        </Link>

                    ))}

                </div>

            </section>


            {/* =================================================
          PRODUCTS AREA
      ================================================= */}

            <section
                className={
                    isCardboardPage
                        ? "cardboard-products-section"
                        : "products-section"
                }
            >

                <div className="products-top">

                    <div>

                        <span className="section-mini-label">
                            MATERIAL COLLECTION
                        </span>

                        <h2>
                            {category
                                ? `${currentCategory} Materials`
                                : "Available Materials"}
                        </h2>

                        <p>
                            {sortedProducts.length} listing
                            {sortedProducts.length !== 1
                                ? "s"
                                : ""}
                        </p>

                    </div>

                    <select
                        className="sort-select"
                        value={sortBy}
                        onChange={(e) =>
                            setSortBy(e.target.value)
                        }
                    >
                        <option value="latest">
                            Latest Listings
                        </option>

                        <option value="price-low">
                            Price: Low to High
                        </option>

                        <option value="price-high">
                            Price: High to Low
                        </option>
                    </select>

                </div>


                {/* LOADING */}

                {loading && (
                    <div className="cardboard-loading">

                        <div className="loading-orbit">
                            ♻️
                        </div>

                        <h3>
                            Finding materials...
                        </h3>

                        <p>
                            Connecting to the Waste2Worth marketplace
                        </p>

                    </div>
                )}


                {/* ERROR */}

                {error && (
                    <div className="market-error">
                        {error}
                    </div>
                )}


                {/* EMPTY */}

                {!loading &&
                    !error &&
                    sortedProducts.length === 0 && (

                        <div className="cardboard-empty">

                            <div className="empty-animation">

                                <div className="empty-orbit"></div>

                                <div className="empty-box">
                                    📦
                                </div>

                            </div>

                            <span>
                                NO LISTINGS YET
                            </span>

                            <h2>
                                No {currentCategory} listed yet
                            </h2>

                            <p>
                                There are currently no materials in
                                this category.
                            </p>

                            <Link
                                to="/explore"
                                className="empty-button"
                            >
                                Browse Other Materials →
                            </Link>

                        </div>
                    )}


                {/* REAL MONGODB PRODUCTS */}

                {!loading &&
                    !error &&
                    sortedProducts.length > 0 && (

                        <div className="cardboard-product-grid">

                            {sortedProducts.map(
                                (product, index) => (

                                    <Link
                                        key={product._id}
                                        to={`/product/${product._id}`}
                                        className="cardboard-product-card"
                                        style={{
                                            animationDelay: `${index * 0.08}s`,
                                        }}
                                    >

                                        <div className="cardboard-product-visual">

                                            <div className="product-glow"></div>

                                            {product.image ? (

                                                <img
                                                    src={product.image}
                                                    alt={product.productName}
                                                />

                                            ) : (

                                                <span>
                                                    {getIcon(
                                                        product.category
                                                    )}
                                                </span>

                                            )}

                                            <div className="product-floating-tag">
                                                ♻️ Reusable
                                            </div>

                                        </div>


                                        <div className="cardboard-product-info">

                                            <span className="product-category">
                                                {product.category}
                                            </span>

                                            <h3>
                                                {product.productName}
                                            </h3>

                                            <p>
                                                {product.description}
                                            </p>


                                            <div className="cardboard-product-meta">

                                                <span>
                                                    📦 {product.quantity}{" "}
                                                    {product.unit}
                                                </span>

                                                <span>
                                                    📍 {product.address}
                                                </span>

                                            </div>


                                            <div className="cardboard-product-bottom">

                                                <div>
                                                    <small>
                                                        PRICE
                                                    </small>

                                                    <strong>
                                                        ₹{product.price}
                                                    </strong>
                                                </div>

                                                <div className="product-arrow">
                                                    →
                                                </div>

                                            </div>

                                        </div>

                                    </Link>

                                )
                            )}

                        </div>
                    )}

            </section>

        </main>
    );
}

export default Explore;