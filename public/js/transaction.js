// $(document).ready(function() {
//     $.get("/api/user_data").then(function(data) {   // GET /api/user_data
//         var emailString = data.email;
//         var emailSplitArry = emailString.split("@");
//         $(".member-name").text(emailSplitArry[0]);
//         $(".member-email").text(data.email);
//         console.log("email string: ", emailString);
//     });
// })
// // more to add at later date



// const newFormHandler = async (event) => {
//     event.preventDefault();
  
    // const name = document.querySelector('#project-name').value.trim();
    // const needed_funding = document.querySelector('#project-funding').value.trim();
    // const description = document.querySelector('#project-desc').value.trim();
  
//     if (name && needed_funding && description) {
//       const response = await fetch(`/api/projects`, {
//         method: 'POST',
//         body: JSON.stringify({ name, needed_funding, description }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to create project');
//       }
//     }
//   };
  
//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };
  
  document
    .querySelector('.new-budget-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);
  