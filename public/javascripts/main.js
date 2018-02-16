(() => {
  let getButtons = document.querySelectorAll('.getButton');
      deleteButton = document.querySelectorAll('.deleteButton');
  function fetchData(){
    let url= "/api" + this.id;

    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);//spits back what button you clicked
    })
    .catch(function(error){
      console.log(error);
    });
  }


  function deleteRecord(){
    let url= "/api" + this.id;

    fetch(url, { method : 'delete'})
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);//spits back what button you clicked
    })
    .catch(function(error){
      console.log(error);
    });
  }
  getButtons.forEach(button => button.addEventListener('click', fetchData));
  deleteButton.addEventListener('click', deleteRecord);
})();
