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
fetch('https://api-to-call.com/endpoint')
.then(response => {
  if(response.ok){
    return response.json();
  }
  throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message);
  })
.then(jsonResponse => {
  return jsonResponse;
});

  //Fetch POST
fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: '200'})
})
.then(response => {
  if(response.ok){
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => {console.log(networkError.message)})
.then(jsonResponse => {
  return jsonResponse;
});

//async await GET
const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint');
    if(response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch(error) {
    console.log(error);
  }
}

//async await POST
const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint', {
      method: 'POST',
      body: JSON.stringify({id: 200})
    });
    if(response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch(error) {
    console.log(error);
  }
};