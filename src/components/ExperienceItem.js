import React, { useState } from "react";
import PropTypes from "prop-types"; // ES6
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";

export const ExperienceItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="experience-item-container" onClick={openModal}>
        <div className="experience-item-heading">
          <h1>{item.title}</h1>
          <h4>{item.sub_title}</h4>
        </div>
        <div className="experience-item-body">
          <img src={item.images[0]} />
        </div>
        <div className="experience-item-footer">
          {item.start_date && item.end_date ? (
            <p>
              {}
              {item.start_date} - {item.end_date}
            </p>
          ) : (
            <div className="experience-item-footer-links">
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                  className="experience-item-github"
                  title="GitHub"
                >
                  
                </a>
              )}
              {item.site && (
                <a
                  href={item.site}
                  target="_blank"
                  rel="noreferrer"
                  className="experience-item-site"
                  title="live site"
                >
                  
                </a>
              )}
            </div>
          )}
        </div>
      </div>
      <Dialog open={open} onClose={closeModal}>
        <div className="experience-item-modal-heading">
          <div className="experience-item-modal-heading-titles">
            <h1>{item.title}</h1>
            <h4>{item.sub_title}</h4>
          </div>
          <DialogActions>
            <button
              className="experience-item-modal-close-btn"
              onClick={closeModal}
            >
              
            </button>
          </DialogActions>
        </div>
        <div className="experience-item-modal-body">
          <img src={item.images[0]} />
          <ul>
            {item.descriptions.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
        </div>
        <div className="experience-item-modal-footer">
          <div className="experience-item-modal-footer-links">
            {item.start_date && item.end_date ? (
              <p>
                {}
                {item.start_date} - {item.end_date}
              </p>
            ) : (
              <>
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="experience-item-github"
                    title="GitHub"
                  >
                    
                  </a>
                )}
                {item.site && (
                  <a
                    href={item.site}
                    target="_blank"
                    rel="noreferrer"
                    className="experience-item-site"
                    title="live site"
                  >
                    
                  </a>
                )}
              </>
            )}
          </div>
          <ul className="experience-item-modal-footer-tags">
            {item.tags.map((tag, index) => (
              <li className="experience-item-modal-footer-tag" key={index}>
                #{tag}
              </li>
            ))}
          </ul>
        </div>
      </Dialog>
    </>
  );
};

ExperienceItem.propTypes = {
  item: PropTypes.object,
};
