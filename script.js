const messages = [
    ['Believe you can and you\'re halfway there', 'Theodore Roosevelt'] ,
    ['he future belongs to those who believe in the beauty of their dreams.', 'Eleanor Roosevelt'] ,
    ['It does not matter how slowly you go as long as you do not stop.', 'Confucius'] 
]; 


const generateButton = document.getElementById('generate');
const quote = document.getElementById('quote');
const author = document.getElementById('author');

generateButton.addEventListener('click' , () => {
    const randomNum = Math.floor(Math.random() * messages.length);

    quote.textContent = messages[randomNum][0];
    author.textContent = messages[randomNum][1];
});


