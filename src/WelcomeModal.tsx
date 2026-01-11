import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomeModal.css';

interface WelcomeModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const WelcomeModal = ({ isVisible, onClose }: WelcomeModalProps) => {
  const navigate = useNavigate();

  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="welcome-modal">
        <div className="modal-header">
          Welcome to My Desktop
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="modal-content">
          <h2>Desktop Theme Website</h2>
          <p>This is an interactive desktop style website.</p>
          <p>Click on "view plain website" to see the boring one.</p>
          <div className="modal-actions">
            <button 
              className="continue-btn"
              onClick={onClose}
            >
              Continue to Desktop
            </button>
            <button 
              className="plain-btn"
              onClick={() => navigate('/plain')}
            >
              View Plain Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;