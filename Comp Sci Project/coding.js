function showImage(imageId) {
    const image = document.getElementById(imageId);
    if (image) {
        image.style.display = "block";
        const letter = imageId.slice(-1);
        for(const space of blankSpaces) {
            if(space.src.endsWith("blankspace.png")) {
                space.src=letter + ".jpg"
                break;
            }
        }
    }
}

const words = ["lamborghini", "nefarious", "epsilon", "damposaurus", "leverington", "California", "Bobert", "Mucic", "Gregory"];
const wordSelector = Math.floor(Math.random() * words.length);
const word = words[wordSelector];
const wordContainer = document.getElementById('word-container');
const blankSpaceImages = wordContainer.querySelectorAll('img');

for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    blankSpaceImages[i].src = "space"+(i+1)+".png";
}




