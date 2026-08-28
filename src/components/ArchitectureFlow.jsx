import { useEffect, useState } from "react";
import { ArrowDown, CheckCircle2 } from "lucide-react";

function ArchitectureFlow({ stages = [] }) {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    if (!stages.length) return;

    const timer = setInterval(() => {
      setActiveStage((current) => (current + 1) % stages.length);
    }, 1800);

    return () => clearInterval(timer);
  }, [stages.length]);

  return (
    <div className="architecture-flow">

      <div className="flow-intro">
        <div>
          <p className="section-label">ARCHITECTURE / LIVE FLOW</p>

          <h3>
            Follow the system
            <br />
            <span>stage by stage.</span>
          </h3>
        </div>

        <div className="flow-status">
          <span className="flow-status-dot" />
          SYSTEM FLOW ACTIVE
        </div>
      </div>

      <div className="architecture-track">

        {stages.map((stage, index) => {
          const isActive = index === activeStage;
          const isComplete = index < activeStage;

          return (
            <div className="architecture-stage-wrapper" key={stage.title}>

              <div
                className={`architecture-stage ${
                  isActive ? "active" : ""
                } ${isComplete ? "complete" : ""}`}
              >

                <div className="architecture-stage-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="architecture-stage-icon">
                  {stage.icon}
                </div>

                <div className="architecture-stage-content">
                  <span>{stage.category}</span>

                  <h4>{stage.title}</h4>

                  <p>{stage.description}</p>

                  {stage.technologies && (
                    <div className="architecture-tech">
                      {stage.technologies.map((technology) => (
                        <small key={technology}>
                          {technology}
                        </small>
                      ))}
                    </div>
                  )}
                </div>

                {isComplete && (
                  <CheckCircle2
                    className="architecture-complete"
                    size={18}
                  />
                )}

              </div>

              {index < stages.length - 1 && (
                <div
                  className={`architecture-connector ${
                    index < activeStage ? "filled" : ""
                  }`}
                >
                  <ArrowDown size={18} />
                </div>
              )}

            </div>
          );
        })}

      </div>
    </div>
  );
}

export default ArchitectureFlow;
