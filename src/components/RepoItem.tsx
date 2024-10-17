import React from "react";
import "./RepoItem.css";

interface RepoItemProps {
  id: number;
  fullName: string;
  description: string;
  avatarUrl: string;
  visibilityFlag: boolean;
  toggleFlag: (id: number) => void;
  stars: number;
  forks: number;
  language: string;
}
const RepoItem: React.FC<RepoItemProps> = ({
  id,
  fullName,
  description,
  avatarUrl,
  visibilityFlag,
  toggleFlag,
  stars,
  forks,
  language,
}) => {
  return (
    <div className="repo-card" key={id}>
      <img src={avatarUrl} alt={fullName} className="avatar" />
      <div className="repo-info">
        <button className="toggle-visibility" onClick={() => toggleFlag(id)}>
          {visibilityFlag ? "−" : "+"}
        </button>
        <h2>{fullName}</h2>

        {visibilityFlag && (
          <div className="repository-details">
            <p>{description || "No description available"}</p>
            <p>⭐ Stars: {stars}</p>
            <p>🍴 Forks: {forks}</p>
            <p>
              🖥️ Language:
              {language ? language : "Not specified"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RepoItem;
