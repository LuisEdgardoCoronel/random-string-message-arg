const messages = [
    "Muchachooosss, ahora nos volvimos a ilusionar!!",
    "Messi es lo mas grande de la historia del futbol!",
    "Primero ARGENTINA, segundo francia",
    "Aguante la SCALONETA!!!!",
    "Dibu, Molina, Cuti, Ota, Tagliafico, De Paul, Enzo, Alexis, MESSI, Julian, Fideo 🏆",
    "Y dale alegria alegria a mi corazon....",
    "La SCALONETA es campeon mundial! y a todos les duele jajaj",
    "Aguante el Inter de Miami loco, Aguante MESSI!!!",
    "Todos somos MONTIEL....!",
    "Que miras bobo? anda pa alla!"
  ];
  
  const argentinaCommits = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    argentinaCommits
  };