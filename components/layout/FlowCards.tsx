// components/ui/FlowCards.tsx
"use client";

type Step = { id: string; title?: string; content?: string };

export default function FlowCards({
  steps = [
    { id: "1", title: "Brief" },
    { id: "2", title: "Design" },
    { id: "3", title: "Développement" },
    { id: "4", title: "Mise en ligne" },
  ],
}: {
  steps?: Step[];
}) {
  // positions verticales en %, à ajuster au besoin
  const y = [6, 30, 60, 90];
  const pad = 16; // px de décalage des connecteurs depuis le bord des cards

  return (
    <div className="relative w-full max-w-md mx-auto py-16">
      {/* Connecteurs (pointillés, en L) */}
      {/* s1 -> s2 */}
      <LConnector
        from={{ side: "left", x: "82%", y: `${y[0]}%`, offset: pad }}
        to={{ side: "right", x: "18%", y: `${y[1]}%`, offset: pad }}
      />
      {/* s2 -> s3 */}
      <LConnector
        from={{ side: "right", x: "18%", y: `${y[1]}%`, offset: pad }}
        to={{ side: "left", x: "82%", y: `${y[2]}%`, offset: pad }}
      />
      {/* s3 -> s4 */}
      <LConnector
        from={{ side: "left", x: "82%", y: `${y[2]}%`, offset: pad }}
        to={{ side: "right", x: "18%", y: `${y[3]}%`, offset: pad }}
      />

      {/* Cards */}
      {steps.map((s, i) => {
        const isRight = i % 2 === 0; // 0,2 à droite ; 1,3 à gauche
        const top = y[i];
        return (
          <div
            key={s.id}
            className={`absolute ${isRight ? "right-0" : "left-0"}`}
            style={{ top: `${top}%`, transform: "translateY(-50%)" }}
          >
            <div className="w-32 h-32 rounded-2xl border-2 border-current bg-white/0 shadow-sm flex items-center justify-center text-xs text-secondary dark:text-quaternary">
              {s.title ?? s.id}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** Petit composant utilitaire pour dessiner un connecteur en “L” (pointillé) entre deux cards */
function LConnector({
  from,
  to,
}: {
  from: { side: "left" | "right"; x: string; y: string; offset: number };
  to: { side: "left" | "right"; x: string; y: string; offset: number };
}) {
  // horizontale : part du bord de la card "from" vers le centre
  const isFromRight = from.side === "right";
  const isToRight = to.side === "right";
  const midX = "50%";

  return (
    <>
      {/* segment vertical depuis la card "from" */}
      <div
        className="absolute border-l-2 border-dashed border-current"
        style={{
          left: from.x,
          top: `calc(${from.y} + ${from.offset}px)`,
          height: `calc(${
            parseFloat(to.y) > parseFloat(from.y)
              ? `${parseFloat(to.y) - parseFloat(from.y)}%`
              : "0%"
          } - ${from.offset + to.offset}px)`,
        }}
      />
      {/* petit coude horizontal depuis 'from' */}
      <div
        className="absolute border-t-2 border-dashed border-current"
        style={{
          left: isFromRight ? `calc(${from.x} - ${from.offset}px)` : from.x,
          top: from.y,
          width: isFromRight ? `${from.offset}px` : `${from.offset}px`,
        }}
      />
      {/* coude vers le milieu */}
      <div
        className="absolute border-t-2 border-dashed border-current"
        style={{
          left: isFromRight ? midX : `calc(${midX} - 20px)`,
          top: to.y,
          width: isToRight ? "20px" : "20px",
        }}
      />
      {/* petit coude vers la card "to" */}
      <div
        className="absolute border-t-2 border-dashed border-current"
        style={{
          left: isToRight ? `calc(${to.x} - ${to.offset}px)` : to.x,
          top: to.y,
          width: `${to.offset}px`,
        }}
      />
    </>
  );
}
