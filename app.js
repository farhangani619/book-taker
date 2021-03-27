const list = document.querySelector('#book-list ul');
const forms =  document.forms;
list.addEventListener('click',function(e){
    if(e.target.className =='delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }

});
 const addForm = document.forms['add-book'];
 addForm.addEventListener('submit' ,function(e){
     e.preventDefault();
     const value = addForm.querySelector('input[type="text"]').value;
     const li = document.createElement('li');
     const bookname = document.createElement('span');
     const deleteBtn=document.createElement('span');

     bookname.textContent=value;
     deleteBtn.textContent='delete';

     bookname.classList.add('name');
     deleteBtn.classList.add('delete');

     li.appendChild(bookname);
     li.appendChild(deleteBtn);
     list.appendChild(li);

 });

 const hideBox = document.querySelector('#hide');
 hideBox.addEventListener('change', function(e){
     if(hideBox.checked){
         list.style.display="none";
     }else{
         list.style.display="initial";
     }

 });

 const searchBar= forms['search-books'].querySelector('input');
 searchBar.addEventListener('keyup',function(e){
     const term = e.target.value.toLowerCase();
     const books = list.getElementsByTagName('li');
     Array.from(books).forEach(function(book){
         const title= book.firstElementChild.textContent;
         if(title.toLowerCase().indexOf(e.target.value) != -1){
             book.style.display='block';
         }else{
             book.style.display='none';
         }
     });
 });