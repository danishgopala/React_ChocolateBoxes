import { useState } from "react";
import "./App.css";
const ChocCard = ({ choc }) => {
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }
    return (
        <div className="choc-card">
            <img
                src={choc.image}
                alt = "Chocolate"
                style={{
                    padding: "10px 20px",
                    textAllign: "center",
                    color: "black",
                    background: "beige",
                    width: "50px"
                }}
            />
            <h3>{choc.name}</h3>
            <p>{choc.description}</p>
            <p>{choc.ingredients}</p>
            <button onClick={handleOpenModal}>Show Carlorie Info</button>

            {showModal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h4>Carlorie Information</h4>
                        <p>{choc.calories}cals</p>
                        <button onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChocCard;