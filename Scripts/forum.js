import { userdata } from "modernizr";

//$(".comment-delete").click(function () {
//    $.ajax({
//        url: '@Url.Action("Delete", "Forum")',
//        data: $(this).val(),
//        type: "POST",
//        success: function () {
//            $('.comment comment - new flex items - start justify - start').addClass('.recent-comments') ;
//        },
//        error: function () {
//            $(".recent-comments").html("ERROR");
//        }
//    });

function Delete(obj) {
    var ele = $(obj);
    var Id = $(this).val();
    var url = '@Url.Action("Delete", "Forum")';
    $.ajax({
        url: url,
        type: "POST",

        success: function () {

            ele.closest('current-comment').remove();
        },

        error: function () {
            alert("Fails");
        }

    });

//const submit = document.querySelector('.comment-submit');
//const commentList = document.querySelector('.comments');
//const commentInput = document.querySelector('.comment-input');

//const clear = document.querySelector('.clear-comments');

//function template(data) {
//  commentList.insertAdjacentHTML("beforeend", `
//  <div class="comment flex items-start justify-start">
//      <img class="comment-avatar" src="${data.avatar}" />
//      <div class="flex-1">
//        <h3 class="comment-author">${data.author}</h3>
//        <p class="comment-body">${data.comment}</p>
//      </div>
//    </div>
//  </div>`);
//}

//function appendComment(event) {

//  const data = {
//    avatar: "https://secure.gravatar.com/avatar/d1f5ca0d7e625f334c5186e112b77ebd",
//    comment: commentInput.value,
//    author: "Guest"
//  };

//  event.preventDefault();
//  // If the value is nothing just return
//  if (commentInput.value.length < 1) return;

//  // Insert new template into DOM
//  template(data);

//  // Reset textrea value
//  commentInput.value = "";

//  // Save the list to localStorage
//  localStorage.setItem('commentListing', commentList.innerHTML);
//}

//function clearComments(event) {
//  localStorage.clear();
//  location.reload();

//}

//submit.addEventListener('click', appendComment, false)
//clear.addEventListener('click', clearComments, false)

//// Check for saved wishlist items
//const saved = localStorage.getItem('commentListing');

//// If there are any saved items, update our list
//if (saved) {
//  commentList.innerHTML = saved;
//}