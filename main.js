let divele = document.createElement('div');
document.body.appendChild(divele);

let divchild1 = document.createElement('div');
document.body.appendChild(divchild1);

let headele = document.createElement('h4');
headele.innerText = "ABOUT";
divchild1.appendChild(headele);

let headelem = document.createElement('h1');
headelem.innerText = "Learn More About Us";
divchild1.appendChild(headelem);

let para = document.createElement('p');
para.innerText = "Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.";
divchild1.appendChild(para);

let divchild2 = document.createElement('div');
document.body.appendChild(divchild2);

let para1 = document.createElement('p');
para1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
divchild2.appendChild(para1);

let list = document.createElement("ol")
divchild2.appendChild(list)

let para2 = document.createElement('li');
para2.innerText = "Ullamco laboris nisi ut aliquip ex ea commodo consequat";
divchild2.appendChild(para2);

let para3 = document.createElement('li');
para3.innerText = "Duis aute irure dolor in reprehenderit in voluptate velit";
divchild2.appendChild(para3);

let para4 = document.createElement('li');
para4.innerText = "Ullamco laboris nisi ut aliquip ex ea commodo consequat";
divchild2.appendChild(para4);

let divchild3 = document.createElement('div');
document.body.appendChild(divchild3);

let para5 = document.createElement('p');
para5.innerText = "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
divchild3.appendChild(para5);

let button = document.createElement('button');
button.innerText = "Learn More";
divchild3.appendChild(button);

