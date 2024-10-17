import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import RepoItem from "./components/RepoItem";

interface Repo {
  id: number;
  full_name: string;
  description: string;
  owner: {
    avatar_url: string;
  };
  stargazers_count: number;
  forks_count: number;
  language: string;
  visible: boolean;
}

const App: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios
      .get(
        `https://api.github.com/search/repositories?sort=stars&q=javascript&per_page=10&page=${page}`,
        {
          headers: { "User-Agent": "react-app" },
        }
      )

      .then((response) => {
        const updatedRepos = response.data.items.map((repo: any) => ({
          ...repo,
          visible: false,
        }));

        setRepos(updatedRepos);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching data.");
        setLoading(false);
      });
  }, [page]);

  const toggleVisibility = (id: number) => {
    setRepos((prevRepos) =>
      prevRepos.map((repo) => {
        return repo.id === id ? { ...repo, visible: !repo.visible } : repo;
      })
    );
  };

  const handlePageChange = (direction: string) => {
    setPage((prevPage) => (direction === "next" ? prevPage + 1 : prevPage - 1));
  };

  return (
    <div className="App" data-testid="app">
      <h1 className="app-title" data-testid="title">
        Welcome to My GitHub Repo Listing!
      </h1>
      <div className="app-subtitle" data-testid="app-subtitle">
        ✨ A Collection of GitHub Repos ✨
      </div>

      {/* pagination */}
      <div className="pagination">
        <button onClick={() => handlePageChange("prev")} disabled={page === 1}>
          {"<"}
        </button>
        <button onClick={() => handlePageChange("next")}>{">"}</button>
      </div>

      {loading && <p className="loading">Loading...</p>}

      {error && <p className="error">{error}</p>}

      {/* Render each repository in the list */}
      <div className="repo-list">
        {repos.map((repo) => (
          <RepoItem
            id={repo.id}
            fullName={repo.full_name}
            description={repo.description}
            avatarUrl={repo.owner.avatar_url}
            visibilityFlag={repo.visible}
            toggleFlag={toggleVisibility}
            stars={repo.stargazers_count}
            forks={repo.forks_count}
            language={repo.language}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
