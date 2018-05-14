class Post (){
  constructor() {}


  savePost(){
      var postId = chance.guid();
      // var postDesc = document.getElementById('issueDescInput').value;
      // var issueSeverity = document.getElementById('issueSeverityInput').value;
      // var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
      // var issueStatus = 'Open';
      var post = {
        id: postId,
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
        posts.push(posts);
        localStorage.setItem('posts', JSON.stringify(posts));
      }

      document.getElementById('postsInputForm').reset();

      fetchPosts();

      e.preventDefault();

  }

  publishPost(){}

  fetchPosts(){
    var posts = JSON.parse(localStorage.getItem('posts'));
    var postsList = document.getElementById('postsList');

    for (var i = 0; i < posts.length; i++) {
      var id = posts[i].id;
      // var desc = posts[i].description;
      // var severity = posts[i].severity;
      // var assignedTo = posts[i].assignedTo;
      // var status = posts[i].status;
  }

  deletePost(){

    var issues = JSON.parse(localStorage.getItem('issues'));

    for(var i = 0; i < issues.length; i++) {
      if (issues[i].id == id) {
        issues.splice(i, 1);
      }
    }

  localStorage.setItem('issues', JSON.stringify(issues));

  fetchPosts();
  }



}
