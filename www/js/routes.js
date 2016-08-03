angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('splash', {
    url: '/splash',
    templateUrl: 'templates/splash.html',
    controller: 'splashCtrl'
  })

  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'registerCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })
  

  .state('forgotPassword', {
    url: '/forgot-password',
    templateUrl: 'templates/forgotPassword.html',
    controller: 'forgotPasswordCtrl'
  })
  
  .state('notApproved', {
    url: '/not-approved',
    templateUrl: 'templates/notApproved.html',
    controller: 'notApprovedCtrl'
  })
  
    .state('menu', {
    url: '/side-menu',
    templateUrl: 'templates/menu.html',
    abstract:true,
    controller: 'menuCtrl'
  })

  .state('menu.accountSettings', {
    url: '/account-settings',
    views: {
      'side-menu': {
        templateUrl: 'templates/accountSettings.html',
        controller: 'accountSettingsCtrl'
      }
    }
  })

  .state('menu.passwordSettings', {
    url: '/password-settings',
    views: {
      'side-menu': {
        templateUrl: 'templates/passwordSettings.html',
        controller: 'passwordSettingsCtrl'
      }
    }
  })
  

  
 
  
 
  .state('menu.blogs', {
    url: '/blogs',
    views: {
      'side-menu': {
        templateUrl: 'templates/blogs.html',
        controller: 'blogsCtrl'
      }
    }
  })
  
   .state('menu.blogsView', {
    url: '/blogsView/:id/:title/:content',
    views: {
      'side-menu': {
        templateUrl: 'templates/blogsView.html',
        controller: 'blogsViewCtrl'
      }
    }
  })
  
  .state('menu.pages', {
    url: '/pages',
    views: {
      'side-menu': {
        templateUrl: 'templates/pages.html',
        controller: 'pagesCtrl'
      }
    }
  })
  
   .state('menu.pagesView', {
    url: '/pagesView/:id/:title/:content',
    views: {
      'side-menu': {
        templateUrl: 'templates/pagesView.html',
        controller: 'pagesViewCtrl'
      }
    }
  })
  
  .state('menu.users', {
    url: '/users',
    views: {
      'side-menu': {
        templateUrl: 'templates/users.html',
        controller: 'usersCtrl'
      }
    }
  })
  
   .state('menu.usersView', {
    url: '/usersView/:id/:username/:email/:profile_picture/:first_name/:last_name/:qualification/:teaching_experience/:specialities',
    views: {
      'side-menu': {
        templateUrl: 'templates/usersView.html',
        controller: 'usersViewCtrl'
      }
    }
  })
  
   .state('menu.usersMessage', {
    url: '/usersMessage/:id/:username/:email/:profile_picture',
    views: {
      'side-menu': {
        templateUrl: 'templates/usersMessage.html',
        controller: 'usersMessageCtrl'
      }
    }
  })
  
    .state('menu.usersReviews', {
    url: '/usersReviews/:id/:username/:email/:profile_picture',
    views: {
      'side-menu': {
        templateUrl: 'templates/usersReviews.html',
        controller: 'usersReviewsCtrl'
      }
    }
  })
  
  .state('menu.usersRequest', {
    url: '/usersRequest/:id/:username/:email/:profile_picture',
    views: {
      'side-menu': {
        templateUrl: 'templates/usersRequest.html',
        controller: 'usersRequestCtrl'
      }
    }
  })
  
 
  
  .state('menu.requests', {
    url: '/requests',
    views: {
      'side-menu': {
        templateUrl: 'templates/requests.html',
        controller: 'requestsCtrl'
      }
    }
  })
  
  .state('menu.requestsView', {
    url: '/requestsView/:id/:start/:end/:created_by_user_id/:provided_to_user_id/:accepted/:paid/:price/:reviewed_by_client/:reviewed_by_provider',
    views: {
      'side-menu': {
        templateUrl: 'templates/requestsView.html',
        controller: 'requestsViewCtrl'
      }
    }
  })
  
  .state('menu.requestsMessage', {
    url: '/requestsMessage/:id/:start/:end/:created_by_user_id/:provided_to_user_id/:accepted/:paid/:price/:reviewed_by_client/:reviewed_by_provider',
    views: {
      'side-menu': {
        templateUrl: 'templates/requestsMessage.html',
        controller: 'requestsMessageCtrl'
      }
    }
  })
  
  .state('menu.requestsReview', {
    url: '/requestsReview/:id/:start/:end/:created_by_user_id/:provided_to_user_id/:accepted/:paid/:price/:reviewed_by_client/:reviewed_by_provider',
    views: {
      'side-menu': {
        templateUrl: 'templates/requestsReview.html',
        controller: 'requestsReviewCtrl'
      }
    }
  })

  
  .state('menu.messages', {
    url: '/messages',
    views: {
      'side-menu': {
        templateUrl: 'templates/messages.html',
        controller: 'messagesCtrl'
      }
    }
  })
  
  
   .state('menu.messagesView', {
    url: '/messagesView/:id/:content/:type/:datetime/:to_user_id/:from_user_id/:to/:from',
    views: {
      'side-menu': {
        templateUrl: 'templates/messagesView.html',
        controller: 'messagesViewCtrl'
      }
    }
  })

    
  .state('menu.messagesReply', {
    url: '/messagesReply/:id/:content/:type/:datetime/:to_user_id/:from_user_id/:to/:from',
    views: {
      'side-menu': {
        templateUrl: 'templates/messagesReply.html',
        controller: 'messagesReplyCtrl'
      }
    }
  })
  
   .state('menu.reviews', {
    url: '/reviews',
    views: {
      'side-menu': {
        templateUrl: 'templates/reviews.html',
        controller: 'reviewsCtrl'
      }
    }
  })
  
  
   .state('menu.reviewsView', {
    url: '/reviewsView/:id/:datetime/:content/:by',
    views: {
      'side-menu': {
        templateUrl: 'templates/reviewsView.html',
        controller: 'reviewsViewCtrl'
      }
    }
  })

  
    .state('menu.calendar', {
    url: '/calendar',
    views: {
      'side-menu': {
        templateUrl: 'templates/calendar.html',
        controller: 'calendarCtrl'
      }
    }
  })
  
  .state('menu.social', {
    url: '/social',
    views: {
      'side-menu': {
        templateUrl: 'templates/social.html',
        controller: 'socialCtrl'
      }
    }
  })
  


$urlRouterProvider.otherwise('/splash')

  

});