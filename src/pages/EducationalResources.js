import React, { useState } from "react";
import "../styles/EducationalResources.css"; // ✅ Import Updated CSS

const EducationalResources = () => {
  // Default educational resources
  const [resources, setResources] = useState([
    {
      title: "Investment Basics",
      type: "article",
      link: "https://www.investopedia.com/terms/i/investment.asp",
    },
    {
      title: "How to Save Money Effectively",
      type: "article",
      link: "https://www.nerdwallet.com/article/banking/how-to-save-money",
    },
    {
      title: "Understanding Mutual Funds",
      type: "video",
      link: "https://www.youtube.com/embed/wf91rEGw88Q",
    },
    {
      title: "Budgeting for Beginners",
      type: "article",
      link: "https://www.moneyunder30.com/how-to-make-a-budget",
    },
    {
      title: "The Power of Compound Interest",
      type: "video",
      link: "https://www.youtube.com/embed/wf91rEGw88Q",
    },
  ]);

  // State for modal
  const [showModal, setShowModal] = useState(false);
  const [newResource, setNewResource] = useState({
    title: "",
    type: "article",
    link: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    setNewResource({ ...newResource, [e.target.name]: e.target.value });
  };

  // Add new resource
  const addResource = () => {
    if (newResource.title && newResource.link) {
      setResources([...resources, newResource]); // Update resource list
      setNewResource({ title: "", type: "article", link: "" }); // Reset input
      setShowModal(false); // Close modal
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="educational-resources-container">
      <div className="educational-resources">
        <h2>📚 Financial Educational Resources</h2>
        <p>Learn about savings, investments, and budgeting.</p>

        <button className="add-resource-btn" onClick={() => setShowModal(true)}>
          ➕ Add Resource
        </button>

        <div className="resource-list">
          {resources.map((resource, index) => (
            <div key={index} className="resource-card">
              {resource.type === "article" ? (
                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                  📖 {resource.title}
                </a>
              ) : (
                <iframe src={resource.link} title={resource.title} allowFullScreen></iframe>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal for adding new resource */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add New Resource</h3>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newResource.title}
              onChange={handleInputChange}
            />
            <select name="type" value={newResource.type} onChange={handleInputChange}>
              <option value="article">Article</option>
              <option value="video">Video</option>
            </select>
            <input
              type="text"
              name="link"
              placeholder="Link"
              value={newResource.link}
              onChange={handleInputChange}
            />
            <button className="submit-btn" onClick={addResource}>
              Add
            </button>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationalResources;
