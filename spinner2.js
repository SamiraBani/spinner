
let simbols = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\r-   ", "\r/   ", ];
let counter = 100;

for(let spin of simbols){
   setTimeout(() => {
      process.stdout.write(spin);
    }, counter);
    counter += 200
}
