
import dotenv from 'dotenv';
import cowsay from 'cowsay';



console.log(cowsay.say({
    text: `Bonjour, je m'appelle ${process.env.NAME} et je viens de ${process.env.CAMPUS}.`;
    e: "oO",
    T: "U "
}));
