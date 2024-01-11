let resume = new XMLHttpRequest();
console.log(resume);
resume.open("GET","https://registry.jsonresume.org/thomasdavis.json");
resume.send();
resume.onload = function (){
    const dada = JSON.parse(resume.response);
    console.log(resume.response);
    console.log(dada);
};