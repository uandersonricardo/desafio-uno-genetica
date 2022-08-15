import { useState } from "react";

const questions = [{
    question: "A constituição cromossômica de um indivíduo é chamada de:",
    options: ["a) Genoma", "b) Cariótipo", "c) Genética"],
    correct: 1
  },
  {
    question: "Considera-se que a genética tenha iniciado seu desenvolvimento após experimentos aplicados por um monge chamado:",
    options: ["a) Darwin", "b) Morgan", "c) Mendel"],
    correct: 2
  },
  {
    question: "O alelo que manifesta o seu fenótipo tanto nos indivíduos homozigóticos como heterozigóticos é denominado:",
    options: ["a) Dominante", "b) Recessivo", "c) Letal"],
    correct: 0
  },
  {
    question: "Quem foi Aristóteles?",
    options: ["a) Filósofo", "b) Matemático", "c) Cientista"],
    correct: 0
  },
  {
    question: "Quem foi o primeiro a descrever a evolução do ser humano?",
    options: ["a) Newton", "b) Darwin", "c) Mendel"],
    correct: 1
  },
  {
    question: "Gregor Mendel ficou conhecido por ser o:",
    options: ["a) Pai da física", "b) Pai da eletricidade", "c) Pai da genética"],
    correct: 2
  },
  {
    question: "James Watson foi um biólogo:",
    options: ["a) Científico", "b) Molecular", "c) Marinho"],
    correct: 1
  },
  {
    question: "Qual foi a principal descoberta de Johann Miescher?",
    options: ["a) Ácido desoxirribonucleico", "b) Ácido sulfúrico", "c) Estrutura em dupla hélice do DNA"],
    correct: 0
  },
  {
    question: "Walther Flemming foi fundador da:",
    options: ["a) Mecklenburg", "b) Citogenética", "c) Homólogos"],
    correct: 1
  },
];

function App() {
  const [started, setStarted] = useState(false);
  const [draw, setDraw] = useState(false);
  const [question, setQuestion] = useState(questions[Math.floor(Math.random() * questions.length)]);

  const start = () => {
    setDraw(false);
    setStarted(true);

    setTimeout(() => {
      setStarted(false);

      while (true) {
        const newQuestion = questions[Math.floor(Math.random() * questions.length)];

        if (question.question !== newQuestion.question) {
          setQuestion(newQuestion);
          break;
        }
      }
    }, 3000);
  };

  const onClick = () => {
    if (!started) {
      setDraw(draw => !draw);
    }
  };

  return (
    <div className={`w-screen h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500`}>
      <div className="container mx-auto h-full px-4 relative flex flex-col items-center justify-end">
        {!started && (
          <button className="flex flex-col items-center justify-end bg-white/30 rounded-full mb-6 text-center w-auto py-4 px-6 text-white uppercase font-bold antialiased text-md transition hover:bg-white hover:text-pink-500" onClick={start}>
              Começar o desafio!
          </button>
        )}
        <div className="absolute w-[40vh] h-[60vh] max-w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex px-4" style={{ perspective: "1000px", animation: started ? "move 0.75s ease-in-out infinite" : "" }}>
          <div className="flex p-3 shadow-lg rounded-2xl w-full h-full overflow-hidden bg-white relative transition duration-500" style={{ transformStyle: "preserve-3d", transform: draw ? "rotateY(180deg)" : "" }} onClick={onClick}>
            <div className="flex rounded-lg flex-1 absolute top-3 left-3 right-3 bottom-3 items-center justify-center text-white font-bold text-7xl overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 transition duration-500" style={{ transform: draw ? "rotateY(180deg)" : "", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
              <span className="animate-pulse">?</span>
            </div>
            <div className="flex rounded-2xl p-4 flex-1 absolute top-0 left-0 right-0 bottom-0 items-center justify-center text-black font-bold text-lg overflow-hidden bg-white transition duration-500" style={{ transform: !draw ? "rotateY(180deg)" : "", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
              <div className="flex flex-col p-2" style={{ transform: "rotateY(180deg)" }}>
                <span className="text-xl mb-4">{question.question}</span>
                {question.options.map((option, index) => (
                  <div className="text-pink-500 text-xl" style={{ color: question.correct !== index ? "black" : undefined }} key={index}>{option}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
