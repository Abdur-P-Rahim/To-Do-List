let count = 0;

document.getElementById('add-btn').addEventListener('click', function (){
     const inputValue = document.getElementById('input-value').value;
     count ++;
     if(inputValue == ''){
          alert('please enter the value');
     }
     else{
          const mainContainer = document.getElementById('content-container');
          const tableContainer = document.createElement('tr');
          tableContainer.innerHTML = ` <th>${count}</th>
                                       <td>${inputValue}</td>
                                       <td>
                                       <button class = 'btn btn-danger '>Delete</button>
                                       <button class = 'btn btn-success'>Done</button>
                                       </td>`;
          mainContainer.appendChild(tableContainer); 
          document.getElementById('input-value').value = '';                            
     }
});