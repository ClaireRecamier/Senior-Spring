// class Post (){
//   constructor() {}
// }


document.getElementById('postInputForm').addEventListener('publish', savePost);

  function savePost(e){
      var postId = chance.guid(); //generate spost id from chance library
      var postBody = document.getElementById('postBodyInput').value;
      var postTitle = document.getElementById('postTitleInput').value;
      // var postDesc = document.getElementById('issueDescInput').value;
      // var issueSeverity = document.getElementById('issueSeverityInput').value;
      // var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
      // var issueStatus = 'Open';
      var post = {
        id: postId,
        body: postBody,
        title: postTitle
        // description: postDesc,
        // severity: postSeverity,
        // assignedTo: postAssignedTo,
        // status: postStatus
      }

      if (localStorage.getItem('posts') === null) {
        var posts = [];
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));
      } else {
        var posts = JSON.parse(localStorage.getItem('posts'));
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));
      }

      document.getElementById('postInputForm').reset();

      fetchPosts();

      e.preventDefault();

  }

  // function publishPost(){}

  function fetchPosts(){
    var posts = JSON.parse(localStorage.getItem('posts'));
    var postsListe = document.getElementById('postsList');

      issuesList.innerHTML = '';

    for (var i = 0; i < posts.length; i++) {
      var id = posts[i].id;
      var body = posts[i].body;
      var title = posts[i].title;
      // var desc = posts[i].description;
      // var severity = posts[i].severity;
      // var assignedTo = posts[i].assignedTo;
      // var status = posts[i].status;
  }

  issuesList.innerHTML +=   '<div class="well">'+
                              '<h6>Post ID: ' + id + '</h6>'+
                              //'<p><span class="label label-info">' + status + '</span></p>'+
                              '<p><span class="glyphicon glyphicon-time"></span> ' + title + '</p>'+
                              '<h3>' + body + '</h3>'+

                              //'<p><span class="glyphicon glyphicon-time"></span> ' + severity + '</p>'+
                              //'<p><span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>'+
                              //'<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a> '+
                              '<a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn-danger">Delete</a>'+
                              '</div>';
}

  function deletePost(id){
    var posts = JSON.parse(localStorage.getItem('posts'));

    for(var i = 0; i < posts.length; i++) {
      if (posts[i].id == id) {
        posts.splice(i, 1);
      }
    }

  localStorage.setItem('posts', JSON.stringify(posts));

  fetchPosts();
  }
