angular.module('app.controllers', [])


.controller('splashCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {

    //popup alert starts here
    $scope.showAlert = function(status, message) {
        var alertPopup = $ionicPopup.alert({
            title: status,
            template: message,
        });
    };
    //popup alert ends here

})

.controller('registerCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {

    //popup alert starts here
    function showAlert(status, message) {
        $ionicPopup.alert({
            title: status,
            template: message,
        });

    }


    $scope.username = null;
    $scope.email = null;
    $scope.phone_number = null;
    $scope.password = null;
    $scope.confirm_password = null;
    $scope.type = null;

    $scope.submit = function(username, email, phone_number, password, confirm_password) {

        //fields left empty
        //if(!username || !password) {
        //   alert('empty usr or pw');
        //   return;
        // }


        var input = {
            username: username,
            email: email,
            phone_number: phone_number,
            password: password,
            confirm_password: confirm_password,
            type: 'client'
        };



        var url = 'http://fadedbarbershop.co.uk/rest/rest.php/register';

           $http.post(url, input).then(function(response) {
            //success
            var status = response.data.status + '!';
            status = status.trim();
            var message = response.data.message;
            message = message.trim();
            console.log(status);
            if (status.trim() == 'success!') {
                $state.go('login');

            }
            showAlert(status, message);

        }).catch(function(response) {

            showAlert('danger!', 'Some error occured in app. Please try again.');
        });
    }

})


.controller('loginCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http, $window) {

    //popup alert starts here
    function showAlert(status, message) {
        $ionicPopup.alert({
            title: status,
            template: message,
        });

    }


    $scope.username = null;
    $scope.password = null;


    $scope.submit = function( username, password) {

        //fields left empty
        //if(!username || !password) {
        //   alert('empty usr or pw');
        //   return;
        // }


        var input = {
            username: username,
            password: password
        };



        var url = 'http://fadedbarbershop.co.uk/rest/rest.php/login';

        $http.post(url, input).then(function(response) {
            //success
            var status = response.data.status + '!';
            status = status.trim();
            var message = response.data.message;
            message = message.trim();
            console.log(status);
            if (status.trim() == 'success!') {
                $state.go('menu.requests');
            }
            showAlert(status, message);

        }).catch(function(response) {
console.log(response);
            showAlert('danger!', 'Some error occured. Please try again.');
        });
    }


})



.controller('forgotPasswordCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {

    //popup alert starts here
    function showAlert(status, message) {
        $ionicPopup.alert({
            title: status,
            template: message,
        });

    }


    $scope.email = null;

    $scope.submit = function(email) {

        //fields left empty
        //if(!username || !password) {
        //   alert('empty usr or pw');
        //   return;
        // }



        var input = {
            email: email
        };


        var url = 'http://fadedbarbershop.co.uk/rest/rest.php/forgot_password';

        $http.post(url, input).then(function(response) {
            //success
            var status = response.data.status + '!';
            status = status.trim();
            var message = response.data.message;
            message = message.trim();
            console.log(status);
            if (status.trim() == 'success!') {
                $state.go('login');
            }
            showAlert(status, message);

        }).catch(function(response) {
console.log(response);
            showAlert('danger!', 'Some error occured. Please try again.');
        });
    }


})

.controller('notApprovedCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {

    //popup alert starts here
    $scope.showAlert = function(status, message) {
        var alertPopup = $ionicPopup.alert({
            title: status,
            template: message,
        });
    };
    //popup alert ends here

    $scope.logout = function() {
        var input = {

        };

        var url = 'http://fadedbarbershop.co.uk/rest/rest.php/logout';

        $http.post(url, input).then(function(response) {
            //success
            var status = response.data.status + '!';
            status = status.trim();
            var message = response.data.message;
            message = message.trim();
            console.log(status);
            if (status.trim() == 'success!') {
                $state.go('splash');
            }
            showAlert(status, message);

        }).catch(function(response) {
console.log(response);
            showAlert('danger!', 'Some error occured. Please try again.');
        });
    }


})

.controller('menuCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {

    //popup alert starts here
    $scope.showAlert = function(status, message) {
        var alertPopup = $ionicPopup.alert({
            title: status,
            template: message,
        });
    };
    //popup alert ends here

    $scope.logout = function() {
        var input = {

        };

        var url = 'http://fadedbarbershop.co.uk/rest/rest.php/logout';

        $http.post(url, input).then(function(response) {
            //success
            var status = response.data.status + '!';
            status = status.trim();
            var message = response.data.message;
            message = message.trim();
            console.log(status);
            if (status.trim() == 'success!') {
                $state.go('splash');
            }
            showAlert(status, message);

        }).catch(function(response) {
console.log(response);
            showAlert('danger!', 'Some error occured. Please try again.');
        });
    }


})


.controller('accountSettingsCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {


    //popup alert starts here
    function showAlert(status, message) {
        $ionicPopup.alert({
            title: status,
            template: message,
        });

    }

    //redirect to splash screen if not logged innerHeight
    var url_userdata = 'http://fadedbarbershop.co.uk/rest/rest.php/client/user_data';

    $http.get(url_userdata).then(function(response) {
        var session_user_id = response.data.id
        var approved = response.data.approved

        if (angular.isUndefined(session_user_id)) {

            $state.go('splash');

        }
        if (approved.trim() == 'no') {
            $state.go('notApproved');
        }

    }).catch(function(response) {

        showAlert('danger!', 'Some error occured. Please try again.');
    });


    //show data
    $scope.user_data = null;

    var url = 'http://fadedbarbershop.co.uk/rest/rest.php/client/user_data';

    $http.get(url).then(function(response) {
        $scope.user_data = response.data;
        $scope.username = response.data.username;
        $scope.email = response.data.email;
        $scope.profile_picture = response.data.profile_picture;
        $scope.first_name = response.data.first_name;
        $scope.last_name = response.data.last_name;
        $scope.phone_number = $scope.user_data.phone_number;


        if (response.data.status && response.data.message) {
            var status = response.data.status + '!';
            var message = response.data.message;

            showAlert(status, message);


        }



    }).catch(function(response) {
console.log(response);
        showAlert('danger!', 'Some error occured. Please try again.');
    });





    $scope.submit = function(username, email, profile_picture, first_name, last_name, phone_number) {

        //fields left empty
        //if(!username || !password) {
        //   alert('empty usr or pw');
        //   return;
        // }


        var input = {
            username: username,
            email: email,
            profile_picture: profile_picture,
            first_name: first_name,
            last_name: last_name,
            phone_number: phone_number
        };



        var url = 'http://fadedbarbershop.co.uk/rest/rest.php/client/save_account_settings';

        $http.put(url, input).then(function(response) {
            //success
            var status = response.data.status + '!';
            status = status.trim();
            var message = response.data.message;
            message = message.trim();
            console.log(status);
            if (status.trim() == 'success!') {
                $state.go('menu.accountSettings');
            }
            showAlert(status, message);

        }).catch(function(response) {
console.log(response);
            showAlert('danger!', 'Some error occured. Please try again.');
        });
    }





})

.controller('passwordSettingsCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {


    //redirect to splash screen if not logged innerHeight
    var url_userdata = 'http://fadedbarbershop.co.uk/rest/rest.php/client/user_data';

    $http.get(url_userdata).then(function(response) {
        var session_user_id = response.data.id
        var approved = response.data.approved

        if (angular.isUndefined(session_user_id)) {

            $state.go('splash');

        }
        if (approved.trim() == 'no') {
            $state.go('notApproved');
        }

    }).catch(function(response) {
console.log(response);
        showAlert('danger!', 'Some error occured. Please try again.');
    });



    //popup alert starts here
    function showAlert(status, message) {
        $ionicPopup.alert({
            title: status,
            template: message,
        });

    }


    $scope.old_password = null;
    $scope.new_password = null;
    $scope.confirm_new_password = null;

    $scope.submit = function(old_password, new_password, confirm_new_password) {

        //fields left empty
        //if(!username || !password) {
        //   alert('empty usr or pw');
        //   return;
        // }


        var input = {
            old_password: old_password,
            new_password: new_password,
            confirm_new_password: confirm_new_password
        };



        var url = 'http://fadedbarbershop.co.uk/rest/rest.php/client/save_password';

        $http.put(url, input).then(function(response) {
            //success
            var status = response.data.status + '!';
            status = status.trim();
            var message = response.data.message;
            message = message.trim();
            console.log(status);
            if (status.trim() == 'success!') {
                $state.go('menu.passwordSettings');
            }
            showAlert(status, message);

        }).catch(function(response) {
console.log(response);
            showAlert('danger!', 'Some error occured. Please try again.');
        });
    }


})






.controller('blogsCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {

    //redirect to splash screen if not logged innerHeight
    var url_userdata = 'http://fadedbarbershop.co.uk/rest/rest.php/client/user_data';

    $http.get(url_userdata).then(function(response) {
        var session_user_id = response.data.id
        var approved = response.data.approved

        if (angular.isUndefined(session_user_id)) {

            $state.go('splash');

        }
        if (approved.trim() == 'no') {
            $state.go('notApproved');
        }

    }).catch(function(response) {
console.log(response);
        showAlert('danger!', 'Some error occured. Please try again.');
    });



    //popup alert starts here
    function showAlert(status, message) {
        $ionicPopup.alert({
            title: status,
            template: message,
        });

    }

    $scope.blogs = null;

    var url = 'http://fadedbarbershop.co.uk/rest/rest.php/client/blogs';

    $http.get(url).then(function(response) {
        $scope.blogs = response.data;

        if (response.data.status && response.data.message) {
            var status = response.data.status + '!';
            var message = response.data.message;

            showAlert(status, message);


        }

        return;

    }).catch(function(response) {
console.log(response);
        showAlert('danger!', 'Some error occured. Please try again.');
    });


})

.controller('blogsViewCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {

    //redirect to splash screen if not logged innerHeight
    var url_userdata = 'http://fadedbarbershop.co.uk/rest/rest.php/client/user_data';

    $http.get(url_userdata).then(function(response) {
        var session_user_id = response.data.id
        var approved = response.data.approved

        if (angular.isUndefined(session_user_id)) {

            $state.go('splash');

        }
        if (approved.trim() == 'no') {
            $state.go('notApproved');
        }

    }).catch(function(response) {
console.log(response);
        showAlert('danger!', 'Some error occured. Please try again.');
    });



    $scope.showAlert = function(status, message) {
        var alertPopup = $ionicPopup.alert({
            title: status,
            template: message
        });
    };

    var id = $stateParams.id;
    var title = $stateParams.title;
    var content = $stateParams.content;
    $scope.state = $state.current
    $scope.params = $stateParams;

})

.controller('pagesCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {


    //redirect to splash screen if not logged innerHeight
    var url_userdata = 'http://fadedbarbershop.co.uk/rest/rest.php/client/user_data';

    $http.get(url_userdata).then(function(response) {
        var session_user_id = response.data.id
        var approved = response.data.approved

        if (angular.isUndefined(session_user_id)) {

            $state.go('splash');

        }
        if (approved.trim() == 'no') {
            $state.go('notApproved');
        }

    }).catch(function(response) {
console.log(response);
        showAlert('danger!', 'Some error occured. Please try again.');
    });



    //popup alert starts here
    $scope.showAlert = function(status, message) {
        var alertPopup = $ionicPopup.alert({
            title: status,
            template: message,
        });
    };
    //popup alert ends here

})

.controller('pagesViewCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {

    //redirect to splash screen if not logged innerHeight
    var url_userdata = 'http://fadedbarbershop.co.uk/rest/rest.php/client/user_data';

    $http.get(url_userdata).then(function(response) {
        var session_user_id = response.data.id
        var approved = response.data.approved

        if (angular.isUndefined(session_user_id)) {

            $state.go('splash');

        }
        if (approved.trim() == 'no') {
            $state.go('notApproved');
        }

    }).catch(function(response) {
console.log(response);
        showAlert('danger!', 'Some error occured. Please try again.');
    });



    $scope.showAlert = function(status, message) {
        var alertPopup = $ionicPopup.alert({
            title: status,
            template: message
        });
    };

    var id = $stateParams.id;
    var title = $stateParams.title;
    var content = $stateParams.content;
    $scope.state = $state.current
    $scope.params = $stateParams;

})

.controller('usersCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {

    function showAlert(status, message) {
        $ionicPopup.alert({
            title: status,
            template: message,
        });

    }

    //redirect to splash screen if not logged innerHeight
    var url_userdata = 'http://fadedbarbershop.co.uk/rest/rest.php/client/user_data';

    $http.get(url_userdata).then(function(response) {
        var session_user_id = response.data.id
        var approved = response.data.approved

        if (angular.isUndefined(session_user_id)) {

            $state.go('splash');

        }
        if (approved.trim() == 'no') {
            $state.go('notApproved');
        }

    }).catch(function(response) {
console.log(response);
        showAlert('danger!', 'Some error occured. Please try again.');
    });



    //popup alert starts here
    $scope.showAlert = function(status, message) {
        var alertPopup = $ionicPopup.alert({
            title: status,
            template: message,
        });
    };
    //popup alert ends here

    //show data

    $scope.users = null;

    var url = 'http://fadedbarbershop.co.uk/rest/rest.php/client/users';

    $http.get(url).then(function(response) {
        $scope.users = response.data;
        if ($scope.users == null) {
            return;
        }

        if (response.data.status && response.data.message) {
            var status = response.data.status + '!';
            var message = response.data.message;

            showAlert(status, message);


        }



    }).catch(function(response) {
console.log(response);
        showAlert('danger!', 'Some error occured. Please try again.');
    });



})

.controller('usersViewCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {


    //redirect to splash screen if not logged innerHeight
    var url_userdata = 'http://fadedbarbershop.co.uk/rest/rest.php/client/user_data';

    $http.get(url_userdata).then(function(response) {
        var session_user_id = response.data.id
        var approved = response.data.approved

        if (angular.isUndefined(session_user_id)) {

            $state.go('splash');

        }
        if (approved.trim() == 'no') {
            $state.go('notApproved');
        }

    }).catch(function(response) {
console.log(response);
        showAlert('danger!', 'Some error occured. Please try again.');
    });



    $scope.showAlert = function(status, message) {
        var alertPopup = $ionicPopup.alert({
            title: status,
            template: message
        });
    };

    var id = $stateParams.id;
    var username = $stateParams.username;
    var email = $stateParams.email;
    var profile_picture = $stateParams.profile_picture;
    var first_name = $stateParams.first_name;
    var last_name = $stateParams.last_name;
    var qualification = $stateParams.qualification;
    var teaching_experience = $stateParams.teaching_experience;
    var specialities = $stateParams.specialities;
    $scope.state = $state.current
    $scope.params = $stateParams;

})

.controller('usersMessageCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {

    //redirect to splash screen if not logged innerHeight
    var url_userdata = 'http://fadedbarbershop.co.uk/rest/rest.php/client/user_data';

    $http.get(url_userdata).then(function(response) {
        var session_user_id = response.data.id
        var approved = response.data.approved

        if (angular.isUndefined(session_user_id)) {

            $state.go('splash');

        }
        if (approved.trim() == 'no') {
            $state.go('notApproved');
        }

    }).catch(function(response) {
console.log(response);
        showAlert('danger!', 'Some error occured. Please try again.');
    });



    $scope.showAlert = function(status, message) {
        var alertPopup = $ionicPopup.alert({
            title: status,
            template: message
        });
    };

    var id = $stateParams.id;
    var username = $stateParams.username;
    var email = $stateParams.email;
    var profile_picture = $stateParams.profile_picture;
    $scope.state = $state.current
    $scope.params = $stateParams;


    //popup alert starts here
    function showAlert(status, message) {
        $ionicPopup.alert({
            title: status,
            template: message,
        });

    }


    $scope.action = null;
    $scope.to_user_id = null;
    $scope.content = null;

    $scope.submit = function(action, to_user_id, content) {

        //fields left empty
        //if(!username || !password) {
        //   alert('empty usr or pw');
        //   return;
        // }


        var input = {
            to_user_id: to_user_id,
            content: content
        };



        var url = 'http://fadedbarbershop.co.uk/rest/rest.php/client/'.action;

        $http.post(url, input).then(function(response) {
            //success
            var status = response.data.status + '!';
            status = status.trim();
            var message = response.data.message;
            message = message.trim();
            console.log(status);
            if (status.trim() == 'success!') {
                $state.go('menu.users');
            }
            showAlert(status, message);

        }).catch(function(response) {
console.log(response);
            showAlert('danger!', 'Some error occured. Please try again.');
        });
    }



})

.controller('usersReviewsCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {

    //popup alert starts here
    function showAlert(status, message) {
        $ionicPopup.alert({
            title: status,
            template: message,
        });

    }

    //redirect to splash screen if not logged innerHeight
    var url_userdata = 'http://fadedbarbershop.co.uk/rest/rest.php/client/user_data';

    $http.get(url_userdata).then(function(response) {
        var session_user_id = response.data.id
        var approved = response.data.approved

        if (angular.isUndefined(session_user_id)) {

            $state.go('splash');

        }
        if (approved.trim() == 'no') {
            $state.go('notApproved');
        }

    }).catch(function(response) {
console.log(response);
        showAlert('danger!', 'Some error occured. Please try again.');
    });



    $scope.showAlert = function(status, message) {
        var alertPopup = $ionicPopup.alert({
            title: status,
            template: message
        });
    };

    var id = $stateParams.id;
    var username = $stateParams.username;
    var email = $stateParams.email;
    var profile_picture = $stateParams.profile_picture;
    $scope.state = $state.current
    $scope.params = $stateParams;

})


.controller('usersRequestCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {

    //popup alert starts here
    function showAlert(status, message) {
        $ionicPopup.alert({
            title: status,
            template: message,
        });

    }

    //redirect to splash screen if not logged innerHeight
    var url_userdata = 'http://fadedbarbershop.co.uk/rest/rest.php/client/user_data';

    $http.get(url_userdata).then(function(response) {
        var session_user_id = response.data.id
        var approved = response.data.approved

        if (angular.isUndefined(session_user_id)) {

            $state.go('splash');

        }
        if (approved.trim() == 'no') {
            $state.go('notApproved');
        }

    }).catch(function(response) {

        showAlert('danger!', 'Some error occured. Please try again.');
    });



    $scope.showAlert = function(status, message) {
        var alertPopup = $ionicPopup.alert({
            title: status,
            template: message
        });
    };

    var id = $stateParams.id;
    var username = $stateParams.username;
    var email = $stateParams.email;
    var profile_picture = $stateParams.profile_picture;
    $scope.state = $state.current
    $scope.params = $stateParams;
    //calendar

    



    ////////
    
    
    var filtered;
  
  var url = 'http://fadedbarbershop.co.uk/rest/rest.php/admin/requests_by_user_id/'+id;

    $http.get(url).then(function(response) 
        {
        
			    var requests = response.data;
				filtered=requests;	     
	
			   
	      
				 //return filtered;
				 
				 
				  //ui calendar
  
  /* config object */
    var v_events=[];
        
//	if(filtered)
//		{
//		
		console.log("WOWOWOWOWW");
		//console.log(filtered);
		
		for (var b in filtered){
			//console.log(filtered[b]);
			filtered[b].backgroundColor='red';
			//console.log(filtered[b]);
		}
		
		
		
		    //      console.log($scope);
				$scope.eventSources= filtered;
                v_events=filtered;
//				showAlert('success!','got data!');

//		}
//	else
//		{
//			showAlert('danger!','havent got any data!');
//			
//		}

        $scope.uiConfig = {
        calendar: {
            height: 450,
            editable: true,
            selectable: true,
            selectHelper: true,
            events:v_events,
            // function for storing event
            select: function(startD, endD, allDay) {

                var start = moment(startD).format('YYYY-MM-DD HH:mm:ss');
                var end = moment(endD).format('YYYY-MM-DD HH:mm:ss');
                //push data into start field
                $scope.start = start;
                //push data into end field
                $scope.end = end;

                $('#calendar_request').fullCalendar('renderEvent', {
                        start: start,
                        end: end,
                    },
                    true // make the event "stick"
                );
                $('#calendar_request').fullCalendar('unselect');

            },

            header: {
                left: 'month basicWeek basicDay agendaWeek agendaDay',
                center: 'title',
                right: 'today prev,next'
            },
            dayClick: $scope.alertEventOnClick,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize
        }


    };
			
        }).catch(function(response) 
        {
      
          showAlert('danger!','Some error occured. Please try again.');
        });
    
    ///////
    
    
    
    $scope.eventSources = [];



    $scope.action = null;
    $scope.provided_to_user_id = null;
    $scope.start = null;
    $scope.end = null;

    $scope.submit = function(action, provided_to_user_id, start, end) {

        //fields left empty
        //if(!username || !password) {
        //   alert('empty usr or pw');
        //   return;
        // }


        var input = {
            provided_to_user_id: id,
            start: start,
            end: end
        };



        var url = 'http://fadedbarbershop.co.uk/rest/rest.php/client/users/request';

        $http.post(url, input).then(function(response) {
            //success
            var status = response.data.status + '!';
            status = status.trim();
            var message = response.data.message;
            message = message.trim();
            console.log(status);
            if (status.trim() == 'success!') {
                $state.go('menu.requests');
            }
            showAlert(status, message);

        }).catch(function(response) {

            showAlert('danger!', 'Some error occured. Please try again.');
        });
    }


    //show data
    $scope.requests = null;

    var url = 'http://fadedbarbershop.co.uk/rest/rest.php/client/requests';

    $http.get(url).then(function(response) {
        $scope.requests = response.data;


        if (response.data.status && response.data.message) {
            var status = response.data.status + '!';
            var message = response.data.message;

            showAlert(status, message);


        }

        return;

    }).catch(function(response) {

        showAlert('danger!', 'Some error occured. Please try again.');
    });



})




.controller('requestsCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {

    //popup alert starts here
    function showAlert(status, message) {
        $ionicPopup.alert({
            title: status,
            template: message,
        });

    }

    //redirect to splash screen if not logged innerHeight
    var url_userdata = 'http://fadedbarbershop.co.uk/rest/rest.php/client/user_data';

    $http.get(url_userdata).then(function(response) {
        var session_user_id = response.data.id
        var approved = response.data.approved

        if (angular.isUndefined(session_user_id)) {

            $state.go('splash');

        }
        if (approved.trim() == 'no') {
            $state.go('notApproved');
        }

    }).catch(function(response) {
console.log(response);
        showAlert('danger!', 'Some error occured. Please try again.');
    });





    //show data

    $scope.requests = null;

    var url = 'http://fadedbarbershop.co.uk/rest/rest.php/client/requests';


    $http.get(url).then(function(response) {
        $scope.requests = response.data;
        if ($scope.requests == null) {
            return;
        }

        if (response.data.status && response.data.message) {
            var status = response.data.status + '!';
            var message = response.data.message;

            showAlert(status, message);


        }



    }).catch(function(response) {
console.log(response);
        showAlert('danger!', 'Some error occured. Please try again.');
    });



})

.controller('requestsViewCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {

    var get_username_by_id = function(id, retElem) {

        var url_username = 'http://fadedbarbershop.co.uk/rest/rest.php/admin/username_by_id/' + id;

        $http.get(url_username).then(function(response) {
            console.log(response);

            if (response.data.status && response.data.message || !response.data.username) {
                var status = response.data.status + '!';
                var message = response.data.message;

                //return 'username not found';
                $scope.params.provided_to_user_id = 'username not found';

            } else {
                var username = response.data.username;
                //onsole.info(username);
                $scope.params.provided_to_user_id = username;
                // console.info('hello');

            }




        }).catch(function(response) {
            $scope.params.provided_to_user_id = 'username not found';

            // return 'username not found';
        });

    }

    //redirect to splash screen if not logged innerHeight
    var url_userdata = 'http://fadedbarbershop.co.uk/rest/rest.php/client/user_data';

    $http.get(url_userdata).then(function(response) {
        var session_user_id = response.data.id
        var approved = response.data.approved

        if (angular.isUndefined(session_user_id)) {

            $state.go('splash');

        }
        if (approved.trim() == 'no') {
            $state.go('notApproved');
        }

    }).catch(function(response) {

        showAlert('danger!', 'Some error occured. Please try again.');
    });





    $scope.showAlert = function(status, message) {
        var alertPopup = $ionicPopup.alert({
            title: status,
            template: message
        });
    };

    var id = $stateParams.id;
    var start = $stateParams.start;
    var end = $stateParams.end;
    var created_by_user_id = $stateParams.created_by_user_id;
    var provider_to_user_id = $stateParams.provided_to_user_id;
    var accepted = $stateParams.accepted;
    var paid = $stateParams.paid;
    var price = $stateParams.price;
    var reviewed_by_client = $stateParams.reviewed_by_client;
    var reviewed_by_provider = $stateParams.reviewed_by_provider;
    $scope.state = $state.current
    $scope.params = $stateParams;
    $scope.params.provided_to_user_id = get_username_by_id($scope.params.provided_to_user_id);


})

.controller('requestsMessageCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {

    function showAlert(status, message) {
        $ionicPopup.alert({
            title: status,
            template: message,
        });

    }


    //redirect to splash screen if not logged innerHeight
    var url_userdata = 'http://fadedbarbershop.co.uk/rest/rest.php/client/user_data';

    $http.get(url_userdata).then(function(response) {
        var session_user_id = response.data.id
        var approved = response.data.approved

        if (angular.isUndefined(session_user_id)) {

            $state.go('splash');

        }
        if (approved.trim() == 'no') {
            $state.go('notApproved');
        }

    }).catch(function(response) {

        showAlert('danger!', 'Some error occured. Please try again.');
    });



    $scope.showAlert = function(status, message) {
        var alertPopup = $ionicPopup.alert({
            title: status,
            template: message
        });
    };

    var id = $stateParams.id;
    var start = $stateParams.start;
    var end = $stateParams.end;
    var created_by_user_id = $stateParams.created_by_user_id;
    var provider_to_user_id = $stateParams.provided_to_user_id;
    var accepted = $stateParams.accepted;
    var paid = $stateParams.paid;
    var price = $stateParams.price;
    var reviewed_by_client = $stateParams.reviewed_by_client;
    var reviewed_by_provider = $stateParams.reviewed_by_provider;
    $scope.state = $state.current
    $scope.params = $stateParams;




    $scope.action = null;
    $scope.to_user_id = null;
    $scope.content = null;

    $scope.submit = function(action, to_user_id, content) {

        //fields left empty
        //if(!username || !password) {
        //   alert('empty usr or pw');
        //   return;
        // }


        var input = {
            to_user_id: provider_to_user_id,
            content: content,
        };



        var url = 'http://fadedbarbershop.co.uk/rest/rest.php/client/request/messageuser';

        $http.post(url, input).then(function(response) {
            //success
            var status = response.data.status + '!';
            status = status.trim();
            var message = response.data.message;
            message = message.trim();
            console.log(status);
            if (status.trim() == 'success!') {
                $state.go('menu.messages');
            }
            showAlert(status, message);

        }).catch(function(response) {

            showAlert('danger!', 'Some error occured. Please try again.');
        });
    }


})

.controller('requestsReviewCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {

    //redirect to splash screen if not logged innerHeight
    var url_userdata = 'http://fadedbarbershop.co.uk/rest/rest.php/client/user_data';

    $http.get(url_userdata).then(function(response) {
        var session_user_id = response.data.id
        var approved = response.data.approved

        if (angular.isUndefined(session_user_id)) {

            $state.go('splash');

        }
        if (approved.trim() == 'no') {
            $state.go('notApproved');
        }

    }).catch(function(response) {

        showAlert('danger!', 'Some error occured. Please try again.');
    });



    $scope.showAlert = function(status, message) {
        var alertPopup = $ionicPopup.alert({
            title: status,
            template: message
        });
    };

    var id = $stateParams.id;
    var start = $stateParams.start;
    var end = $stateParams.end;
    var created_by_user_id = $stateParams.created_by_user_id;
    var provider_to_user_id = $stateParams.provided_to_user_id;
    var accepted = $stateParams.accepted;
    var paid = $stateParams.paid;
    var price = $stateParams.price;
    var reviewed_by_client = $stateParams.reviewed_by_client;
    var reviewed_by_provider = $stateParams.reviewed_by_provider;
    $scope.state = $state.current
    $scope.params = $stateParams;



    //popup alert starts here
    function showAlert(status, message) {
        $ionicPopup.alert({
            title: status,
            template: message,
        });

    }


    $scope.action = null;
    $scope.to_user_id = null;
    $scope.content = null;

    $scope.submit = function(action, for_user_id, request_id, content) {

        //fields left empty
        //if(!username || !password) {
        //   alert('empty usr or pw');
        //   return;
        // }


        var input = {
            for_user_id: for_user_id,
            request_id: request_id,
            content: content
        };



        var url = 'http://fadedbarbershop.co.uk/rest/rest.php/client/'.action;

        $http.post(url, input).then(function(response) {
            //success
            var status = response.data.status + '!';
            status = status.trim();
            var message = response.data.message;
            message = message.trim();
            console.log(status);
            if (status.trim() == 'success!') {
                $state.go('menu.requests');
            }
            showAlert(status, message);

        }).catch(function(response) {

            showAlert('danger!', 'Some error occured. Please try again.');
        });
    }




})




.controller('messagesCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {

    //popup alert starts here
    function showAlert(status, message) {
        $ionicPopup.alert({
            title: status,
            template: message,
        });

    }

    //redirect to splash screen if not logged innerHeight
    var url_userdata = 'http://fadedbarbershop.co.uk/rest/rest.php/client/user_data';

    $http.get(url_userdata).then(function(response) {
        var session_user_id = response.data.id
        var approved = response.data.approved
        $scope.session_user_id = session_user_id;

        if (angular.isUndefined(session_user_id)) {

            $state.go('splash');

        }
        if (approved.trim() == 'no') {
            $state.go('notApproved');
        }

    }).catch(function(response) {

        showAlert('danger!', 'Some error occured. Please try again.');
    });



    //popup alert starts here
    $scope.showAlert = function(status, message) {
        var alertPopup = $ionicPopup.alert({
            title: status,
            template: message,
        });
    };
    //popup alert ends here


    //display data
    $scope.messages = null;


    var url = 'http://fadedbarbershop.co.uk/rest/rest.php/client/messages';

    $http.get(url).then(function(response) {
        $scope.messages = response.data;
        if ($scope.messages == null) {
            return;
        }

        if (response.data.status && response.data.message) {
            var status = response.data.status + '!';
            var message = response.data.message;

            showAlert(status, message);


        }

        return;

    }).catch(function(response) {

        showAlert('danger!', 'Some error occured. Please try again.');
    });



})


.controller('messagesViewCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {



    var get_username_by_id = function(id, retElem) {

        var url_username = 'http://fadedbarbershop.co.uk/rest/rest.php/admin/username_by_id/' + id;

        $http.get(url_username).then(function(response) {
            console.log(response);

            if (response.data.status && response.data.message) {
                var status = response.data.status + '!';
                var message = response.data.message;

                //return 'username not found';
                $scope.params.from = 'username not found';

            } else {
                var username = response.data.username;
                //onsole.info(username);
                $scope.params.from = username;
                // console.info('hello');

            }




        }).catch(function(response) {
            $scope.params.from = 'username not found';

            // return 'username not found';
        });

    }

    //popup alert starts here
    function showAlert(status, message) {
        $ionicPopup.alert({
            title: status,
            template: message,
        });

    }


    //redirect to splash screen if not logged innerHeight
    var url_userdata = 'http://fadedbarbershop.co.uk/rest/rest.php/client/user_data';

    $http.get(url_userdata).then(function(response) {
        var session_user_id = response.data.id
        var approved = response.data.approved
        $scope.session_user_id = session_user_id;

        if (angular.isUndefined(session_user_id)) {

            $state.go('splash');

        }
        if (approved.trim() == 'no') {
            $state.go('notApproved');
        }

    }).catch(function(response) {

        showAlert('danger!', 'Some error occured. Please try again.');
    });



    $scope.showAlert = function(status, message) {
        var alertPopup = $ionicPopup.alert({
            title: status,
            template: message
        });
    };

    var id = $stateParams.id;
    var content = $stateParams.content;
    var type = $stateParams.type;
    var datetime = $stateParams.datetime;
    var to_user_id = $stateParams.to_user_id;
    var from_user_id = $stateParams.from_user_id;
    var to = $stateParams.to;
    var from = $stateParams.from;

    $scope.state = $state.current
    $scope.params = $stateParams;
    console.log($scope.params.from);
    console.log(get_username_by_id($scope.params.from));
    $scope.params.provider_to_user_id = get_username_by_id($scope.params.provider_to_user_id);

})

.controller('messagesReplyCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {

    //popup alert starts here
    function showAlert(status, message) {
        $ionicPopup.alert({
            title: status,
            template: message,
        });

    }

    //redirect to splash screen if not logged innerHeight
    var url_userdata = 'http://fadedbarbershop.co.uk/rest/rest.php/client/user_data';

    $http.get(url_userdata).then(function(response) {
        var session_user_id = response.data.id
        var approved = response.data.approved

        if (angular.isUndefined(session_user_id)) {

            $state.go('splash');

        }
        if (approved.trim() == 'no') {
            $state.go('notApproved');
        }

    }).catch(function(response) {

        showAlert('danger!', 'Some error occured. Please try again.');
    });



    $scope.showAlert = function(status, message) {
        var alertPopup = $ionicPopup.alert({
            title: status,
            template: message
        });
    };

    var id = $stateParams.id;
    var content = $stateParams.content;
    var type = $stateParams.type;
    var datetime = $stateParams.datetime;
    var to_user_id = $stateParams.to_user_id;
    var from_user_id = $stateParams.from_user_id;
    var to = $stateParams.to;
    var from = $stateParams.from;
    $scope.state = $state.current
    $scope.params = $stateParams;





    $scope.action = null;
    $scope.to_user_id = from_user_id;
    $scope.content = null;

    $scope.submit = function(action, to_user_id, content) {

        //fields left empty
        //if(!username || !password) {
        //   alert('empty usr or pw');
        //   return;
        // }


        var input = {
            to_user_id: to_user_id,
            content: content
        };



        var url = 'http://fadedbarbershop.co.uk/rest/rest.php/client/message/reply';

        $http.post(url, input).then(function(response) {
            //success
            var status = response.data.status + '!';
            status = status.trim();
            var message = response.data.message;
            message = message.trim();
            console.log(status);
            if (status.trim() == 'success!') {
                $state.go('menu.messages');
            }
            showAlert(status, message);

        }).catch(function(response) {

            showAlert('danger!', 'Some error occured. Please try again.');
        });
    }

})

.controller('reviewsCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {

    function showAlert(status, message) {
        $ionicPopup.alert({
            title: status,
            template: message,
        });

    }

    //redirect to splash screen if not logged innerHeight
    var url_userdata = 'http://fadedbarbershop.co.uk/rest/rest.php/client/user_data';

    $http.get(url_userdata).then(function(response) {
        var session_user_id = response.data.id
        var approved = response.data.approved

        if (angular.isUndefined(session_user_id)) {

            $state.go('splash');

        }
        if (approved.trim() == 'no') {
            $state.go('notApproved');
        }

    }).catch(function(response) {

        showAlert('danger!', 'Some error occured. Please try again.');
    });



    //popup alert ends here


    //show data


    var url = 'http://fadedbarbershop.co.uk/rest/rest.php/client/reviews';

    $http.get(url).then(function(response) {
        $scope.reviews = response.data;
        if ($scope.reviews == null) {
            return;
        }

        if (response.data.status && response.data.message) {
            var status = response.data.status + '!';
            var message = response.data.message;

            showAlert(status, message);


        }

        return;

    }).catch(function(response) {

        showAlert('danger!', 'Some error occured. Please try again.');
    });



})


.controller('reviewsViewCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {

    var get_username_by_id = function(id, retElem) {

        var url_username = 'http://fadedbarbershop.co.uk/rest/rest.php/admin/username_by_id/' + id;

        $http.get(url_username).then(function(response) {
            console.log(response);

            if (response.data.status && response.data.message) {
                var status = response.data.status + '!';
                var message = response.data.message;

                //return 'username not found';
                $scope.params.by = 'username not found';

            } else {
                var username = response.data.username;
                //onsole.info(username);
                $scope.params.by = username;
                // console.info('hello');

            }




        }).catch(function(response) {
            $scope.params.by = 'username not found';

            // return 'username not found';
        });

    }

    function showAlert(status, message) {
        $ionicPopup.alert({
            title: status,
            template: message,
        });

    }


    //redirect to splash screen if not logged innerHeight
    var url_userdata = 'http://fadedbarbershop.co.uk/rest/rest.php/client/user_data';

    $http.get(url_userdata).then(function(response) {
        var session_user_id = response.data.id
        var approved = response.data.approved

        if (angular.isUndefined(session_user_id)) {

            $state.go('splash');

        }
        if (approved.trim() == 'no') {
            $state.go('notApproved');
        }

    }).catch(function(response) {

        showAlert('danger!', 'Some error occured. Please try again.');
    });



    $scope.showAlert = function(status, message) {
        var alertPopup = $ionicPopup.alert({
            title: status,
            template: message
        });
    };
    var id = $stateParams.id;
    var by = $stateParams.by;
    var content = $stateParams.content;
    var datetime = $stateParams.datetime;
    $scope.state = $state.current
    $scope.params = $stateParams;
    $scope.params.by = get_username_by_id($scope.params.by);
})

.controller('calendarCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http, $window) {

    function showAlert(status, message) {
        $ionicPopup.alert({
            title: status,
            template: message,
        });

    }


    //redirect to splash screen if not logged innerHeight
    var url_userdata = 'http://fadedbarbershop.co.uk/rest/rest.php/client/user_data';

    $http.get(url_userdata).then(function(response) {
        var session_user_id = response.data.id
        var approved = response.data.approved

        if (angular.isUndefined(session_user_id)) {

            $state.go('splash');

        }
        if (approved.trim() == 'no') {
            $state.go('notApproved');
        }

    }).catch(function(response) {

        showAlert('danger!', 'Some error occured. Please try again.');
    });

    //show data



    $scope.requests = null;
    $scope.events = null;

    var filtered;

    var url = 'http://fadedbarbershop.co.uk/rest/rest.php/client/requests';

    $http.get(url).then(function(response) {

        var requests = response.data;
        filtered = requests.filter(function(el) {
            return el.accepted == "yes";
        });
        for (var i = 0; i < filtered.length; i++) {
            delete filtered[i]["provided_to_user_id"];
            delete filtered[i]["created_by_user_id"];
            delete filtered[i]["paid"];
            delete filtered[i]["accepted"];
            delete filtered[i]["reviewed_by_provider"];
            delete filtered[i]["reviewed_by_client"];
            delete filtered[i]["price"];
        }


        /* config object */
        var v_events = [];

        if (filtered) {

            console.log(filtered);

            $scope.eventSources = filtered;
            v_events = filtered;
            showAlert('success!', 'got data!');
        } else {
            showAlert('danger!', 'havent got any data!');

        }
        $scope.uiConfig = {
            calendar: {
                height: 450,
                editable: true,
                selectable: false,
                selectHelper: false,
                header: {
                    left: 'month basicWeek basicDay agendaWeek agendaDay',
                    center: 'title',
                    right: 'today prev,next'
                },
                dayClick: $scope.alertEventOnClick,
                eventDrop: $scope.alertOnDrop,
                eventResize: $scope.alertOnResize,
                events: v_events
            }

        };




    }).catch(function(response) {

        showAlert('danger!', 'Some error occured. Please try again.');
    });









})

.controller('socialCtrl', function($scope, $state, $stateParams, $ionicPopup, $timeout, $http) {

    function showAlert(status, message) {
        $ionicPopup.alert({
            title: status,
            template: message,
        });

    }

    //redirect to splash screen if not logged innerHeight
    var url_userdata = 'http://fadedbarbershop.co.uk/rest/rest.php/client/user_data';

    $http.get(url_userdata).then(function(response) {
        var session_user_id = response.data.id
        var approved = response.data.approved

        if (angular.isUndefined(session_user_id)) {

            $state.go('splash');

        }
        if (approved.trim() == 'no') {
            $state.go('notApproved');
        }

    }).catch(function(response) {

        showAlert('danger!', 'Some error occured. Please try again.');
    });





    //show data
    $scope.product_data = null;

    var url = 'http://fadedbarbershop.co.uk/rest/rest.php/client/product_data';

    $http.get(url).then(function(response) {
        $scope.product_data = response.data;
        if ($scope.product_data == null) {
            return;
        }

        if (response.data.status && response.data.message) {
            var status = response.data.status + '!';
            var message = response.data.message;

            showAlert(status, message);


        }

        return;

    }).catch(function(response) {

        showAlert('danger!', 'Some error occured. Please try again.');
    });



})
