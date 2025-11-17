import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ApiPage() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    const timeoutMs = 10000;

    async function fetchFromProxy() {
      try {
        const proxyUrl = 'http://localhost:3001/api/freetogame/games';
        const timeout = setTimeout(() => controller.abort(), timeoutMs);
        const res = await fetch(proxyUrl, { signal: controller.signal });
        clearTimeout(timeout);

        if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
        const json = await res.json();
        setGames(json);
        setError(null);
      } catch (err) {
        console.error('Fetch proxy failed:', err);
        setError('No se pudo obtener los juegos desde el proxy. ¿Está corriendo server/index.js?');
      } finally {
        setLoading(false);
      }
    }

    fetchFromProxy();
    return () => controller.abort();
  }, []);

  if (loading) return <div className="api-loading">Cargando juegos...</div>;
  if (error) return <div className="api-error">Error: {error}</div>;

  return (
    <div className="api-container">
      <div className="api-header">
        <button
          onClick={() => navigate('/')}
          className="back-button"
        >
          Volver
        </button>
        <h2 className="api-title">Mis juegos favoritos (FreeToGame)</h2>
      </div>

      <div className="games-grid">
        {games.slice(0, 24).map(game => (
          <div key={game.id} className="game-card">
            <img src={game.thumbnail} alt={game.title} className="game-thumb" />
            <div className="game-content">
              <h4 className="game-title">{game.title}</h4>
              <p className="game-desc">{game.short_description}</p>
              <p className="game-meta">{game.genre} • {game.platform}</p>
              <a href={game.game_url} target="_blank" rel="noopener noreferrer" className="game-link">Ver en FreeToGame</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}