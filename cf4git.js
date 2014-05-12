$(function() {

    $.fn.cf4git = function(owner, project) {
        var cf4git = this;

        cf4git.owner = owner;
        cf4git.project = project;

        cf4git.getIssues = function() {
            $.ajax({
                url: "https://api.github.com/repos/" + cf4git.owner + "/" + cf4git.project + "/issues",
                success: function(issues) {
                    cf4git.css("color", "green");
                },
                error: function(error) {
                    alert('e');
                }
            });
        };
        
        cf4git.getReadMe = function() {
            // Create Base64 Object
            $.ajax({
                url: "https://api.github.com/repos/" + cf4git.owner + "/" + cf4git.project + "/contents/README.md",
                success: function(readMe) {
                    cf4git.html(""+readMe);
                },
                headers: {
                          Accept : "application/vnd.github.v3.raw",
                                      },
                // accepts: { 'application/vnd.github.v3.raw' },
                //  beforeSend: function(xhr){
                //   xhr.overrideMimeType( "application/vnd.github.v3.raw" );
              // },
                error: function(error) {
                  console.log(error);
                }
            });
        };
        
        cf4git.getReadMe();

        return this;
    };

});
