import React, { useState, useRef, useEffect } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import Picker from "emoji-picker-react";

export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef(null);
  const emojiButtonRef = useRef(null);

  // Toggle emoji picker visibility
  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  // Handle emoji selection
  const handleEmojiClick = (event, emojiObject) => {
    let message = msg;
    message += emojiObject.emoji;
    setMsg(message);
  };

  // Send message
  const sendChat = (event) => {
    event.preventDefault();
    if (msg.trim().length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  // Close emoji picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target) &&
        emojiButtonRef.current &&
        !emojiButtonRef.current.contains(event.target)
      ) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Inline styles
  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "7% 93%",
      backgroundColor: "#FFF5E1",
      padding: "0.5rem 2rem",
      fontFamily: "'Inter', 'Poppins', sans-serif",
      alignItems: "center",
      position: "relative",
    },
    buttonContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      color: "#FF6B35",
    },
    emojiButton: {
      fontSize: "1.5rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    emojiButtonHover: {
      color: "#FF8B4D",
      transform: "scale(1.1)",
    },
    inputContainer: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      backgroundColor: "#FFFFFF",
      border: "1px solid #FF6B35",
      borderRadius: "2rem",
      padding: "0.5rem 1rem",
    },
    input: {
      width: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      fontSize: "1rem",
      color: "#333",
    },
    placeholder: {
      color: "#AAA",
    },
    button: {
      backgroundColor: "#FF6B35",
      border: "none",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0.5rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#FF8B4D",
    },
    buttonDisabled: {
      backgroundColor: "#CCC",
      cursor: "not-allowed",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        <div ref={emojiButtonRef}>
          <BsEmojiSmileFill
            style={styles.emojiButton}
            onClick={handleEmojiPickerhideShow}
          />
          {showEmojiPicker && (
            <div
              ref={emojiPickerRef}
              style={{
                position: "absolute",
                top: "-400px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: "10",
              }}
            >
              <Picker onEmojiClick={handleEmojiClick} height={350} width={300} />
            </div>
          )}
        </div>
      </div>
      <form style={styles.inputContainer} onSubmit={sendChat}>
        <input
          type="text"
          placeholder="Type your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
          maxLength={500}
          style={styles.input}
        />
        <button
          type="submit"
          disabled={msg.trim().length === 0}
          style={{
            ...styles.button,
            ...(msg.trim().length === 0 ? styles.buttonDisabled : {}),
          }}
        >
          <IoMdSend />
        </button>
      </form>
    </div>
  );
}
