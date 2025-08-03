import React, { useEffect } from "react";
import { Box, styled, Tooltip } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const FloatingWhatsAppContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: "20px",
  right: "20px",
  zIndex: 1000,
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const WhatsAppButton = styled(Box)(({ theme }) => ({
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  background: "#25D366", // WhatsApp green color
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 12px rgba(37, 211, 102, 0.4)",
  animation: "pulse 2s infinite",
  "&:hover": {
    boxShadow: "0 6px 20px rgba(37, 211, 102, 0.6)",
  },
  "& svg": {
    color: "white",
    fontSize: "28px",
  },
}));

const FloatingWhatsApp = ({
  phoneNumber = "+919876543210",
  message = "Hello! I'm interested in your services.",
}) => {
  useEffect(() => {
    // Add CSS animation for pulse effect
    const style = document.createElement("style");
    style.textContent = `
      @keyframes pulse {
        0% {
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
        }
        50% {
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.6);
        }
        100% {
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
        }
      }
    `;

    if (!document.head.querySelector("style[data-whatsapp-pulse]")) {
      style.setAttribute("data-whatsapp-pulse", "true");
      document.head.appendChild(style);
    }

    return () => {
      const existingStyle = document.head.querySelector(
        "style[data-whatsapp-pulse]"
      );
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  const handleWhatsAppClick = () => {
    // Format phone number (remove any non-digit characters except +)
    const formattedPhone = phoneNumber.replace(/[^\d+]/g, "");

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <FloatingWhatsAppContainer>
      <Tooltip title="Chat with us on WhatsApp" placement="left">
        <WhatsAppButton onClick={handleWhatsAppClick}>
          <WhatsAppIcon />
        </WhatsAppButton>
      </Tooltip>
    </FloatingWhatsAppContainer>
  );
};

export default FloatingWhatsApp;
