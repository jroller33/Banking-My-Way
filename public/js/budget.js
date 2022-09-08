const newFormHandler = async (event) => {
    event.preventDefault();
  
    const category = document.querySelector('#budget-category').value.trim();
    const description = document.querySelector('#budget-description').value.trim();
    const amount = document.querySelector('#budget-amount').value.trim();
  
    if (category && description && amount) {
      const response = await fetch(`/api/budget`, {
        method: 'POST',
        body: JSON.stringify({ category, description, amount }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/budget');
      } else {
        alert('Failed to create budget');
      }
    }
  };
  
document
    .querySelector('.new-budget-form')
    .addEventListener('submit', newFormHandler);

//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/budget/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/budget');
//       } else {
//         alert('Failed to delete budget');
//       }
//     }
//   };

  
//   document
//     .querySelector('.budget-list')
//     .addEventListener('click', delButtonHandler);
  