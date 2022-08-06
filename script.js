/* paste the JavaScript code from the 'Generated Code' section of the CYF Blocks editor here */
var links, name2, item;


links = ['https://www.facebook.com/codeyourfuture.io', 'https://twitter.com/codeyourfuture?lang=en', 'https://www.instagram.com/codeyourfuture_/?hl=en'];
name2 = ['facebook', 'twitter', 'instagram'];


document.getElementById('button-cyf').addEventListener('click', (event) => {
  let element_list_cyf = document.getElementById('list-cyf');
  name2.forEach((item) => {
    let new_li = document.createElement('li');
    let new_a = document.createElement('a');
    new_a.setAttribute("href", links.shift());
    new_a.innerText = item;

    new_li.appendChild(new_a);

    element_list_cyf.appendChild(new_li);
  });

});
