import { useState } from "react";

function PersonalCards() {


    const [hateLevel, setHateLevel] = useState(100);
    const [loveLevel, setLoveLevel] = useState(100);
  
    const getHateEmoji = () => {
      if (hateLevel < 30) return "😐";
      if (hateLevel < 70) return "😤";
      return "😡";
    };
  
    const getLoveEmoji = () => {
      if (loveLevel < 30) return "🙂";
      if (loveLevel < 70) return "😊";
      return "😍";
    };

    return (
        <div className="container">
        {/* Hate Card */}
        <div className="card hate">
          <h2>I hate Rithik Soun {getHateEmoji()}</h2>
          <p className="subtitle">How much do you hate him?</p>
  
          <div className="progress">
            <div
              className="progress-fill"
              style={{ width: `${hateLevel}%` }}
            ></div>
          </div>
          <span className="level-text">{hateLevel}% Hate</span>
  
          <div className="actions">
            <button onClick={() => setHateLevel(Math.min(hateLevel + 10, 100))}>
              👎 Hate More
            </button>
            <button onClick={() => setHateLevel(Math.max(hateLevel - 10, 0))}>
              👍 Hate Less
            </button>
          </div>
        </div>
  
        {/* Love Card */}
        <div className="card love">
          <h2>I love Divya {getLoveEmoji()}</h2>
          <p className="subtitle">How much do you love her?</p>
  
          <div className="progress">
            <div
              className="progress-fill"
              style={{ width: `${loveLevel}%` }}
            ></div>
          </div>
          <span className="level-text">{loveLevel}% Love</span>
  
          <div className="actions">
            <button onClick={() => setLoveLevel(Math.min(loveLevel + 10, 100))}>
              ❤️ Love More
            </button>
            <button onClick={() => setLoveLevel(Math.max(loveLevel - 10, 0))}>
              💔 Love Less
            </button>
          </div>
        </div>
  
        {/* Reset */}
        <div className="reset-wrapper">
          <button className="reset" onClick={() => {
            setHateLevel(0);
            setLoveLevel(0);
          }}>
            🔄 Reset Feelings
          </button>
        </div>
      </div>
    );
}

export default PersonalCards;
