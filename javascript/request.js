//AJAX Request basic GET
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
  }
};

xhr.open('GET', url);
xhr.send();

//AJAX Request basic POST
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
  }
};
xhr.open('POST', url);
xhr.send(data);


//Fetch GET
fetch('https://api-to-call.com/endpoint').then(response => {
  if(response.ok){
    return response.json();
  }
  throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message);
  }).then(jsonResponse => {
    return jsonResponse;
  });