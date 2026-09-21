import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/api/products";

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data = await response.json();

                const selectedProduct = data.find(
                    (item) => item._id === id
                );

                setProduct(selectedProduct || null);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getProduct();
    }, [id]);

    const addToCart = () => {
        if (!product) return;

        const existingCart =
            JSON.parse(localStorage.getItem("waste2worth-cart")) || [];

        const existingProduct = existingCart.find(
            (item) => item._id === product._id
        );

        let updatedCart;

        if (existingProduct) {
            updatedCart = existingCart.map((item) =>
                item._id === product._id
                    ? {
                        ...item,
                        cartQuantity: Math.min(
                            item.cartQuantity + quantity,
                            product.quantity
                        ),
                    }
                    : item
            );
        } else {
            updatedCart = [
                ...existingCart,
                {
                    ...product,
                    cartQuantity: quantity,
                },
            ];
        }

        localStorage.setItem(
            "waste2worth-cart",
            JSON.stringify(updatedCart)
        );

        alert("Material added to cart 🛒");
    };

    const buyNow = () => {
        if (!product) return;

        const buyNowItem = {
            ...product,
            cartQuantity: quantity,
        };

        localStorage.setItem(
            "waste2worth-buy-now",
            JSON.stringify(buyNowItem)
        );

        navigate("/order");
    };

    if (loading) {
        return (
            <div className="market-page-loading">
                <div className="loading-animation">♻️</div>
                <h2>Finding your material...</h2>
                <p>Connecting to Waste2Worth marketplace</p>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="product-not-found">
                <div>📦</div>
                <h2>Material Not Found</h2>
                <p>This material may have been removed.</p>

                <Link to="/explore">
                    ← Back to Explore
                </Link>
            </div>
        );
    }

    const totalPrice = product.price * quantity;

    const getIcon = () => {
        if (product.image) return null;

        switch (product.category?.toLowerCase()) {
            case "cardboard":
                return "📦";
            case "plastic":
                return "♻️";
            case "paper":
                return "📄";
            case "wood":
                return "🪵";
            case "e-waste":
                return "💻";
            case "coconut shell":
                return "🥥";
            case "metal":
                return "🔩";
            case "glass":
                return "🫙";
            default:
                return "♻️";
        }
    };

    return (
        <main className="shop-product-page">

            {/* BACKGROUND ANIMATION */}
            <div className="shop-glow shop-glow-one"></div>
            <div className="shop-glow shop-glow-two"></div>

            <div className="shop-floating shop-floating-one">
                ♻️
            </div>

            <div className="shop-floating shop-floating-two">
                📦
            </div>

            <div className="shop-floating shop-floating-three">
                🌱
            </div>

            <div className="shop-product-container">

                {/* BREADCRUMB */}

                <div className="shop-breadcrumb">

                    <Link to="/">
                        Home
                    </Link>

                    <span>›</span>

                    <Link to="/explore">
                        Explore
                    </Link>

                    <span>›</span>

                    <Link
                        to={`/explore/${encodeURIComponent(
                            product.category
                        )}`}
                    >
                        {product.category}
                    </Link>

                    <span>›</span>

                    <strong>
                        {product.productName}
                    </strong>

                </div>

                {/* PRODUCT AREA */}

                <section className="shop-product-card">

                    {/* IMAGE */}

                    <div className="shop-product-visual">

                        <div className="shop-image-glow"></div>

                        <div className="shop-image-box">

                            {product.image ? (
                                <img
                                    src={product.image}
                                    alt={product.productName}
                                />
                            ) : (
                                <span className="shop-large-icon">
                                    {getIcon()}
                                </span>
                            )}

                        </div>

                        <div className="shop-reuse-badge">
                            ♻️ Reusable Material
                        </div>

                    </div>

                    {/* DETAILS */}

                    <div className="shop-product-info">

                        <span className="shop-category">
                            {product.category}
                        </span>

                        <h1>
                            {product.productName}
                        </h1>

                        <p className="shop-description">
                            {product.description}
                        </p>

                        {/* PRICE */}

                        <div className="shop-price-box">

                            <span>PRICE</span>

                            <strong>
                                ₹{product.price}
                            </strong>

                            <small>
                                per {product.unit}
                            </small>

                        </div>

                        {/* AVAILABILITY */}

                        <div className="shop-availability">

                            <div>
                                <span>AVAILABLE</span>

                                <strong>
                                    {product.quantity}{" "}
                                    {product.unit}
                                </strong>
                            </div>

                            <div>
                                <span>LOCATION</span>

                                <strong>
                                    📍 {product.address}
                                </strong>
                            </div>

                        </div>

                        {/* QUANTITY */}

                        <div className="shop-quantity-section">

                            <span>
                                Select Quantity
                            </span>

                            <div className="quantity-control">

                                <button
                                    onClick={() =>
                                        setQuantity(
                                            Math.max(1, quantity - 1)
                                        )
                                    }
                                    disabled={quantity <= 1}
                                >
                                    −
                                </button>

                                <strong>
                                    {quantity}
                                </strong>

                                <button
                                    onClick={() =>
                                        setQuantity(
                                            Math.min(
                                                product.quantity,
                                                quantity + 1
                                            )
                                        )
                                    }
                                    disabled={
                                        quantity >= product.quantity
                                    }
                                >
                                    +
                                </button>

                            </div>

                            <small>
                                Maximum available:{" "}
                                {product.quantity}{" "}
                                {product.unit}
                            </small>

                        </div>

                        {/* TOTAL */}

                        <div className="shop-total">

                            <span>
                                Total
                            </span>

                            <strong>
                                ₹{totalPrice}
                            </strong>

                        </div>

                        {/* ACTION BUTTONS */}

                        <div className="shop-actions">

                            <button
                                className="add-cart-btn"
                                onClick={addToCart}
                            >
                                🛒 Add to Cart
                            </button>

                            <button
                                className="buy-now-btn"
                                onClick={buyNow}
                            >
                                ⚡ Buy Now
                            </button>

                        </div>

                    </div>

                </section>

                {/* HOLDER DETAILS */}

                <section className="shop-holder-section">

                    <div className="shop-section-label">
                        LISTED BY
                    </div>

                    <div className="shop-holder-card">

                        <div className="shop-holder-avatar">
                            👤
                        </div>

                        <div className="shop-holder-info">

                            <h3>
                                Material Holder
                            </h3>

                            <p>
                                Community waste holder
                            </p>

                            <span>
                                📍 {product.address}
                            </span>

                        </div>

                        <div className="shop-holder-contact">

                            <span>
                                CONTACT
                            </span>

                            <strong>
                                {product.contactNumber}
                            </strong>

                        </div>

                    </div>

                </section>

                {/* MATERIAL INFORMATION */}

                <section className="shop-information">

                    <div className="shop-section-label">
                        MATERIAL INFORMATION
                    </div>

                    <h2>
                        About this material
                    </h2>

                    <div className="shop-info-grid">

                        <div>
                            <span>Category</span>
                            <strong>
                                {product.category}
                            </strong>
                        </div>

                        <div>
                            <span>Material</span>
                            <strong>
                                {product.productName}
                            </strong>
                        </div>

                        <div>
                            <span>Quantity</span>
                            <strong>
                                {product.quantity}{" "}
                                {product.unit}
                            </strong>
                        </div>

                        <div>
                            <span>Price</span>
                            <strong>
                                ₹{product.price}
                            </strong>
                        </div>

                        <div>
                            <span>Location</span>
                            <strong>
                                {product.address}
                            </strong>
                        </div>

                    </div>

                </section>

                {/* BACK */}

                <div className="shop-back">

                    <Link to="/explore">
                        ← Continue Shopping
                    </Link>

                    <button
                        onClick={() => navigate("/cart")}
                    >
                        🛒 View Cart
                    </button>

                </div>

            </div>

        </main>
    );
}

export default ProductDetails;