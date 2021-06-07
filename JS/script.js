$(document).ready(function() {
  let tags = ['h1', 'p', 'img'];
  tags.forEach(tag => {
    $(tag).click(function() {
      if (tag === 'h1') {
        alert('any message')
      } else if (tag === 'p') {
        alert('second message')
      } else if (tag === 'img') {
        alert('third message')
      }
    })
  //   if (tag === 'h1') {
  //   alert("Any messege")
  // }
  //   else if (tag === 'p') {
  //   alert("Second new messege")
  //   }
  //   else if (tag === 'img') {
  //     alert("Third messege")
  //   }
  });


  // $("h1").click(function() {
  //   alert("This is a heading.");
  // });
  
  // $("p").click(function() {
  //   alert("This is a paragraph.");
  // });
  
  // $("img").click(function() {
  //   alert("This is an image.");
  // });
});




